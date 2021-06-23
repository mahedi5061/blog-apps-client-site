import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AddBlogs from "./components/Dashboard/Dashboard/AddBlogs/AddBlogs";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/dashboard">
        <Dashboard></Dashboard>
        </Route>
        <Route path="/addblogs">
          <AddBlogs></AddBlogs>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
