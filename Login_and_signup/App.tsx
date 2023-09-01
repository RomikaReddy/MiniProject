import React from 'react';


import './login.css';
// import Login from './login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import Home from './AppRouter';

function App() {
  return (
    <div>
      <ToastContainer/>
     <Home/> 
    </div>
    
  );
}

export default App;
