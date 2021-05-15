import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Modal from "react-modal";
import Login from "../../Login/Login";
import { BetValidation } from "../../MyProfile/Validation";
import "./PlaceBetFrom.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const LiveBetPlace = ({
  modalIsOpen,
  closeModal,
  passUniqueId,
  passValue,
  passValueAmount,
  passTitle,
}) => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(today);
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  // bet info
  const [bet, setBet] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getBet`)
      .then((res) => res.json())
      .then((data) => setBet(data));
  }, []);
  const findUsers = bet.find((data) => data.username === getUser?.user);
  // live match
  const [live, setLive] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMatch`)
      .then((res) => res.json())
      .then((data) => setLive(data));
  }, []);
  const findElement = live.find((data) => data._id === passUniqueId);
  const [liveValue, setLiveValue] = useState({
    amount: 0,
  });
  // get user data
  const [balance, setBalance] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setBalance(data));
  }, []);
  const findUser = balance.find((u) => u.username === getUser?.user);

  // get club holder
  const [club, setClub] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, []);
  const findClub = club.find((u) => u.club === findUser?.club);

  const handleChange = (e) => {
    const values = { ...liveValue };
    values[e.target.name] = e.target.value;
    setLiveValue(values);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    setErrors(BetValidation(liveValue, findUser?.balance));
    if (liveValue.amount > findUser?.balance) {
      e.preventDefault();
      return;
    } else if (liveValue.amount < 50) {
      e.preventDefault();
      return;
    }
    const bets = {
      username: getUser?.user,
      date: time,
      match1: findElement?.match1,
      match2: findElement?.match2,
      betTitle: passValue,
      betAmount: liveValue.amount,
      winingAmount: (liveValue.amount * passValueAmount).toFixed(2),
      betRate: passValueAmount,
      question: passTitle,
      status: "Pending",
    };
    fetch(`http://localhost:5000/user/createBet`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bets),
    }).then(() => {
      console.log("Submit");
    });
    // Bet balance update
    const user = getUser.user;
    const BetUser = { ...liveValue };
    BetUser.balance = findUser?.balance;
    fetch(`http://localhost:5000/user/bet/${user}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(BetUser),
    }).then((result) => {
      console.log(result);
    });
    // club holder profit add
    const username = findClub?.username;
    const profit = findClub?.profit;
    const amount = liveValue.amount;
    if (!findUsers) {
      const clubBalance = {
        balance: amount * (profit / 100).toFixed(2),
      };
      fetch(`http://localhost:5000/user/clubBalanceUpdate/${username}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(clubBalance),
      }).then((result) => {
        console.log(result);
      });
    }
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {getUser?.user ? (
          <div>
            {liveValue.success && (
              <p className="alert alert-success">{liveValue.success}</p>
            )}
            <h1 className="text-center">Place Bet Option</h1> <hr /> <br />
            <Form onSubmit={handleSubmit}>
              <Form.Label>
                {findElement?.match1} VS {findElement?.match2} ||{" "}
                {findElement?.event} ||
                {findElement?.startdate} , {findElement?.starttime}
              </Form.Label>{" "}
              <div className="Form Row">
                <Form.Group as={Col}>
                  <span>
                    {passValue}{" "}
                    <span className="badge badge-danger">
                      {passValueAmount}
                    </span>{" "}
                  </span>
                </Form.Group>
                <Form.Group as={Col}>
                  <h4 className="wintaka">
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Deposit Amount</span>
                      <span>{liveValue.amount} TK</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Winning Amount</span>
                      <span>
                        {(liveValue.amount * passValueAmount).toFixed(2)} TK
                      </span>
                    </div>
                  </h4>
                </Form.Group>
              </div>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter Your Amount"
                  name="amount"
                />
                {errors.amount && (
                  <p className="text-danger">{errors.amount}</p>
                )}
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col}>
                  <Button
                    className="form-control"
                    style={{ backgroundColor: "#ff3d71", border: "none" }}
                    type="submit"
                  >
                    Place Bet
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
        ) : (
          <Login />
        )}
      </Modal>
    </div>
  );
};

export default LiveBetPlace;
