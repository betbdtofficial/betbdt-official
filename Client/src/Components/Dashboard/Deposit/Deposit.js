import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import DepoHistory from "./DepoHistory";
import DepositMethod from "./DepoMethod";
import "./Deposit.css";
import DepositReq from "./DepositeReq";
import Modals from "./Modals";

const Deposit = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const hideModal = () => setModal(modal);
  return (
    <>
      {/* modal */}
      <Modals show={show} handleClose={handleClose} />
      {/* modal */}
      <div className="userWrapped">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2
                className="heading d-flex align-items-center justify-content-between"
                id="twin-heading"
              >
                <span>Manage Deposit</span>
                {modal ? (
                  <span>
                    {" "}
                    <Button
                      onClick={handleShow}
                      variant="contained"
                      color="primary"
                    >
                      {" "}
                      <IoIosAdd className="viewIcon" /> Add Method
                    </Button>{" "}
                  </span>
                ) : (
                  ""
                )}
              </h2>
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
                        onClick={!modal ? hideModal : showModal}
                      >
                        Deposit Request
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="secondary"
                        variant="contained"
                        onClick={!modal ? hideModal : showModal}
                      >
                        Deposit History
                      </Button>
                    </Tab>
                    <Tab>
                      <Button
                        className="button"
                        color="primary"
                        variant="contained"
                        onClick={modal ? hideModal : showModal}
                      >
                        Deposit Method
                      </Button>
                    </Tab>
                  </TabList>
                  <TabPanel>
                    <DepositReq/>
                    {/* <DepositReq/> */}
                  </TabPanel>
                  <TabPanel>
                    <DepoHistory/>
                    {/* <DepoHistory/> */}
                  </TabPanel>
                  <TabPanel>
                    <DepositMethod/>
                    {/* <WithdrawMethod /> */}
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

export default Deposit;
