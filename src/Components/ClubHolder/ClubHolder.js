import React from "react";
import { Button } from "react-bootstrap";
import { FaRegEye, FaUserFriends } from "react-icons/fa";
import { SiDolby, SiGoogletagmanager, SiSymantec } from "react-icons/si";
import "./ClubHolder.css";
const ClubHolder = () => {
  return (
    <div>
      <div className="container text-center mt-5 mb-5">
        <h1 className="clubpanal">Club Panel</h1> <hr /> <br />
        <div className="row">
          <div className="col-md-3">
            <div className="ClubHolderBlance">
              <div className="clubholdertopicon">
                <SiDolby></SiDolby>
              </div>
              <strong>
                Balance <br /> <b className="balanceText">580 TK</b>{" "}
              </strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ClubName">
              <div className="clubholdertopicon">
                <SiGoogletagmanager></SiGoogletagmanager>
              </div>
              <strong>
                Club Name <br />
                <b className="ClubNames">Vorer Dak Club</b>{" "}
              </strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="TotalClubMembers">
              <div className="clubholdertopicon">
                <FaUserFriends></FaUserFriends>
              </div>
              <strong>
                Total Club Member <br />
                <b className="TotalClubMembersCount">350</b>{" "}
              </strong>
            </div>
          </div>
          <div className="col-md-3">
            <div className="TotalWithdraws">
              <div className="clubholdertopicon">
                <SiSymantec></SiSymantec>
              </div>
              <strong>
                Total Withdraws <br />
                <b className="TotalWithdrawsBl">250</b>{" "}
              </strong>
            </div>
          </div>
        </div>
        <br />
      </div>

      <hr />
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="memberList">
              <h1>Member List & Deteails</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="memberList">
              <h1>Withdraws History</h1>
            </div>
          </div>
        </div>
        <hr />

        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <div className="winnerHeading d-flex align-items-center justify-content-between">
            <span className="head">Banned User</span>
            <span>
              <input
                type="text"
                className="form-control"
                name="search"
                autoComplete="off"
                placeholder="Search Banned User..."
                required
              />
            </span>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Mobile</th>
              <th>Balance</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>MD Hasan Mia</td>
              <td>juihasan@gmail.com</td>
              <td>jui_hasan</td>
              <td>01711122233</td>
              <td>4890 BDT</td>
              <td>
                <span>
                  <Button color="secondary" variant="contained">
                    <span>
                      <FaRegEye className="viewIcon" />
                    </span>{" "}
                    View
                  </Button>
                </span>
              </td>
            </tr>
          </table>
                </div>
            </div>
        </div>
         
        </>
      </div>
    </div>
  );
};

export default ClubHolder;
