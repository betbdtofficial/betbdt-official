import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ClubHolder from "./Components/ClubHolder/ClubHolder";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Dashboard/Login/Login";
import PrivateRoute from "./Components/Dashboard/Login/PrivateRoute";
import FrontEnd from "./Components/Pages/Front-end/FrontEnd";
export const Context = createContext();
function App() {
  const [loginUser, setLoginUser] = useState([]);
  return (
    <Context.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path="/admin">
            <Dashboard />
          </Route>
          <PrivateRoute path="/clubholderDeshboard">
            <ClubHolder />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <FrontEnd />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
