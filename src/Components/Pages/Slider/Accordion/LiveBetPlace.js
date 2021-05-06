import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import Modal from "react-modal";
import Login from "../../Login/Login";
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
}) => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
//   // upcoming match
//   const [dbData, setDbData] = useState([]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/user/getUpcomingMatch`)
//       .then((res) => res.json())
//       .then((data) => setDbData(data));
//   });
//   const findEl = dbData.find((data) => data._id === passId);
//   const [value, setValue] = useState({
//     amount: 0,
//   });
  // live match
  const [live, setLive] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMatch`)
      .then((res) => res.json())
      .then((data) => setLive(data));
  });
  const findElement = live.find((data) => data._id === passUniqueId);
  const [liveValue, setLiveValue] = useState({
    amount: 0,
  });

  const handleChange = (e) => {
    const values = {...liveValue };
    values[e.target.name] = e.target.value;
    setLiveValue(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Upcoming"+value.amount, (value.amount * passAmount).toFixed(2));
    console.log("Live"+liveValue.amount, (liveValue.amount * passValueAmount).toFixed(2));
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
            <h1 className="text-center">Place Bet Option</h1> <hr /> <br />
            <Form onSubmit={handleSubmit}>
              <Form.Label>
                {findElement?.match1} VS{" "}
                {findElement?.match2} ||{" "}
                {findElement?.event} ||
                {findElement?.startdate} ,{" "}
                {findElement?.starttime}
              </Form.Label>{" "}
              <div className="Form Row">
                <Form.Group as={Col}>
                  <span>
                    {passValue} <span className="badge badge-danger">{passValueAmount}</span>{" "}
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
                      <span>{(liveValue.amount * passValueAmount).toFixed(2)} TK</span>
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
