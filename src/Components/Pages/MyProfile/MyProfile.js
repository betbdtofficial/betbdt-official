import React from "react";
import { Table } from "react-bootstrap";
import Avater from "../../image/avater.png";
const MyProfile = () => {
  return (
    <div className="mainSignup">
      <div className="container ">
        <div className="row">
          <div className="col-md-2 m-auto">
            <br />
            <div className="profilePic">
              <img src={Avater} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-7 m-auto">
            <Table striped bordered hover size="sm">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>Hasan</td>
                </tr>
                <tr>
                  <td>Username</td>
                  <td>Hasanmiaweb</td>
                </tr>
                <tr>
                  <td>Mobile Number</td>
                  <td>01740398196</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>hasanmiaweb@gmail.com</td>
                </tr>
                <tr>
                  <td>Referred By</td>
                  <td>parvez</td>
                </tr>
                <tr>
                  <td>Club</td>
                  <td>❤️PADMA CITY CLUB❤️</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default MyProfile;
