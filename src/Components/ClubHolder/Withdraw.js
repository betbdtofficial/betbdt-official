// import { Button } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import payment from "../image/payment-method.png";
import { Validation } from "../Pages/MyProfile/Validation";
const Withdraw = () => {
  const today = Date.now();
  const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today)

  const storage = sessionStorage.getItem("club");
  const clubUser = JSON.parse(storage);
  const [values, setValues] = useState({
    method: "",
    type: "",
    amount: "",
    to: "",
    username: "",
    club: "",
    date: "",
    button: ""
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
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setBalance(data));
  }, []);
  const findUser = balance.find((u) => u.username === clubUser.club);
  console.log(findUser)
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
    withdraw.username = clubUser.club;
    withdraw.club = findUser?.club;
    withdraw.date = time;
    withdraw.button = "Pending"
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
    const club = clubUser?.club;
    const withdrawUser = { ...values };
    withdrawUser.balance = findUser?.balance;
    fetch(`http://localhost:5000/user/club/${club}`, {
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
    <div className="DepositRequestMain mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
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
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{
                    backgroundColor: "rgb(18 110 81)",
                    color: "white",
                    marginTop: "10px",
                    textAlign: 'center',
                    width: "100%",
                    padding: "4px",
                    border: "none",
                  }}
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

export default Withdraw;
