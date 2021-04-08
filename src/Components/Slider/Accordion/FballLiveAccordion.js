import React, { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import football from "../../image/SliderImg/f_ball.png";
import "../Slider.css";

function FballLiveAccordion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div class="panel panel-default">
              <div class="panel-body">
                <img src={football} className="img-fluid" alt="" /> Victoria VS
                South Australia, Marsh One Day Cup/Victoria V South Australia ||
                2021-04-08 04:30:00{" "}
                <span class="badge badge-danger">Live Score</span>
              </div>
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Both Teams Score <span class="badge badge-danger">Live</span>{" "}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <img src={football} className="img-fluid" alt="" /> FC Porto VS
            Chelsea, UEfA Championes league / FC Porto v Chelsea || 2021-04-08
            01:00:00 <span class="badge badge-danger">Live Score</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default FballLiveAccordion;
