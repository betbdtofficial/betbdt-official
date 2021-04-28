import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import ManageClubHolder from "../ManageClubHolder/ManageClubHolder";
import FrontEnd from '../Pages/Front-end/FrontEnd';
import AddClubHolder from "./AddClubHolder/AddClubHolder";
import "./Dashboard.css";
import Deposit from "./Deposit/Deposit";
import PrimarySearchAppBar from "./Header/Header";
import Home from "./Home/Home";
import Match from "./Match/Match";
import Setting from "./Setting/Setting";
import Sidebar from "./Sidebar/Sidebar";
import User from "./User/User";
import Winner from "./Winner/Winner";
import Withdraw from "./Withdraw/Withdraw";

const Dashboard = () => {
  return (
    <section>
      <Router>
        <div className="allWrapp">
          <div className="sidebarMenu">
            <Sidebar />
          </div>
          <div className="content">
            <PrimarySearchAppBar />
            <Switch>
              <Route exact path="/admin">
                <Home />
              </Route>
              <Route path="/admin/manageMatch">
                <Match />
              </Route>
              <Route path="/admin/manageWinner">
                <Winner />
              </Route>
              <Route path="/admin/manageUser">
                <User />
              </Route>
              <Route path="/admin/manageDeposit">
                <Deposit />
              </Route>
              <Route path="/admin/manageWithdraw">
                <Withdraw />
              </Route>
              
              <Route path="/admin/addClubholder">
                <AddClubHolder />
              </Route>
              <Route path="/admin/manageClubHolder">
                <ManageClubHolder />
              </Route>
              <Route path="/admin/setting">
                <Setting />
              </Route>
              <Redirect to="http://localhost:3000/">
                <FrontEnd />
              </Redirect>
            </Switch>
          </div>
        </div>
      </Router>
    </section>
  );
};

export default Dashboard;
