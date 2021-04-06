import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../image/Untitled-1.png";
import "./Header.css";
const Header = () => {
  return (
    <Navbar className="navbar-bg" expand="lg">
     <div className="container">
     <Navbar.Brand>
        <img src={logo} alt="" className="img-fluid" width="150px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Sign Up</Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </div>
    </Navbar>
  );
};

export default Header;
