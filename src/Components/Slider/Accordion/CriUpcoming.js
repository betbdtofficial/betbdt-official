import React from "react";
import { Accordion, Card } from "react-bootstrap";
import cricket from "../../image/SliderImg/cricket.png";
import "../Slider.css";

function CriUpcoming() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
          <img src={cricket} className="img-fluid" alt=""/>  Granada VS Man Utd, UEfA Europa League / Granada v Man Utd || 2021-04-09 01:00:00 <span class="badge badge-danger">Upcoming</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
          <img src={cricket} className="img-fluid" alt=""/>  Leeds VS Liverpool, England Premier League / Leeds v Liverpool || 2021-04-20 01:00:00 <span class="badge badge-danger">Upcoming</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default CriUpcoming;
