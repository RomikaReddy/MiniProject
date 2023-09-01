import React from "react";
import { useLocation } from "react-router-dom";
import "./dashboard.css"; // Import the custom styles

function Dashboard() {
  const location = useLocation();
  const data = location.state.user.user;

  return (
    <div className="dashboard-container">
      <img src="profile.png" alt="profile" style={{ maxWidth: 50 }} />
      <h1 className="dashboard-title">Profile</h1>
      <p className="dashboard-info employee-details">Name: {data.username}</p>
      <p className="dashboard-info employee-details">Employee ID: {data.employeeId}</p>
      <p className="dashboard-info email-phone">Email: {data.email}</p>
      <p className="dashboard-info email-phone">Phone Number: {data.phonenumber}</p>
    </div>
  );
}

export default Dashboard;
