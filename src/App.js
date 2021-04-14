import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import FrontEnd from './Components/Pages/Front-end/FrontEnd';
export const Context = createContext();
function App() {
  const [loginUser, setLoginUser] = useState([])
  return (
    <Context.Provider value={[loginUser, setLoginUser]}>
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
    </Context.Provider>
  );
}

export default App;
