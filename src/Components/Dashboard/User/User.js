import { Button } from "@material-ui/core";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BannedUser from "./BannedUser";
import Index from "./Index";
import "./User.css";

const User = () => {
  return (
    <>
      <div className="userWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Manage User</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="winnerData">
                <Tabs>
                  <TabList>
                    <Tab>
                      <Button
                        className="button"
                        color="primary"
                        variant="contained"
                      >
                        Active User
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="secondary"
                        variant="contained"
                      >
                        Banned User
                      </Button>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <Index />
                  </TabPanel>
                  <TabPanel>
                    <BannedUser />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
