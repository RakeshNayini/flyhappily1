
import React from "react";
import "../css/Navbar.css";
import flightLogo from "../assets/flight.png";
import userlogo from "../assets/user.png";
 // Replace with your logo path

export default function Navbar() {
  const flight =() => {
    window.scrollTo({top:670,behavior:"smooth"});
  };
  return (
    
    <nav className="navbar">
      {/* Left Logo & Name */}
      <div className="navbar-left">
        <img src={flightLogo} alt="Logo" className="logo" />
        <span className="brand-name">FlyHappily</span>
      </div>

      {/* Center Menu */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li onClick={flight}>Flights</li>
        <li>My Bookings</li>
        <li>Support</li>
      </ul>

      {/* Right Buttons */}
      <div className="navbar-right">
        <span className="signin">
          <span className="user-icon"><img src={userlogo} alt="logo" /></span> Sign In
        </span>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}
