import React from "react";
import { Button, Form } from "react-bootstrap";
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
const PlaceBetFrom = () => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Place bet</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center" ref={(_subtitle) => (subtitle = _subtitle)}>
          Place Bet
        </h2>
        <div>
          <Form>
            <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Amount" />
            </Form.Group>
            <Form.Label>Select a Team</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose a Team</option>
              <option>Bangladesh</option>
              <option>India</option>
            </Form.Control> <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default PlaceBetFrom;
