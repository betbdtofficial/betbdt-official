import React from "react";
import { Button, Form } from "react-bootstrap";
import Topnotice from "../../Topnotice/Topnotice";

const Login = () => {
  return (
    <div className="mainSignup">
      <Topnotice></Topnotice>
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="signUpF mt-5">
              <Form>
                  <h1>Login</h1> <br/>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group> <br/>
                <Button className="form-control signupBtn" type="submit">
                Log In
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
