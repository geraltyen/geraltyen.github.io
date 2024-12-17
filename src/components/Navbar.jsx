import React from 'react'
import  "../css/navbar.css"
import rglogo from "../assets/rglogo.jpg"

import { GiHamburgerMenu } from "react-icons/gi"
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Navbar = ({scrolltosection,home, about, skills, projects, footer,gitStats}) => {

  const [show,setShow]=useState(false)
  
  return (
    <div className='navwrapper'>

    <div className="n-left">
    <img src={rglogo} alt="" style={{width:"70px",borderRadius:"50%"}}/>
      <h1 className="n-name">
        R Giri Reddy
      </h1>
    </div>
    <div className="n-right">
    <div className="n-list">
    <ul>
     <li onClick={()=>scrolltosection(about)}>Home</li>
     <li onClick={()=>scrolltosection(about)}>About me</li>
     <li onClick={()=>scrolltosection(skills)}>Skills</li> 
     <li onClick={()=>scrolltosection(projects)}>Projects</li>
     <li onClick={()=>scrolltosection(gitStats)}>GitHub Stats</li>
    <li><a target="_blank" href="" onClick={()=>{window.open("")}}  download >Resume</a></li>
     
     </ul>
    </div> 
    </div>
    <button onClick={()=>scrolltosection(footer)} className='button n-btn'>Contact</button>
    

      <div className="hamburger" onClick={()=>{setShow(!show)}}>
      <a href="#"><GiHamburgerMenu color='white'/></a>
        
      </div>

    </div>
  )
}

export default Navbar