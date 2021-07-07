import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
   
  faPlus,
  faSignOutAlt,
  
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      className="sidebarDesign  justify-content-between  col-md-4 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link
            to="/home"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="/addblogs"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faPlus} /> <span>Add Blog</span>
          </Link>
        </li>
 
        <li>
          <Link
            to="/login"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Login</span>
          </Link>
        </li>

        
      </ul>
    </div>
  );
};

export default Sidebar;
