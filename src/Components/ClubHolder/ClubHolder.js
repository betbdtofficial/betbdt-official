import { Button } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { SiDolby, SiGoogletagmanager, SiSymantec } from "react-icons/si";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./ClubHolder.css";
import Member from "./Member";
import Withdraw from "./Withdraw";
import WithdrawHistory from "./WithdrawHistory";
const ClubHolder = () => {
  const storage = sessionStorage.getItem("club");
  const club = JSON.parse(storage);
  const [clubHolder, setClubHolder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getClubHolder`)
      .then((res) => res.json())
      .then((data) => setClubHolder(data));
  }, [clubHolder._id]);
  const [dbData, setDbData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user`)
      .then((res) => res.json())
      .then((data) => setDbData(data));
  }, [dbData._id]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getWithdrawHistory`)
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);
  const uHolder = clubHolder.find(u=>u.username === club?.club)// specific club holder
  const findUser = dbData.filter((u) => u.club === uHolder?.club);// specific club holder member
  const findBalance = history.filter(bal => bal.club === uHolder?.club);// club holder balance find
  let balance = 0;
  for (let b = 0; b < findBalance.length; b++) {
    const element = findBalance[b];
    balance = parseInt(balance) + parseInt(element.amount);
  }
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
                Balance <br /> <b className="balanceText">{uHolder?.balance} TK</b>{" "}
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
                <b className="ClubNames">{uHolder?.club}</b>{" "}
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
                <b className="TotalClubMembersCount">{findUser.length}</b>{" "}
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
      </div>
      <hr />
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
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHolder;
