import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { SiDolby, SiGoogletagmanager, SiSymantec } from "react-icons/si";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ChangePass from "./ChangePass";
import "./ClubHolder.css";
import Member from "./Member";
import Withdraw from "./Withdraw";
import WithdrawHistory from "./WithdrawHistory";
const ClubHolder = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
    // get club holder
  const [specificClubHolder, setSpecificClubHolder] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/user/specificClubHolder?user=${club?.club}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setSpecificClubHolder(data));
  }, []);
  // hard check specific club holder
  const specificClub = specificClubHolder.find((u) => u.username === club?.club);
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/clubHolderMembers?user=${club?.club}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setClubs(data));
  }, [clubs._id]);
  const [withHis, setWithHis] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/specificWithHistory?user=${club?.club}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`
      },
    })
      .then((res) => res.json())
      .then((data) => setWithHis(data));
  }, []);
  let balance = 0;
  for (let b = 0; b < withHis.length; b++) {
    const element = withHis[b];
    balance = parseInt(balance) + parseInt(element.amount);
  }
  return (
    <div>
      <div className="container text-center mt-5 mb-5">
        <div className="club-details text-right d-flex align-items-center justify-content-between">
          <div>
            <h1 className="clubpanal d-5">Club Panel</h1>
          </div>
          <div>
            <h2>{specificClub?.name}</h2>
            <h4>Your Profit: {specificClub?.profit}%</h4>
          </div>
        </div>
        <hr /> <br />
        <div className="row">
          <div className="col-md-3">
            <div className="ClubHolderBlance">
              <div className="clubholdertopicon">
                <SiDolby></SiDolby>
              </div>
              <strong>
                Balance <br />{" "}
                <b className="balanceText">{specificClub?.balance} TK</b>{" "}
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
                <b className="ClubNames">{specificClub?.club}</b>{" "}
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
                <b className="TotalClubMembersCount">{clubs.length}</b>{" "}
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
                <b className="TotalWithdrawsBl">{balance}</b>{" "}
              </strong>
            </div>
          </div>
        </div>
        <br />
      <hr />
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <TabList>
                <Tab>
                  <Button
                    className="button"
                    color="primary"
                    variant="contained"
                  >
                    Member List & Deteails
                  </Button>
                </Tab>
                <Tab>
                  <Button
                    className="button"
                    color="secondary"
                    variant="contained"
                  >
                    Withdraws
                  </Button>
                </Tab>
                <Tab>
                  <Button
                    className="button"
                    color="primary"
                    variant="contained"
                  >
                    Withdraws History
                  </Button>
                </Tab>
                <Tab>
                  <Button
                    className="button"
                    color="secondary"
                    variant="contained"
                  >
                    change password
                  </Button>
                </Tab>
              </TabList>
              <TabPanel>
                <Member />
              </TabPanel>
              <TabPanel>
                <Withdraw />
              </TabPanel>
              <TabPanel>
                <WithdrawHistory />
              </TabPanel>
              <TabPanel>
                <ChangePass/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHolder;
