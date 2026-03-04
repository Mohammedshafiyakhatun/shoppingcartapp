import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Home } from "./Components/Home";
import { Dashboard } from "./Components/Dashboard";
import { Cart } from "./Components/Cart";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes >
          
        <Route  path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      
      </Routes>
      
</div>
    </BrowserRouter>
  );
}

export default App;
  

