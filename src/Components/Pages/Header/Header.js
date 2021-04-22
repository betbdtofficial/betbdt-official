import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BiDollarCircle } from "react-icons/bi";
import { Link, NavLink, Redirect } from "react-router-dom";
import logo from "../../image/Untitled-1.png";
import "./Header.css";

const Header = () => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const activeMenu = {
    borderBottom: "2px solid #ffdf1b",
    color: "#ffdf1b !important",
  };
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    window.location.href="/login"
  };
  return (
    <Navbar className="navbar-bg" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className="img-fluid" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact activeStyle={activeMenu} to="/">
              Home
            </Nav.Link>
            {getUser?.user  === undefined && (
              <Nav.Link as={NavLink} activeStyle={activeMenu} to="/signup">
                Sign Up
              </Nav.Link>
            )}

            {getUser?.user  && (
              <Nav.Link as={NavLink} activeStyle={activeMenu} to="/myprofile">
                My Profile
              </Nav.Link>
            )}
            {getUser?.user && (
              <Nav.Link title="My Profile">
                Balance (695) <BiDollarCircle />
              </Nav.Link>
            )}
            {getUser?.user && (
              <Nav.Link title="My Name">{getUser.user}</Nav.Link>
            )}
            {getUser?.user ? (
              <Nav.Link as={NavLink} to="/" onClick={handleLogout}>
                Logout <Redirect to="/login" />
              </Nav.Link>
            ) : (
              <Nav.Link as={NavLink} activeStyle={activeMenu} to="/login">
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
