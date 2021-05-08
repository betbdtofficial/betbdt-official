import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ClubHolder from "./Components/ClubHolder/ClubHolder";
import Dashboard from "./Components/Dashboard/Dashboard";
import FrontEnd from "./Components/Pages/Front-end/FrontEnd";
import PrivateRoute from "./Components/Pages/PrivateRoute/PrivateRoute";
export const Context = createContext();
function App() {
  const [loginUser, setLoginUser] = useState([]);
  return (
    <Context.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/clubholderDeshboard">
            <ClubHolder />
          </PrivateRoute>
          <Route path="/">
            <FrontEnd />
          </Route>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
