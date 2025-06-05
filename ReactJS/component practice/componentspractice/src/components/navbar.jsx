import React from "react"
import './navbar.css'
import logo from '../assets/images/Logo (1).png'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} height={35} alt="" />
      <ul >
        <li>Home</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
      <button className="btn">Sign up</button>
    </div>
  )
}

export default Navbar