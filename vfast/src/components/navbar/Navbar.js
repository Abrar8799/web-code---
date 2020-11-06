import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Nav.css'


 const Navbar=()=>  {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="#" data-category=""><img  src="./images/VFast-white.png" alt="logo-img"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link  className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link >
            </li>
            <li className="nav-item ">
              <Link  className="nav-link teyxt-light" to="#">Products</Link >
            </li>
            <li className="nav-item ">
              <Link  className="nav-link" to="#">Services</Link >
            </li>
            <li className="nav-item ">
              <Link  className="nav-link" to="#">Contacts</Link >
            </li>
            <li className="nav-item dropdown">
              <Link  className="nav-link dropdown-toggle"
               to="#" id="navbarDropdownMenuLink"
                role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false"> 
            Account 
               </Link >
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link  className="dropdown-item" to="#">Action</Link >
                <Link  className="dropdown-item" to="#">Another action</Link >
                <Link className="dropdown-item" to="#">Something else here</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Navbar
