import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import football from "../../../image/SliderImg/f_ball.png";
import vs from '../../../image/vs.png';
import "../Slider.css";
import PlaceBetFrom from "./PlaceBetFrom";

function FballLiveAccordion() {
  const liveMatch = [1255828,1260256,1254075]
  const [upcomingMatch, setUpcomingMatch] = useState(0);
  useEffect(() => {
    fetch(`https://cricapi.com/api/cricketScore?apikey=DwEVqiCx7bN4oWeZK6xWkwiHLlz1&unique_id=1244235`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, []);
  return (
    <div>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <img src={football} className="img-fluid" alt="" />Football
             <span class="badge badge-danger">Live</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="my-3 justify-content-center align-items-center d-flex">
                <div className="team1">
                  <strong>Bangladesh <span>1.9</span></strong>
                </div>
                <div className="vs">
                  <img src={vs} alt="" width="150px"/>
                </div>
                <div className="team2">
                  <strong>India <span>1.5</span></strong>
                </div> <br/>
                <PlaceBetFrom></PlaceBetFrom>
                <br/>
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    </div>
  );
}

export default FballLiveAccordion;
