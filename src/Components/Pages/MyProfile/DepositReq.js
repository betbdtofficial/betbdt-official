import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from '../../image/payment-method.png';
const DepositReq = () => {
  return (
    <div className="DepositRequestMain">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="deposit-request-box">
              <br />
              <h2 className="text-center heading">Request a Deposit</h2>
              <img src={payment} className="img-fluid" alt="" />
              <br />
              <br />
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Method To <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control as="select">
                      <option>Select Method</option>
                      <option>Bkash +88017123456</option>
                      <option>Nagad +8801982123456</option>
                      <option>Rocket +8801740123456</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>
                      Amount <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control type="number" placeholder="Amount" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>
                      From <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control type="number" placeholder="From" />
                  </Form.Group>
                </Form.Row>
                <br />
                <Button
                  className="form-control signupBtn"
                  variant="primary"
                  type="submit"
                >
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

export default DepositReq;
