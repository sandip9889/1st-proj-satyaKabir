import React from 'react'
// import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Features
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/">Todo List</a></li>
              <li><a class="dropdown-item" href="/">Calender</a></li>
              <li><a class="dropdown-item" href="/">Remainder</a></li>
              <li><a class="dropdown-item" href="/">Planning</a></li>

            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/">History</a></li>
              <li><a class="dropdown-item" href="/">Our Team</a></li>
              <li><a class="dropdown-item" href="/">Blog</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Careers</a>
          </li>
         
          <li class="nav-item">
            <a class="nav-link disabled" href="About.js">About</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          {/* <a class="nav-link disabled" href="./component/Login.js">Login</a>
           */}
          <button type="button" class="btn btn-outline-secondary" href="/Login.js"><b>Login </b></button>
          {/* <a class="nav-link disabled" href="./component/Register.js">Register</a> */}
          <button type="button" class="btn btn-outline-secondary" href ="/Register.js"><b>Register</b></button>
        </form>
      </div>
    </div>
  </nav>
  )
}