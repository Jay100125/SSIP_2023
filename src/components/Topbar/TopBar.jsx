import React from 'react'
import './topbar.css'

export default function Topbar() {
  const user = true
  const employer = false
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcons fa-brands fa-square-facebook"></i>
        <i className="topIcons fa-brands fa-square-instagram"></i>
        <i className="topIcons fa-brands fa-square-twitter"></i>
        <i className="topIcons fa-brands fa-square-snapchat"></i>
      </div>
      <div className="topCentre">
        <ul className="topList">
          <li className="topList-item">Home</li>
          <li className="topList-item">Find Jobs</li>
          <li className="topList-item">Pricing</li>
          <li className="topList-item">About Us</li>
          <li className="topList-item">FAQ</li>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          {user ? (
            <li className="topList-item">Login</li>
          ) : (
            <li className="topList-item">Register</li>
          )}

          {employer ? <li className="topList-item">Job post</li> : <li> </li>}
        </ul>
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}