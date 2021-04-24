import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import cricket from "../../../image/SliderImg/cricket.png";
import "../Slider.css";

function FballLiveAccordion() {
  const liveMatch = [1255828, 1260256, 1254075];

  const [upcomingMatch, setUpcomingMatch] = useState(0);
  useEffect(() => {
    fetch(
      `https://cricapi.com/api/cricketScore?apikey=DwEVqiCx7bN4oWeZK6xWkwiHLlz1&unique_id=1244235`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <img src={cricket} className="img-fluid" alt="" />
            Football
            <span class="badge badge-danger">Live</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default FballLiveAccordion;
