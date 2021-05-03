import React from "react";
import { FaUserFriends } from 'react-icons/fa';
import { SiDolby, SiGoogletagmanager, SiSymantec } from 'react-icons/si';
import "./ClubHolder.css";
const ClubHolder = () => {
  return (
    <div>
      <div className="container text-center mt-5 mb-5">
        <h1>Club Panel</h1> <hr /> <br />
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
    </div>
  );
};

export default ClubHolder;
