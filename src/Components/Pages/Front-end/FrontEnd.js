import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "../Error/Error";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from "../Home/Home";
import Login from "../Login/Login";
import MyProfile from "../MyProfile/MyProfile";
import SignUp from "../SignUp/SignUp";
import WithdrawRequest from "../WithdrawRequest/WithdrawRequest";
const FrontEnd = () => {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/WithdrawRequest">
            <WithdrawRequest />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default FrontEnd;
