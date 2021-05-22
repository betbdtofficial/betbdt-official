import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ClubHolder from "./Components/ClubHolder/ClubHolder";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminLogin from "./Components/Dashboard/Login/AdminLogin";
import Login from "./Components/Dashboard/Login/Login";
import PrivateRoute from "./Components/Dashboard/Login/PrivateRoute";
import PrivateRouteAdmin from './Components/Dashboard/Login/PrivateRouteAdmin';
import FrontEnd from "./Components/Pages/Front-end/FrontEnd";
export const Context = createContext();
function App() {
  const [loginUser, setLoginUser] = useState([]);
  if(window.console){
    console.clear()
  }
  return (
    <Context.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <PrivateRouteAdmin path="/admin">
            <Dashboard />
          </PrivateRouteAdmin>
          <PrivateRoute path="/clubAdmin">
            <ClubHolder />
          </PrivateRoute>
          <Route path="/adminlogin">
            <AdminLogin/>
          </Route>
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
