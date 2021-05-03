import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Modal from "react-modal";
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
const PlaceBetFrom = ({ modalIsOpen, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1 className="text-center">Place Bet Option</h1> <hr /> <br />
          <Form>
            <Form.Label>
              Punjab Kings VS Delhi Capitals || Indian Premier League ||
              02-05-2021 , 08-00-PM
            </Form.Label>{" "}
            <hr/>
            <br />
            <div className="Form Row">
              <Form.Group as={Col}>
                <span>Punjab Kings 1.6</span>
              </Form.Group>
              <Form.Group as={Col}>
                <h2 className="wintaka">Deposit 250 TK Return 950 TK</h2>
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Amount" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Button
                  className="form-control"
                  style={{backgroundColor: "#ff3d71", border:"none"}}
                  type="submit"
                >
                  Submit
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default PlaceBetFrom;
