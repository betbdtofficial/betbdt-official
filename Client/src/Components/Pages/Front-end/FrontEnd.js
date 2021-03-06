import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyStatement from "../../MyStatement/MyStatement";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../MyProfile/Index";
import SignUp from "../SignUp/SignUp";
const FrontEnd = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/userLogin">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/myStatement">
            <MyStatement />
          </Route>
          <Route path="/myprofile">
            <Profile />
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
