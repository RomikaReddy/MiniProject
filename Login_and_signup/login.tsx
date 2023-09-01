import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom"; 
import './login.css'; // Importing  custom styles
import { toast } from "react-toastify";

// Define a TypeScript interface for user login details
interface User{
  username:string;
  password:string;
}
  // Function to handle the login process
function Login() {
  const[username,setusername]=useState('');
  const[password,setpassword]=useState('');
  const navigate=useNavigate();

  const handlelogin=async(e:any)=>
  {
    const userlogindetails: User = {
      username,
      password,
    };
    e.preventDefault();
     // Validate username and password
    if (username=== undefined || username.length <1){
      toast.error("Name is required");
  }
  else if (password=== undefined || password.length <1){

    toast.error("password is required")
}
else{
    e.preventDefault();
     // Send a POST request to the login API endpoint
      try {
        const response = await axios.post("http://localhost:5000/api/login", {userlogindetails});
        // Login successful, navigate to the dashboard and pass user data
        if (response.status === 200) { 
          const user=await response.data;
         toast.success("Login Successful");
         navigate('/dashboard',{state:{user}});
          // Perform any navigation or state updates for a successful login
        } else if (response.status === 401) {
          toast.error("Invalid Credentials");
        } 
        else if(response.status===500){
          toast.error("Error checking user");
        }
        else {
          alert("Error logging in.");
        }
      } catch (error) {
        toast.error("Invalid Credentials");
      }
}
}
  return (
    <div className="login-page">
      <form className="form">
        <div>
        <label htmlFor="">UserName</label>
        </div>
        <div>
        <input type="text"  placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div>
        <label htmlFor="password">Enter your Password</label>
        </div>
        <div>
        <input type="password" id="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div>
        <button onClick={handlelogin}>Submit</button>
        </div>
        
        {/* Use the Link component for navigation */}
       <div>
       Don't have an account? <Link to="/signup" className="login-link">Signup</Link>
       </div>
      </form>
    </div>
  );
}
export default Login;
