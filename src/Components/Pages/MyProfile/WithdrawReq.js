import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from "../../image/payment-method.png";
import Validation from "./Validation";
const WithdrawReq = () => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const [values, setValues] = useState({
    method: "",
    type: "",
    amount: "",
    to: "",
    user: "",
  });
  const handleChange = (e) => {
    const copyValue = { ...values };
    copyValue[e.target.name] = e.target.value;
    setValues(copyValue);
    if (e.target.name === "amount") {
      let { value, min } = e.target;
      value = Math.min(Number(min), Number(value));
      copyValue.amount = value;
    }
  };
  const formClear = () => {
    setValues({
      method: "",
      type: "",
      amount: "",
      to: "",
    });
  };
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
    e.preventDefault();
    formClear();
    setErrors(Validation(values))
    const withdraw = { ...values };
    withdraw.user = getUser.user;
    fetch(`http://localhost:5000/user/withdrawReq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(withdraw),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="DepositRequestMain">
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <br />
            <h2 className="text-center heading">Withdraw Request</h2>
            <div className="deposit-request-box">
              <img src={payment} className="img-fluid" alt="" />
              <br />
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Method <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="method"
                      value={values.method}
                      onChange={handleChange}
                      as="select"
                      required
                    >
                      <option>Select Method</option>
                      <option>Bkash</option>
                      <option>Nagad</option>
                      <option>Rocket</option>
                    </Form.Control>
                    {errors.method && <p>{errors.method}</p> }
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      Type <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="type"
                      value={values.type}
                      onChange={handleChange}
                      as="select"
                      required
                    >
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
                    <Form.Control
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      type="number"
                      min="50"
                      placeholder="Amount"
                      required
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>
                      To <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="to"
                      value={values.to}
                      onChange={handleChange}
                      type="number"
                      placeholder="To "
                      required
                    />
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

export default WithdrawReq;
