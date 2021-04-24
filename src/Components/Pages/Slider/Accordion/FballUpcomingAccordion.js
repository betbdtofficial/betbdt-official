import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { BiLoaderCircle } from "react-icons/bi";
import football from "../../../image/SliderImg/f_ball.png";
import "../Slider.css";
function FballUpcomingAccordion() {
  const KEY = "DwEVqiCx7bN4oWeZK6xWkwiHLlz1";
  const [upcomingMatch, setUpcomingMatch] = useState([0]);
  const first5 = upcomingMatch.slice(0, 5);
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

      {first5.map((result) => (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <img src={football} className="img-fluid" alt="" /> {result.name} <span class="badge badge-danger"> Upcoming</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>{result.date}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      ))}
    </div>
  );
}

export default FballUpcomingAccordion;
