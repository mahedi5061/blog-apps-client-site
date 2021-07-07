import React from "react";
import Sidebar from "../Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <>
      <div className="row  w-75">
        <div className="col-md-6">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-6">
          <h2
            className="text-center mt-5"
            style={{ color: "green", fontSize: "25px", fontWeight: "bold" }}
          >
            Welcome to our Dashboard
          </h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
