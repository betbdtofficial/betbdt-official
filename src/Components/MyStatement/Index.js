import { Button, Tab } from 'bootstrap';
import React from 'react';
import { TabList, TabPanel, Tabs } from 'react-tabs';
import MyStatement from './MyStatement';

const Index = () => {
    return (
        <div>
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
                  <MyStatement />
                </TabPanel>

              </Tabs>
            </div>
        </div>
    );
};

export default Index;