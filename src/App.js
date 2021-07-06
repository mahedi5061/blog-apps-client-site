import { createContext } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import SinglePosts from "./components/Home/SinglePosts/SinglePosts";
import axios from "axios";
import AddBlogs from "./components/Dashboard/Dashboard/AddBlogs/AddBlogs";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import BlogPages from "./components/Home/BlogPages/BlogPages";
import RemoveBlog from "./components/Dashboard/RemoveBlog/RemoveBlog";
 import Login from "./components/Dashboard/LoginFormPart/Login/Login.js";
 import Register from "./components/Dashboard/LoginFormPart/Register/Register.js"
export const userBlogs = createContext();
function App() {
  const [postBlogs, setPostBlogs] = React.useState([]);
  React.useEffect(() => {
    //normal fetch data load system...
    // fetch("/post")
    //  .then((res) =>res.json())
    //  .then((data) =>console.log(data))

    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPostBlogs(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <userBlogs.Provider value={[postBlogs, setPostBlogs]}>
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
          <Route path="/blogPage/:id">
            <BlogPages></BlogPages>
          </Route>
          <Route path="/removeblog">
            <RemoveBlog></RemoveBlog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Register></Register>
          </Route>
          <Route path="/posts/:postId">
          <SinglePosts />
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
