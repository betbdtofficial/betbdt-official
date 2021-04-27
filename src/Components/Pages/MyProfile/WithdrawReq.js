import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from "../../image/payment-method.png";
import { Validation } from "./Validation";
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
    setErrors("");
  };

  const [method, setMethod] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getMethod`)
      .then((res) => res.json())
      .then((data) => setMethod(data));
  }, []);

  // get user data
  const [balance, setBalance] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setBalance(data));
  }, []);
  const findUser = balance.find((u) => u.username === getUser.user);
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values, findUser?.balance));
    if (values.to.length < 11) {
      return;
    } else if (values.amount > findUser?.balance) {
      return;
    } else if (values.amount < 50) {
      return;
    }
    const withdraw = { ...values };
    withdraw.user = getUser.user;
    // send withdraw request
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
    // Withdraw balance update
    const user = getUser.user;
    const withdrawUser = { ...values };
    withdrawUser.balance = findUser?.balance;
    fetch(`http://localhost:5000/user/${user}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(withdrawUser),
    }).then((result) => {
      console.log(result);
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
              {errors.success && (
                <p className="alert alert-success">{errors.success}</p>
              )}
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
                    >
                      <option>Select Method</option>
                      {method.map((m) => (
                        <option>{m.gatewayName}</option>
                      ))}
                    </Form.Control>
                    {errors.method && (
                      <p style={{ color: "red" }}>{errors.method}</p>
                    )}
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
                    >
                      <option>Account Type</option>
                      <option>Personal</option>
                      <option>Agent</option>
                    </Form.Control>
                    {errors.type && (
                      <p style={{ color: "red" }}>{errors.type}</p>
                    )}
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>
                      Amount <span style={{ color: "red" }}>*</span> (min: 50
                      BDT)
                    </Form.Label>
                    <Form.Control
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      type="number"
                      min="50"
                      placeholder="Amount"
                    />
                    {errors.amount && (
                      <p style={{ color: "red" }}>{errors.amount}</p>
                    )}
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
                    />
                    {errors.to && <p style={{ color: "red" }}>{errors.to}</p>}
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
