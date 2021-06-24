import { createContext } from "react";
import React from 'react';
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
export const userBlogs=createContext();
function App() {
  const [blogs,setBlogs] =React.useState([]);
  React.useEffect(() =>{
    fetch('http://localhost:6055/blogs')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  
  return (
    <userBlogs.Provider value={[blogs,setBlogs]}>
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
    </userBlogs.Provider>
  );
}

export default App;
