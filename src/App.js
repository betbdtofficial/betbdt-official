import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
function App() {
  return <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  </Router>

}

export default App;
