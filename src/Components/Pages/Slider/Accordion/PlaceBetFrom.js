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
const PlaceBetFrom = ({
  modalIsOpen,
  closeModal,
  passMatch,
  passId,
  passAmount,
}) => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getUpcomingMatch`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  const findEl = dbData.find((data) => data._id === passId);
  const [value, setValue] = useState({
    amount: 0,
  });

  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value.amount, (value.amount * passAmount).toFixed(2))
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
                {findEl?.match1} VS {findEl?.match2} || {findEl?.event} ||
                {findEl?.startdate} , {findEl?.starttime}
              </Form.Label>{" "}
              <div className="Form Row">
                <Form.Group as={Col}>
                  <span>
                    {passMatch} {passAmount}{" "}
                  </span>
                </Form.Group>
                <Form.Group as={Col}>
                  <h4 className="wintaka">
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Deposit Amount</span>
                      <span>{value.amount} TK</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <span>Winning Amount</span>
                      <span>{(value.amount * passAmount).toFixed(2)} TK</span>
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

export default PlaceBetFrom;
