import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import MyProfile from "./Components/UserProfile/MyProfile";
function App() {
  return <Router>
    <Header></Header>
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
      <Route path="/myprofile">
        <MyProfile />
      </Route>
    </Switch>
    <Footer></Footer>
  </Router>

}

export default App;
