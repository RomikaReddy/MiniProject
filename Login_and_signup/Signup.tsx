import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

interface User {
  employeeId:string;
  username: string;
  password: string;
  email: string;
  phonenumber:string;
}
// Define a TypeScript interface for user registration details
function Signup() {
  const [employeeId,setemployeeid]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const[phonenumber,setPhonenumber]=useState('');
  const navigate=useNavigate();

  const handleSignup = async() => {
    const userdetails: User = {
      employeeId,
      username,
      password,
      email,
      phonenumber,
    };

    // Validate user input fields
    if (username=== undefined || username.length <1){
      toast.error("Name is required");    
  }
  else if (password=== undefined || password.length <1){
    toast.error("password is required")
}
else if(email===undefined|| email.length<1)
{
  toast.error("email is required");
}
else if(employeeId==undefined||employeeId.length<1){
  toast.error("EmployeeId is required")
}
else if(phonenumber==undefined||phonenumber.length<1)
{
toast.error("PhoneNumber is Required")
}
else{
    try {
       // Send a POST request to the backend endpoint for registration
      const response=await axios.post("http://localhost:5000/api/signup", userdetails); 
      console.log(response.data);
      
      // Registration successful
      if(response.status === 201){
        toast.success("success");
      }
         // User already exists
       else if(response.status===200) {
        toast.error("User Already Exists");
      }
      
      navigate("/");
    } catch (error) {
      // console.error("Error during signup:", error);
      // toast.error("catch");
    }
  }
  };
  return (
    <div>
      
    <div className="login-page">

      <form className="form">
        <label htmlFor="employeeId">Enter Employee Id</label>
        <input
        type="text"
        id="employeeid"
        placeholder="employeeid"
        value={employeeId}
        onChange={(e)=>setemployeeid(e.target.value)} required/>
        <label htmlFor="username">Enter UserName</label>
        <input
          type="text"
          id="username"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        required/>
        <label htmlFor="email">Enter your Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        required/>
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        required/>
        <label htmlFor="phonenumber">Enter phoneNumber</label>
        <input 
        type="phonenumber"
        id="phonenumber"
        value={phonenumber}
        onChange={(e)=>setPhonenumber(e.target.value)}required/>
        <button type="button" onClick={handleSignup}>Signup</button>
        Already have an account? <Link to="/" className="login-link">Login</Link>
      </form>
    </div>
    </div>
  );
}

export default Signup;
