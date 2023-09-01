import React from "react";
import Dashboard from "./dashboard";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './login'; 
import Signup from "./Signup";

// Set up a React Router for navigation
function Home() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />{/* Route for the Login component */}
            <Route path="/Signup" element={<Signup />} />{/* Route for the Signup component */}
            <Route path="/dashboard" element={<Dashboard />}/>{/* Route for the Dashboard component */}
        </Routes>
    </Router>
  );
}
export default Home;