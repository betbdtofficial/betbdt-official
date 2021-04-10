import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { BiDollarCircle } from 'react-icons/bi';
import { Link, NavLink } from "react-router-dom";
import logo from "../../image/Untitled-1.png";
import "./Header.css";
const Header = () => {
  const activeMenu = {
    borderBottom: '2px solid #ffdf1b'
  }
  return (
    <Navbar className="navbar-bg" expand="lg">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" className="img-fluid" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact activeStyle={activeMenu} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/myprofile">My Profile</Nav.Link>
            <Nav.Link as={NavLink} activeStyle={activeMenu} to="/WithdrawRequest">withdrawRequest</Nav.Link>
            <Nav.Link title="My Profile">Balance  (695) <BiDollarCircle/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
