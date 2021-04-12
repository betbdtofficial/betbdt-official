import { Button } from "@material-ui/core";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Avater from "../../image/avater.png";
import ChangePass from './ChangePass';
import DepositReq from './DepositReq';
import "./Index.css";
import MyProfile from "./MyProfile";
import WithdrawReq from './WithdrawReq';
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
        <div className="row">
          <div className="col-md-9 m-auto">
            <div className="myprofileMenu">
              <Tabs>
                <TabList>
                  <Tab>
                      <Button variant="contained">My Profile</Button>
                  </Tab>
                  <Tab>
                    <Button variant="contained">Withdraw Request</Button>
                  </Tab>
                  <Tab>
                    <Button variant="contained">Deposit Request</Button>
                  </Tab>
                  <Tab>
                    <Button variant="contained">Change Password</Button>
                  </Tab>
                </TabList>

                <TabPanel>
                  <MyProfile/>
                </TabPanel>
                <TabPanel>
                  <WithdrawReq/>
                </TabPanel>
                <TabPanel>
                  <DepositReq/>
                </TabPanel>
                <TabPanel>
                  <ChangePass/>
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
