import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import Validation from "./Validation";
dotenv.config();
const Login = () => {
  const [club, setClub] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, [club._id]);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const clubHolder = club.find(data=>data.username === value.username)//club holder finding
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const copyValue = { ...value };
    copyValue[e.target.name] = e.target.value;
    setValue(copyValue);
    setErrors("");
  };
  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(value, clubHolder?.username, clubHolder?.password));
    if (
      value.username !== clubHolder?.username &&
      value.password !== clubHolder?.password
    ) {
      return;
    } else if (value.username !== clubHolder?.username) {
      return;
    } else if (value.password !== clubHolder?.password) {
      return;
    } else if (
      value.username === clubHolder?.username &&
      value.password === clubHolder?.password
    ) {
      const club = { club: clubHolder?.username };
      sessionStorage.setItem("club", JSON.stringify(club));
      history.replace(from)
      return;
    }
  };
  return (
    <div className="mainSignup">
      {/* <Topnotice></Topnotice> */}
      <div className="container">
        <div className="row">
          <div className="col-md-7 m-auto">
            <div className="signUpF mt-5">
              <form onSubmit={handleSubmit}>
                {errors.success ? (
                  <p className="text-success text-center" role="alert">
                    {errors.success}
                  </p>
                ) : (
                  <p className="text-danger text-center" role="alert">
                    {errors.wrong}
                  </p>
                )}
                <h1>Login</h1> <br />
                <Row>
                  <Col>
                    <label htmlFor="email">
                      Username <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your username"
                    />
                    {errors.username && (
                      <p className="text-danger text-center" role="alert">
                        {errors.username}
                      </p>
                    )}
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label htmlFor="password">
                      Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your password"
                    />
                    {errors.password && (
                      <p className="text-danger text-center" role="alert">
                        {errors.password}
                      </p>
                    )}
                  </Col>
                </Row>
                <br />
                <Button className="form-control signupBtn" type="submit">
                  Log In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
