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
  },[]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = (match) => {
    setIsOpen(true);
    setIsOpen(match);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const [passId, setPassId] = useState([]);
  const [passMatch, setPassMatch] = useState([]);
  const [passAmount, setPassAmount] = useState([]);
  const handlePleceFormPassData = (id, match, amount) => {
    setPassId(id);
    setPassMatch(match);
    setPassAmount(amount);
    console.log(id, match, amount)
  };
  // console.log(passMatch, passId, passAmount)
  return (
    <div>
      <div className="liveMatch">
        <span>
          {" "}
          <BiLoaderCircle className="icon" /> Upcoming Match{" "}
        </span>
      </div>
      <PlaceBetFrom
        passId={passId}
        passMatch={passMatch}
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
                  <div className="col-md-12 p-0">
                    <div>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.title1}{" "}
                          <span class="badge badge-danger">Upcoming</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Form.Row>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value1,
                                    data.v1Amount
                                  )
                                }
                              >
                                {data.value1}{" "}
                                <span className="badge badge-danger">
                                  {data.v1Amount}
                                </span>
                              </Button>
                            </Form.Group>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value2,
                                    data.v2Amount
                                  )
                                }
                              >
                                {data.value2}{" "}
                                <span class="badge badge-danger">
                                  {data.v2Amount}
                                </span>
                              </Button>
                            </Form.Group>
                          </Form.Row>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.title2}{" "}
                          <span class="badge badge-danger">Upcoming</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Form.Row>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value3,
                                    data.v3Amount
                                  )
                                }
                              >
                                {data.value3}{" "}
                                <span class="badge badge-danger">
                                  {data.v3Amount}
                                </span>
                              </Button>
                            </Form.Group>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value4,
                                    data.v4Amount
                                  )
                                }
                              >
                                {data.value4}{" "}
                                <span class="badge badge-danger">
                                  {data.v4Amount}
                                </span>
                              </Button>
                            </Form.Group>
                          </Form.Row>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.title3}{" "}
                          <span class="badge badge-danger">Upcoming</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Form.Row>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value5,
                                    data.v5Amount
                                  )
                                }
                              >
                                {data.value5}{" "}
                                <span class="badge badge-danger">
                                  {data.v5Amount}
                                </span>
                              </Button>
                            </Form.Group>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value6,
                                    data.v6Amount
                                  )
                                }
                              >
                                {data.value6}{" "}
                                <span class="badge badge-danger">
                                  {data.v6Amount}
                                </span>
                              </Button>
                            </Form.Group>
                          </Form.Row>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.title4}{" "}
                          <span class="badge badge-danger">Upcoming</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Form.Row>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value7,
                                    data.v7Amount
                                  )
                                }
                              >
                                {data.value7}{" "}
                                <span class="badge badge-danger">
                                  {data.v7Amount}
                                </span>
                              </Button>
                            </Form.Group>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value8,
                                    data.v8Amount
                                  )
                                }
                              >
                                {data.value8}{" "}
                                <span class="badge badge-danger">
                                  {data.v8Amount}
                                </span>
                              </Button>
                            </Form.Group>
                          </Form.Row>
                        </Accordion.Collapse>
                      </Accordion>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          {data.title5}{" "}
                          <span class="badge badge-danger">Upcoming</span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Form.Row>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value9,
                                    data.v9Amount
                                  )
                                }
                              >
                                {data.value9}{" "}
                                <span class="badge badge-danger">
                                  {data.v9Amount}
                                </span>
                              </Button>
                            </Form.Group>
                            <Form.Group onClick={openModal} as={Col}>
                              <Button
                                type="submit"
                                className="teambtn form-control bg-sucess"
                                onClick={() =>
                                  handlePleceFormPassData(
                                    data._id,
                                    data.value10,
                                    data.v10Amount
                                  )
                                }
                              >
                                {data.value10}{" "}
                                <span class="badge badge-danger">
                                  {data.v10Amount}
                                </span>
                              </Button>
                            </Form.Group>
                          </Form.Row>
                        </Accordion.Collapse>
                      </Accordion>
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
