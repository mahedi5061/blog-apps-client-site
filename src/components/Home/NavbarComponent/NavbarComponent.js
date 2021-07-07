import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import DarkLogo from "../../../Images/dark-logo.png";
import { Context } from "../../../context/Context";

const NavbarComponent = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGGEDOUT" });
  };

  return (
    <div>
      <Navbar expand="lg"  style={{backgroundColor:"teal"}}>
        <Link className="navbar-brand p-5" to="/">
          {" "}
          <img src={DarkLogo} style={{ width: "120px" }}></img>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
            <Link
              to="/home"
              className="text-lg p-3 text-decoration-none fw-bold text-white hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="p-3 text-lg text-white fw-bold text-decoration-none hover:text-white"
            >
              Dashboard
            </Link>

            <Link
              to="/contact"
              className="p-3 text-lg text-white fw-bold text-decoration-none hover:text-white"
            >
              Contact Us
            </Link>

            {user?.email ? (
              <Link to="/">
                <button className="btn btn-primary" onClick={handleLogout}>
                  {user?.username}
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary  btn-container">Login</button>
              </Link>
            )}

            <Link to="/profile" class="p-4">
              {user && (
                <img
                  src={PF + user?.userprofile}
                  class="rounded-circle"
                  style={{ width: "40px" }}
                ></img>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
