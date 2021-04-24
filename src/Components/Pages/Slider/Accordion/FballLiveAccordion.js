import React, { useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import football from "../../../image/SliderImg/cricket.png";
import "../Slider.css";

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
            <Accordion.Toggle as={Card.Header} eventKey="0" className="d-flex">
              <img src={football} className="img-fluid" alt="" />
              Sri Lanka v Bangladesh at Pallekele, 1st Test - day 4 <span className="d-flex ml-2 align-items-center badge badge-danger"> Live</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="my-3 text-center">
                <div className="team1">
                  <strong>Bangladesh <span>1.9</span></strong>
                </div> <h4>VS</h4> <div className="team2">
                  <strong>India <span>1.5</span></strong>
                </div>
                <button>Place bet</button>
                <br/>
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
    </div>
  );
}

export default FballLiveAccordion;
