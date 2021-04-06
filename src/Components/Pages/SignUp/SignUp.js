import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Topnotice from "../../Topnotice/Topnotice";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="mainSignup">
      <Topnotice></Topnotice>
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="signUpF mt-5">
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Full Name <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      Country <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Bangladesh</option>
                      <option>india</option>
                      <option>canada</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Select Club <span style={{ color: "red" }}>*</span>
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose Club</option>
                      <option>Don Club</option>
                      <option>The Boss</option>
                      <option>Natore</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      Mobile Number <span style={{ color: "red" }}> *</span>{" "}
                    </Form.Label>
                    <Form.Control type="number" placeholder="Mobile Number" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Sponsor's{" "}
                      <span style={{ color: "red" }}> *</span>{" "}
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Sponsor's name"
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      Username <span style={{ color: "red" }}> *</span>{" "}
                    </Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col}>
                  <Form.Label>
                      Password <span style={{ color: "red" }}> *</span>{" "}
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>
                    Confirm password <span style={{ color: "red" }}> *</span>{" "}
                    </Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                  </Form.Group>
                </Form.Row>

                <Button className="form-control signupBtn" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
