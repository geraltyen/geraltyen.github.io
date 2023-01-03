import React from 'react'
import {NavLink,} from "react-router-dom"
import  "../css/navbar.css"
import { Button } from '@chakra-ui/react'
import rglogo from "../assets/rglogo.jpg"
import resume from "../assets/R_GIRI_REDDY_RESUME.pdf"
const Navbar = () => {

  return (
    <div className='navwrapper'>
    <div className="n-left">
    <img src={rglogo} alt="" style={{width:"70px",borderRadius:"50%"}}/>
      <div className="n-name">
        R Giri Reddy
      </div>
      <span>Toggle</span>
    </div>
    <div className="n-right">
    <div className="n-list">
    <ul>
     <li>Home</li>
     <li>About me</li>
     <li>Skills</li> 
     <li>Projects</li>
      <li><a href={resume} style={{textDecoration:"none"}} target="_blank">Resume</a></li>
      <li><a href={resume} target="_blank" download > 
     <button  className='n-btn'>Download</button></a></li>
     </ul>
    </div>
    
    </div>
    
     <button className='button n-btn'>Contact me</button>

    </div>
  )
}

export default Navbar