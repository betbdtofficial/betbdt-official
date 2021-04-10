import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Dashboard.css";
import PrimarySearchAppBar from './Header/Header';
import Home from "./Home/Home";
import Sidebar from "./Sidebar/Sidebar";
import SponsorList from './SponsorList/SponsorList';
import UserList from "./UserList/UserList";

const Dashboard = () => {

  return (
    <section>
      <Router>
        <div className="allWrapp">
          <div className="sidebarMenu">
            <Sidebar />
          </div>
          <div className="content">
          <PrimarySearchAppBar/>
            <Switch>
              <Route exact path="/admin">
                <Home/>
              </Route>
              <Route path="/admin/userList">
                <UserList />
              </Route>
              <Route path="/admin/sponsorList">
                <SponsorList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </section>
  );
};

export default Dashboard;
