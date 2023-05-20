import React, { useEffect } from 'react'
import '../css/Navbar.css'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
function Navlnks() {
 
      useEffect(()=>{
        const nav = document.getElementById('navDesign');
        console.log(nav)
            window.addEventListener('scroll', function (e) {
              if (window.pageYOffset > 100) {
                nav.classList.add('bg-dark', 'shadow');
              } else {
                nav.classList.remove('bg-dark', 'shadow');
              }
            });
      })
  return (
    <>
<nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" id='navDesign'>
      <div className=" container">
      <img src={logo} style={{width: "10%", height:"15%"}}></img>
        {/* <p className="navbar-brand" style={{fontFamily:"georgia"}}>Notify</p> */}
        {/* <a className="navbar-brand" href="#">Notify</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
           
              <NavLink className="nav-link text-white" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">

              <NavLink className="nav-link text-white" to='/about'>About</NavLink>
            </li>
            <li className="nav-item">

              <NavLink className="nav-link text-white" to='/contact'>Contact us</NavLink>
       
            </li>
            {/* <li className="nav-item">
               <NavLink className="nav-link text-white" to='/service'>Our services</NavLink>

            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )

}

export default Navlnks
