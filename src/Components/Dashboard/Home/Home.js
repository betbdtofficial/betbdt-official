import GamesIcon from '@material-ui/icons/Games';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeWrapped">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Dashboard</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box bg-warning">
              <h4>150</h4>
              <h5>User Registration</h5>
              <div className="userIcon">
                <PersonAddIcon/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-success">
              <h4>45</h4>
              <h5>Total Sponsor</h5>
              <div className="userIcon">
                  <GamesIcon/>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-primary">
              <h4>15</h4>
              <h5>Club Holder</h5>
              <div className="userIcon">
                  <GroupWorkIcon/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
