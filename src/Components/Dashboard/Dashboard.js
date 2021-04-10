import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
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
          <h2>Admin Panel</h2>
            <Switch>
              <Route path="/admin/userList">
                <UserList />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </section>
  );
};

export default Dashboard;
