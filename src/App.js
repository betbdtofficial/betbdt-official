import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import FrontEnd from './Components/Pages/Front-end/FrontEnd';
function App() {
  return (
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
  );
}

export default App;
