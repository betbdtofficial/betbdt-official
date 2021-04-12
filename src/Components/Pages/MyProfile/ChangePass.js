import React from "react";
import { Button, Col, Form } from "react-bootstrap";

const ChangePass = () => {
  return (
    <>
      <div className="changePassword">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading text-center">Change Password</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Old Password
                    </Form.Label>
                    <Form.Control type="password" value="123456789" />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      New Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                </Form.Row>
                <br />
                <Button
                  className="form-control signupBtn"
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
