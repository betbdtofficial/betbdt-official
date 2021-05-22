import dotenv from "dotenv";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../image/Untitled-1.png";
import "./Header.css";
dotenv.config();
const Header = () => {
  const storage = sessionStorage.getItem("userInfo");
  const getUser = JSON.parse(storage);
  const activeMenu = {
    borderBottom: "2px solid #ffdf1b",
    color: "#ffdf1b !important",
  };

  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/me?u=${getUser?.username}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, []);
  const uUser = dbData.find((data) => data.username === getUser?.username);
  // console.log(dbData)
  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    window.location.href = "/";
  };
  return (
    <Navbar className="navbar-bg" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className="img-fluid" width="100px" />

        </Navbar.Brand>
        {!getUser?.username ? (
            <Link
              as={NavLink}
              activeStyle={activeMenu}
              className="mobilebtn"
              to="/signup"
            >
              Sign Up
            </Link>
          ) : (
            ""
          )}
          {getUser?.username ? (
            <Link className="mobilebtn"  as={NavLink} to="/" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <Nav.Link as={NavLink} className="mobilebtn" activeStyle={activeMenu} to="/userLogin">
              Login
            </Nav.Link>
          )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact activeStyle={activeMenu} to="/">
              Home
            </Nav.Link>
            {getUser?.username && (
              <Nav.Link
                as={NavLink}
                exact
                activeStyle={activeMenu}
                to="/myStatement"
              >
                My Statement
              </Nav.Link>
            )}
            {!getUser?.username ? (
              <Nav.Link
                as={NavLink}
                activeStyle={activeMenu}
                className=""
                to="/signup"
              >
                Sign Up
              </Nav.Link>
            ) : (
              ""
            )}
            {getUser?.username && (
              <Nav.Link as={NavLink} activeStyle={activeMenu} to="/myprofile">
                My Profile
              </Nav.Link>
            )}
            {getUser?.username && (
              <Nav.Link title="My Profile">
                Balance ({uUser?.balance}) BDT
              </Nav.Link>
            )}
            {getUser?.username && (
              <Nav.Link title="My Name">{getUser.username}</Nav.Link>
            )}
            {getUser?.username ? (
              <Nav.Link as={NavLink} to="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} activeStyle={activeMenu} to="/userLogin">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
