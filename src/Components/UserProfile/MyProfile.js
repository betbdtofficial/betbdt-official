import { Nav, Navbar } from "react-bootstrap";
import { FaDollarSign, FaRegUserCircle } from "react-icons/fa";
import { GoDiffAdded } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./MyProfile.css";
const MyProfile = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-10 m-auto">
            <Navbar bg="dark" expand="lg" className="mt-5 mb-5">
      <Nav className="m-auto">
        <Nav.Link as={Link} to="/myprofile">
          <FaRegUserCircle /> My Profile
        </Nav.Link>
        <Nav.Link as={Link} to="/Deposit">
          {" "}
          <GoDiffAdded /> Deposit Request
        </Nav.Link>
        <Nav.Link as={Link} to="/Withdraw">
          {" "}
          <FaDollarSign /> Withdraw Request
        </Nav.Link>
        <Nav.Link as={Link} to="/Withdraw">
          {" "}
          <RiLockPasswordLine /> Change Password
        </Nav.Link>
      </Nav>
    </Navbar>
            </div>
        </div>
    </div>
  );
};

export default MyProfile;
