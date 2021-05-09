import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "../../Pages/SignUp/SignUp.css";
import Validation from "./Validation";

const SignUp = () => {
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, [dbData._id]);
  const [value, setValue] = useState({
    name: "",
    country: "",
    club: "",
    number: "",
    sponsor: "",
    username: "",
    password: "",
    password2: "",
    profit: "",
    balance: "",
    notMatch: "",
    success: "",
    wrong: "",
    numExist: "",
  });
  const num = dbData.find((num) => num.number === value.number); // Number already exist check
  const username = dbData.find(
    (username) => username.username === value.username
  ); // Username already exist check
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const copyValue = { ...value };
    copyValue[event.target.name] = event.target.value;
    setValue(copyValue);
    setErrors("");
  };
  // send data from regi form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value)
    setErrors(Validation(value, num?.number, username?.username, username));
    if (username?.username) {
      // Username hard validation
      return;
    }else if(value.club === username?.club){
      return;
    }
     else if (value.password !== value.password2) {
      // Password hard validation
      return;
    }else if(value.sponsor === username?.sponsor){
      return;
    }
     else if (num?.number) {
      // Number hard validation
      return;
    } else if (
      value.name &&
      value.country &&
      value.username &&
      value.number &&
      value.club &&
      value.sponsor &&
      value.password &&
      value.password2 &&
      value.profit
    ) {
      const values = { ...value };
      values.balance = "00.00";
      fetch(`http://localhost:5000/user/createClubHolder`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then(() => {
          fetch(`http://localhost:5000/user/getClubHolder`)
            .then((res) => res.json())
            .then((data) => setDbData(data));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div className="mainSignup">
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="signUpF mt-5">
              {errors.success && (
                <p className="text-success text-center" role="alert">
                  {errors.success}
                </p>
              )}
              <form onSubmit={handleSubmit}>
                <h1>ADD CLUB HOLDER</h1>
                <br />
                <Row>
                  <Col>
                    <label htmlFor="name">
                      Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      input
                      type="text"
                      name="name"
                      autoComplete="off"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <p className="text-danger">{errors.name}</p>
                    )}
                  </Col>
                  <Col>
                    <label htmlFor="country">
                      Country <span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      name="country"
                      autoComplete="off"
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option selected value="Bangladesh(+880)">
                        Bangladesh(+880)
                      </option>
                      <option value="Afghanistan(+93)">Afghanistan(+93)</option>
                      <option value="India(+91)">India(+91)</option>
                      <option value="Pakistan(+92)">Pakistan(+92)</option>
                      <option value="Nepal(+977)">Nepal(+977)</option>
                    </select>
                    {errors.country && (
                      <p className="text-danger">{errors.country}</p>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="club">
                      Add Club Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="club"
                      autoComplete="off"
                      type="text"
                      onChange={handleChange}
                      placeholder="Add Club Name"
                    />
                    {errors.club && (
                      <p className="text-danger">{errors.club}</p>
                    )}
                  </Col>
                  <Col>
                    <label htmlFor="number">
                      Club Holder Mobile Number{" "}
                      <span style={{ color: "red" }}> *</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      name="number"
                      autoComplete="off"
                      type="number"
                      onChange={handleChange}
                      placeholder="Mobile Number"
                    />
                    {errors.number && (
                      <p className="text-danger">{errors.number}</p>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label htmlFor="sponsor">
                      Sponsor's Name <span style={{ color: "red" }}> *</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      name="sponsor"
                      autoComplete="off"
                      type="text"
                      onChange={handleChange}
                      placeholder="Sponsor's Name"
                    />
                    {errors.sponsor && (
                      <p className="text-danger">{errors.sponsor}</p>
                    )}
                  </Col>

                  <Col>
                    <label htmlFor="username">
                      Username <span style={{ color: "red" }}> *</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      name="username"
                      autoComplete="off"
                      type="text"
                      onChange={handleChange}
                      placeholder="Username"
                    />
                    {errors.username && (
                      <p className="text-danger">{errors.username}</p>
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <label htmlFor="password">
                      Password <span style={{ color: "red" }}> *</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      name="password"
                      autoComplete="off"
                      id="password"
                      onChange={handleChange}
                      type="password"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
                  </Col>
                  <Col>
                    <label htmlFor="password2">
                      Confirm password <span style={{ color: "red" }}> *</span>{" "}
                    </label>
                    <input
                      className="form-control"
                      name="password2"
                      autoComplete="off"
                      id="conpassword"
                      onChange={handleChange}
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {errors.password2 &&
                      (<p className="text-danger">{errors.password2}</p> || (
                        <p className="text-danger">{value.notMatch}</p>
                      ))}
                  </Col>
                </Row>
                <label htmlFor="username">
                  Club Holder Profit <span style={{ color: "red" }}> *</span>{" "}
                </label>
                <input
                  className="form-control"
                  name="profit"
                  autoComplete="off"
                  type="text"
                  onChange={handleChange}
                  placeholder="Profit Amount Only Amount Not Allow Text"
                />
                {errors.profit && <p className="text-danger">{errors.profit}</p> }
                <br />
                <Button className="form-control signupBtn" type="submit">
                  Add Club Holder Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
