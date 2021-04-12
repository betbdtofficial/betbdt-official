// import { Button } from "@material-ui/core";
import React from "react";
import { Button } from "react-bootstrap";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Avater from "../../image/avater.png";
import ChangePass from "./ChangePass";
import DepositReq from "./DepositReq";
import "./Index.css";
import MyProfile from "./MyProfile";
import WithdrawReq from "./WithdrawReq";
const Profile = () => {
  return (
    <div className="mainSignup">
      <div className="container ">
        <div className="row">
          <div className="col-md-2 m-auto">
            <br />
            <div className="profilePic">
              <img src={Avater} width="150px" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="myprofileMenu">
              <Tabs>
                <TabList>
                  <Tab>
                    <Button id="mypBtn">My Profile</Button>
                  </Tab>
                  <Tab>
                    <Button id="mypBtn">Withdraw Request</Button>
                  </Tab>
                  <Tab>
                    <Button id="mypBtn">Deposit Request</Button>
                  </Tab>
                  <Tab>
                    <Button id="mypBtn">Change Password</Button>
                  </Tab>
                </TabList>
                <br />

                <TabPanel>
                  <MyProfile />
                </TabPanel>
                <TabPanel>
                  <WithdrawReq />
                </TabPanel>
                <TabPanel>
                  <DepositReq />
                </TabPanel>
                <TabPanel>
                  <ChangePass />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
