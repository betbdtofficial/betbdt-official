import React from 'react';
import { Table } from 'react-bootstrap';

const MyProfile = () => {
    return (
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading text-center">My Profile</h2>
            <br/>
            <Table striped bordered hover>
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
    );
};

export default MyProfile;