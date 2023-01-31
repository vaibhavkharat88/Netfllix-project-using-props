import React from "react";
import PropTypes from 'prop-types'
// adding props in function
function Navbar(Props){
 return(
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
{/* adding props */}
    <a class="navbar-brand" href="#">{Props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
 {/* adding props */}
          <a class="nav-link" href="#">{Props.About}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">SERVICES</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
 )  
}

export default Navbar

// creating default props  used when no value set for title and freatures

Navbar.defaultProps={
  title:'Vaibhav',
  About:'About Us'
}
 