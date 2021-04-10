import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import FrontEnd from './Components/Pages/Front-end/FrontEnd';
function App() {
  return (
<<<<<<< HEAD
    <Router>
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
        <Route path="/Deposit">
          <DepositRequest />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
=======
    <>
      <Router>
        <Switch>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <Route path="/">
            <FrontEnd/>
          </Route>
        </Switch>
      </Router>
    </>
>>>>>>> 814daf66d2176c4d5de96bd6a7ad351294107ec3
  );
}

export default App;
