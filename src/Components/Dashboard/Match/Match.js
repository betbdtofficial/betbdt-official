import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Draft from "./Draft";
import LiveMatch from "./LiveMatch";
import LiveModals from "./LiveModals";
import "./Match.css";
import UpcommingMatch from "./UpcomingMatch";
import UpcommingModals from "./UpcommingModals";

const UserList = () => {
  const [show, setShow] = useState(false);
  const [showLive, setShowLive] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseLive = () => setShowLive(false);
  const handleShowLive = () => setShowLive(true);
  const handleShowUpcome = () => setShow(true);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const hideModal = () => setModal(modal);
  return (
    <>
      {/* modal */}
      <UpcommingModals show={show} handleClose={handleClose} />
      <LiveModals show={showLive} handleClose={handleCloseLive} />
      {/* modal */}
      <div className="matchWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="heading d-flex align-items-center justify-content-between"
                id="twin-heading"
              >
                <span>Manage Match</span>
                <span>
                  {modal ? (
                    <Button
                      onClick={handleShowUpcome}
                      variant="contained"
                      color="primary"
                    >
                      <IoIosAdd className="viewIcon" /> Add Upcomming Match
                    </Button>
                  ) : (
                    <Button
                      onClick={handleShowLive}
                      variant="contained"
                      color="primary"
                    >
                      <IoIosAdd className="viewIcon" /> Add Live Match
                    </Button>
                  )}
                </span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="matchData">
                <Tabs>
                  <TabList>
                    <Tab>
                      <Button
                        className="button"
                        color="primary"
                        variant="contained"
                        onClick={modal ? showModal : hideModal}
                      >
                        Live Match
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="secondary"
                        variant="contained"
                        onClick={modal ? hideModal : showModal}
                      >
                        Upcomming Match
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="primary"
                        variant="contained"
                      >
                        Draft Box
                      </Button>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <LiveMatch />
                  </TabPanel>
                  <TabPanel>
                    <UpcommingMatch />
                  </TabPanel>
                  <TabPanel>
                    <Draft/>
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

export default UserList;
