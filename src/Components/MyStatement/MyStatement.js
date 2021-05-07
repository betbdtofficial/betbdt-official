import { Button } from "@material-ui/core";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Bet from "./Bet";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";


const MyStatement = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <TabList>
                <Tab>
                  <Button color="primary" style={{marginRight: "10px"}} variant="contained">Bets</Button>
                </Tab>
                <Tab>
                  <Button color="primary" style={{marginRight: "10px"}} variant="contained">Withdraws</Button>
                </Tab>
                <Tab>
                  <Button color="primary" style={{marginRight: "10px"}} variant="contained">Deposits</Button>
                </Tab>
              </TabList>
              <TabPanel>
                <Bet/>
              </TabPanel>
              <TabPanel>
                <Withdraw/>
              </TabPanel>
              <TabPanel>
                <Deposit/>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStatement;
