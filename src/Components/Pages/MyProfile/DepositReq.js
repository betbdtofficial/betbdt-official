import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from "../../image/payment-method.png";
import { DepoValidation } from "./Validation";
dotenv.config();
const DepositReq = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(today);
  const [depoMethod, setDepoMethod] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getDepoMethod`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setDepoMethod(data));
  }, []);
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [value, setValue] = useState({
    method: "",
    amount: "",
    from: "",
    username: "",
    date: "",
    button: "",
  });
  const handleChange = (e) => {
    const values = { ...value };
    values[e.target.name] = e.target.value;
    setValue(values);
  };
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(DepoValidation(value));
    if (value.from.length < 11) {
      return;
    } else if (value.amount < 200) {
      return;
    }
    const deposit = { ...value };
    deposit.username = getUser.username;
    deposit.date = time;
    deposit.button = "Pending";
    // send deposit request
    fetch(`https://betbdt.herokuapp.com/user/createDeposit`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(deposit),
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
          <div className="col-md-12">
            <div className="deposit-request-box">
              <br />
              <h2 className="text-center heading">Request Deposit</h2>
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
                      onChange={handleChange}
                      as="select"
                    >
                      <option>Select Method</option>
                      {depoMethod.map((data) => (
                        <option>
                          {data.gatewayName} {data.number}
                        </option>
                      ))}
                    </Form.Control>
                    {errors.method && (
                      <p className="text-danger">{errors.method}</p>
                    )}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>
                      Amount <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="amount"
                      onChange={handleChange}
                      type="number"
                      placeholder="Amount"
                    />
                    {errors.amount && (
                      <p className="text-danger">{errors.amount}</p>
                    )}
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>
                      From <span style={{ color: "red" }}>*</span>{" "}
                    </Form.Label>
                    <Form.Control
                      name="from"
                      onChange={handleChange}
                      type="number"
                      placeholder="From"
                    />
                    {errors.from && (
                      <p className="text-danger">{errors.from}</p>
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

export default DepositReq;
