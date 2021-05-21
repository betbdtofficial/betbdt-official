import axios from "axios";
import dotenv from "dotenv";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { Context } from "../../../App";
import Validation from "./Validation";
dotenv.config();
const Login = () => {
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const [loginUser, setLoginUser] = useContext(Context);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, [dbData._id]);
  const [club, setClub] = useState([]);
  useEffect(() => {
    fetch(`https://betbdt.herokuapp.com/user/getClubHolder`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClub(data));
  }, [dbData._id]);
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const username = dbData.find(
    (username) => username.username === value.username
  ); // Username already exist check
  const clubHolder = club.find((data) => data.username === value.username); //club holder finding
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
    setErrors(Validation(value, username?.username, username?.password));
    if (
      value.username !== username?.username &&
      value.password !== username?.password
    ) {
      return;
    } else if (value.username !== username?.username) {
      return;
    } else if (value.password !== username?.password) {
      return;
    } else if (
      value.username === username?.username &&
      value.password === username?.password
    ) {
      // sessionStorage set login user
      const users = value.username
      axios
      .post(
        `https://betbdt.herokuapp.com/user/login`,{ users })
        .then((res) => {
          const userInfo = res.data
          sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
          setLoginUser(userInfo);
          // setDbData(res.data)
        });
      history.replace(from);
      return;
    } else if (
      value.username === clubHolder?.username &&
      value.password === clubHolder?.password
    ) {
      history.replace(from);
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
                  Log In {getUser?.user && <Redirect to="/" />}
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
