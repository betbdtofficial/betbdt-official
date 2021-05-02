import CreditCardIcon from '@material-ui/icons/CreditCard';
import GamesIcon from '@material-ui/icons/Games';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Chart } from './Chart/Chart';
import "./Home.css";
const Home = () => {
  const [user, getUser] = useState([]);
  useEffect(()=>{ //get Withdraw Info
    fetch(`http://localhost:5000/user`)
      .then(res=>res.json())
      .then(data=>getUser(data))
  },[])
  const [withdrawHistory, setWithdrawHistory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getWithdrawHistory`)
      .then((res) => res.json())
      .then((data) => setWithdrawHistory(data));
  }, []);
  let amount=0;
  for (let w = 0; w < withdrawHistory.length; w++) {
    const element = withdrawHistory[w];
    amount = amount + element.amount;
  }
  const [withdraw, setWithdraw] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/withdrawGet`)
      .then((res) => res.json())
      .then((data) => setWithdraw(data));
  }, []);
  let pendingAmount=0;
  for (let w = 0; w < withdraw.length; w++) {
    const element = withdraw[w];
    pendingAmount = parseInt(pendingAmount) + parseInt(element.amount);
  }
  const [depoHis, setDepoHis] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDepositHistory`)
      .then((res) => res.json())
      .then((data) => setDepoHis(data));
  }, []);
  let depoAmount=0;
  for (let w = 0; w < depoHis.length; w++) {
    const element = depoHis[w];
    depoAmount = parseInt(depoAmount) + parseInt(element.amount);
  }
  const [depo, setDepo] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/getDeposit`)
      .then((res) => res.json())
      .then((data) => setDepo(data));
  }, []);
  let depoPending=0;
  for (let w = 0; w < depo.length; w++) {
    const element = depo[w];
    depoPending = parseInt(depoPending) + parseInt(element.amount);
  }
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
              <h4>{user.length}</h4>
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
              <h4>${amount}</h4>
              <h5>Total Withdraw</h5>
              <div className="userIcon">
                <MonetizationOnIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-dark">
              <h4>${pendingAmount}</h4>
              <h5>Pending Withdraw</h5>
              <div className="userIcon">
              <LocalAtmIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-danger">
              <h4>${depoAmount}</h4>
              <h5>Total Deposit</h5>
              <div className="userIcon">
                <CreditCardIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="box bg-info">
              <h4>${depoPending}</h4>
              <h5>Pending Deposit</h5>
              <div className="userIcon">
                <CreditCardIcon />
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
