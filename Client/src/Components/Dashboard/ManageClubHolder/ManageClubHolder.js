import { Button } from "@material-ui/core";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BannedClub from "./BannedClub";
import ClubIndex from "./ClubIndex";
const ManageClubHolder = () => {
  return (
    <>
      <div className="userWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Manage Club Holder</h2>
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
                        Active Club
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="secondary"
                        variant="contained"
                      >
                        Banned Club
                      </Button>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <ClubIndex/>
                  </TabPanel>
                  <TabPanel>
                    <BannedClub/>
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

export default ManageClubHolder;
