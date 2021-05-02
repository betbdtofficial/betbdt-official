import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import cricket from "../../../image/SliderImg/cricket.png";
import "../Slider.css";
import PlaceBetFrom from "./PlaceBetFrom";
function CriLiveAccordion() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMatch`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
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
      <PlaceBetFrom
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></PlaceBetFrom>
      {dbData.map((data) => (
        <Accordion defaultActiveKey="0">
          <div>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <img src={cricket} className="img-fluid" alt="" />
              {data.match1} VS {data.match2}, {data.event} || {data.startdate},{" "}
              {data.starttime} <span class="badge badge-danger">Live</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Control
                            type="submit"
                            value={`${data.match1} ${data.m1Amount}`}
                            className="teambtn"
                            onClick={openModal}
                          />
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Control
                            type="submit"
                            value={`${data.match2} ${data.m2Amount}`}
                            className="teambtn"
                            onClick={openModal}
                          />
                        </Form.Group>
                      </Form.Row>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Collapse>
          </div>
        </Accordion>
      ))}
    </div>
  );
}

export default CriLiveAccordion;
