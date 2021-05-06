import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Form } from "react-bootstrap";
import { BiLoaderCircle } from "react-icons/bi";
import cricket from "../../../image/SliderImg/cricket.png";
import "../Slider.css";
import PlaceBetFrom from "./PlaceBetFrom";
function CriUpcomingAccordion() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getUpcomingMatch`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  });
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = (match) => {
    setIsOpen(true);
    setIsOpen(match);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [passMatch, setPassMatch] = useState([]);
  const [passId, setPassId] = useState([]);
  const [passAmount, setPassAmount] = useState([]);
  const handlePleceFormPassData = (match, id, amount) => {
    setPassMatch(match);
    setPassId(id);
    setPassAmount(amount);
  };
  return (
    <div>
      <div className="liveMatch">
        <span>
          {" "}
          <BiLoaderCircle className="icon" /> Upcoming Match{" "}
        </span>
      </div>
      <PlaceBetFrom
        passMatch={passMatch}
        passId={passId}
        passAmount={passAmount}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></PlaceBetFrom>
      {dbData.map((data) => (
        <Accordion key={data._id} defaultActiveKey="0">
          <div>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <img src={cricket} className="img-fluid" alt="" />
              {data.match1} VS {data.match2}, {data.event} || {data.startdate},{" "}
              {data.starttime} <span class="badge badge-danger">Upcoming</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <Form.Row>
                        <Form.Group onClick={openModal} as={Col}>
                          <Button
                            type="button"
                            value={`${data.match1} ${data.m1Amount}`}
                            className="teambtn form-control"
                            onClick={() =>
                              handlePleceFormPassData(
                                data.match1,
                                data._id,
                                data.m1Amount
                              )
                            }
                          >
                            {data.match1}{" "}
                            <span class="badge badge-danger">
                              {data.m1Amount}
                            </span>
                          </Button>
                        </Form.Group>
                        <Form.Group onClick={openModal} as={Col}>
                        <Button
                            type="button"
                            value={`${data.match1} ${data.m1Amount}`}
                            className="teambtn form-control"
                            onClick={() =>
                              handlePleceFormPassData(
                                data.match2,
                                data._id,
                                data.m2Amount
                              )
                            }
                          >
                            {data.match2}{" "}
                            <span class="badge badge-danger">
                              {data.m2Amount}
                            </span>
                          </Button>
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

export default CriUpcomingAccordion;
