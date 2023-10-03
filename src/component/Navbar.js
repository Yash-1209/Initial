import React from 'react'

// import {
//   BrowserRouter as Router,
//   a
// } from "react-router-dom";





export default function Navbar(props) {
  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode} `} >
  <div className="container-fluid" >
    <a className="navbar-brand "  href="/" style={{color:props.kala}}>{props.title}</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <Router> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent" color={props.colour} >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color:props.kala}}>
        <li className="nav-item" style={{color:props.kala}}>
          <a className="nav-a active" aria-current="page" href="#" style={{color:props.kala}} >Home</a>
        </li>
        <li className="nav-item" style={{color:props.kala}}>
          {/* <a className="nav-a" href="/" style={{color:props.kala}}>About</a> */}
        </li>
       
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
  <input className="form-check-input " onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.kala}}>{props.rang}</label>
</div>

      
    </div>
    {/* </Router> */}
  </div>
</nav>
  )
}
Navbar.defaultProps={
  title:'set title here'
}
