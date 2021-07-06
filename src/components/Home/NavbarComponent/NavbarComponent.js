import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import DarkLogo from "../../../Images/dark-logo.png";
import { Context } from "../../../context/Context";

const NavbarComponent = () => {
  const { user }=useContext(Context)
  return (
    <div>
      <Navbar expand="lg" className="w-75">
        <Link className="navbar-brand p-5" to="/">
          {" "}
          <img src={DarkLogo} style={{ width: "120px" }}></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
            <Link
              to="/home"
              className="text-lg p-3 text-decoration-none text-black hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="p-3 text-lg text-black text-decoration-none hover:text-black"
            >
              Dashboard
            </Link>

            <Link
              to="/contact"
              className="p-3 text-lg text-black text-decoration-none hover:text-black"
            >
              Contact Us
            </Link>
            <Link to="/login" class="text-decoration-none text-black hover:text-black">
             {user.username}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
