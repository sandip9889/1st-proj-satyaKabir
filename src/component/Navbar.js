import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Todo List</a></li>
              <li><a className="dropdown-item" href="/">Calender</a></li>
              <li><a className="dropdown-item" href="/">Remainder</a></li>
              <li><a className="dropdown-item" href="/">Planning</a></li>

            </ul>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">History</a></li>
              <li><a className="dropdown-item" href="/">Our Team</a></li>
              <li><a className="dropdown-item" href="/">Blog</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Careers</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link disabled" href="About.js">About</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          {/* <a className="nav-link disabled" href="./component/Login.js">Login</a>
           */}
         <Link to='/login'><button type="button" className="btn btn-outline-secondary"><b>Login </b></button></Link> 
          {/* <a className="nav-link disabled" href="./component/Register.js">Register</a> */}
          <Link to = '/register'><button type="button" className="btn btn-outline-secondary"><b>Register</b></button></Link>
        </form>
      </div>
    </div>
  </nav>
  )
}