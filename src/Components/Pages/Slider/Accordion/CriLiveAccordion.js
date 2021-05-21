import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Form } from "react-bootstrap";
import cricket from "../../../image/SliderImg/cricket.png";
import "../Slider.css";
import LiveBetPlace from "./LiveBetPlace";
dotenv.config();
function CriLiveAccordion() {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getMatch`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [passUniqueId, setUniquePassId] = useState([]);
  const [passValue, setPassValue] = useState([]);
  const [passValueAmount, setPassValueAmount] = useState([]);
  const [passTitle, setPassTitle] = useState([]);
  const handlePleceFormPassData = (id, match, amount, title) => {
    setUniquePassId(id);
    setPassValue(match);
    setPassValueAmount(amount);
    setPassTitle(title);
  };
  return (
    <div>
      <LiveBetPlace
        passUniqueId={passUniqueId}
        passValue={passValue}
        passValueAmount={passValueAmount}
        passTitle={passTitle}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      ></LiveBetPlace>
      {dbData.map((data) => (
        <Accordion key={data._id} defaultActiveKey="0">
          <div>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <img src={cricket} className="img-fluid" alt="" />
              {data.match1} VS {data.match2}, {data.event} || {data.startdate},{" "}
              {data.starttime}{" "}
              <span class="badge badge-danger">Live Score</span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 p-0">
                    <div>
                      {data.title1 && (
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            {data.title1}{" "}
                            <span class="badge badge-danger">Live</span>
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
                                      data.v1Amount,
                                      data.title1
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
                                      data.v2Amount,
                                      data.title1
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
                      )}
                      {data.title2 && (
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            {data.title2}{" "}
                            <span class="badge badge-danger">Live</span>
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
                                      data.v3Amount,
                                      data.title2
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
                                      data.v4Amount,
                                      data.title2
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
                      )}
                      {data.title3 && (
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            {data.title3}{" "}
                            <span class="badge badge-danger">Live</span>
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
                                      data.v5Amount,
                                      data.title3
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
                                      data.v6Amount,
                                      data.title3
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
                      )}
                      {data.title4 && (
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            {data.title4}{" "}
                            <span class="badge badge-danger">Live</span>
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
                                      data.v7Amount,
                                      data.title4
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
                                      data.v8Amount,
                                      data.title4
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
                      )}
                      {data.title5 && (
                        <Accordion defaultActiveKey="0">
                          <Accordion.Toggle as={Card.Header} eventKey="0">
                            {data.title5}{" "}
                            <span class="badge badge-danger">Live</span>
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
                                      data.v9Amount,
                                      data.title5
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
                                      data.v10Amount,
                                      data.title5
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
                      )}
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
