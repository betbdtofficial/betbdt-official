import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context } from "../../../App";
import ClubHolder from "../../ClubHolder/ClubHolder";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../MyProfile/Index";
import SignUp from "../SignUp/SignUp";
const FrontEnd = () => {
  const storage = sessionStorage.getItem("user");
  const getUser = JSON.parse(storage);
  const [loginUser, setLoginUser] = useContext(Context);
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
          <Route path="/clubholderDeshboard">
            <ClubHolder />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/myprofile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
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
