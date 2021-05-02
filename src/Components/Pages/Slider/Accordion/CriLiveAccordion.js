import React from "react";
import { Accordion, Card, Col, Form } from "react-bootstrap";
import football from "../../../image/SliderImg/f_ball.png";
import "../Slider.css";
function FballLiveAccordion() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <div>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <img src={football} className="img-fluid" alt="" />
          Bangladesh Vs India
            <span class="badge badge-danger">Live</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control type="submit" value="Bangladesh 1.9" className="teambtn" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control type="submit" value="India 1.4" className="teambtn"/>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Accordion defaultActiveKey="0">
        <div>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <img src={football} className="img-fluid" alt="" />
            Sri Lanka vs Bangladesh
            <span class="badge badge-danger">Live</span>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Control type="submit" value="Sri Lanka  1.3" className="teambtn" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control type="submit" value="Bangladesh 1.6" className="teambtn"/>
                      </Form.Group>
                    </Form.Row>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Collapse>
        </div>
      </Accordion>
    </div>
  );
}

export default FballLiveAccordion;
