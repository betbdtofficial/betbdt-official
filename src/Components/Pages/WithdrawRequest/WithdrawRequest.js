import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import payment from '../../image/payment-method.png';
import UserSidebar from '../../User/UserDeshboard/UserSidebar/UserSidebar';
const withdrawRequest = () => {
    return (
        <div className="DepositRequestMain mt-5 mb-5">
      <UserSidebar></UserSidebar>
      <div className="container">
        <div className="row">
          <div className="col-md-5 m-auto">
            <div className="deposit-request-box">
              <br />
              <h1 className="text-center">Withdraw Request</h1>
              <img src={payment} className="img-fluid" alt="" />
              <br />
              <br />
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Method <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control as="select">
                      <option>Select Method</option>
                      <option>Bkash</option>
                      <option>Nagad</option>
                      <option>Rocket</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                     Type <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control as="select">
                      <option>Account Type</option>
                      <option>Personal</option>
                      <option>Agent</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Amount <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control type="number" placeholder="Amount" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      To <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control type="number" placeholder="To " />
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

export default withdrawRequest;