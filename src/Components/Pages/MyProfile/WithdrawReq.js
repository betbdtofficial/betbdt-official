import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from "../../image/payment-method.png";
import { Validation } from "./Validation";
dotenv.config();
const WithdrawReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(today);

  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [values, setValues] = useState({
    method: "",
    type: "",
    amount: "",
    number: "",
    username: "",
    date: "",
    button: "",
  });
  const handleChange = (e) => {
    const copyValue = { ...values };
    copyValue[e.target.name] = e.target.value;
    setValues(copyValue);
    setErrors("");
  };

  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/me?u=${getUser?.username}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const findUser = dbData.find((data) => data.username === getUser?.username);

  const [method, setMethod] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getMethod`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMethod(data));
  }, []);
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    setErrors(Validation(values, findUser?.balance));
    if (values.number.length < 11) {
      e.preventDefault();
      return;
    } else if (values.amount > findUser?.balance) {
      e.preventDefault();
      return;
    } else if (values.amount < 50) {
      e.preventDefault();
      return;
    }
    const withdraw = { ...values };
    withdraw.username = findUser?.username;
    withdraw.date = time;
    withdraw.button = "Pending";
    // send withdraw request
    fetch(`https://betbdt.herokuapp.com/user/withdrawReq`, {
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
    const user = findUser?.username;
    const withdrawUser = { ...values };
    withdrawUser.balance = findUser?.balance;
    fetch(`https://betbdt.herokuapp.com/user/${user}`, {
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
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                      type="number"
                      placeholder="To "
                    />
                    {errors.number && (
                      <p style={{ color: "red" }}>{errors.number}</p>
                    )}
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
