import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { BiLoaderCircle } from "react-icons/bi";
import cricket from "../../../image/SliderImg/cricket.png";
import "../Slider.css";

function CriUpcoming() {
  const KEY = "DwEVqiCx7bN4oWeZK6xWkwiHLlz1";
  const [ upcomingMatch, setUpcomingMatch ] = useState([0]);
  const first10 = upcomingMatch.slice(0,10)
  useEffect(() => {
    fetch(`https://cricapi.com/api/matchCalendar?apikey=${KEY}`)
      .then((res) => res.json())
      .then((data) => setUpcomingMatch(data.data));
  }, []);
  return (
    <div>
      <div className="liveMatch">
        <span>
          {" "}
          <BiLoaderCircle className="icon" /> Upcoming Match{" "}
        </span>
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <img src={cricket} className="img-fluid" alt="" />{upcomingMatch.name} <span class="badge badge-danger"> Upcoming</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>111</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default CriUpcoming;
