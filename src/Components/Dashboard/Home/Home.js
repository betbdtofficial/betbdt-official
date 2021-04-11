import CreditCardIcon from '@material-ui/icons/CreditCard';
import GamesIcon from '@material-ui/icons/Games';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Chart } from './Chart/Chart';
import "./Home.css";
const Home = () => {
  return (
    <div className="homeWrapped">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="heading">Dashboard</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box bg-warning">
              <h4>150</h4>
              <h5>User Registration</h5>
              <div className="userIcon">
                <PersonAddIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-primary">
              <h4>45</h4>
              <h5>Total Sponsor</h5>
              <div className="userIcon">
                <GamesIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-success">
              <h4>15</h4>
              <h5>Club Holder</h5>
              <div className="userIcon">
                <GroupWorkIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="box bg-danger">
              <h4>$1550</h4>
              <h5>Total Withdraw</h5>
              <div className="userIcon">
                <MonetizationOnIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-info">
              <h4>$986</h4>
              <h5>Total Deposit</h5>
              <div className="userIcon">
                <CreditCardIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-dark">
              <h4>$560</h4>
              <h5>Admin Profite</h5>
              <div className="userIcon">
                <LocalAtmIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="heading">Website Statistics</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="chart">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
