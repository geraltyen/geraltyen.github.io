import React from 'react'
import "../css/About.css"
import insta from "../Images/instagram.png"
import facebook from "../Images/fb.png"
import git from "../Images/github.png"
import linkedin from "../Images/linkedin.png"
import purple from "../Images/purpleblur.png"
import giri from "../Images/giri.png"
const Aboutpage = () => {
  return (
    <div className='a-wrapper'>
    
<div className="a-left">
    <div className='a-name'>
        <span>Hii! I Am,</span> <span>R Giri Reddy</span>  
        <span>Full Stack Web Developer,Capable of Producing Quality Web Work </span>
    </div>
    <div className='a-img'>
    <img src={insta} alt="img" />
    <img src={facebook} alt="img" />
    <img src={linkedin} alt="img" />
    <img src={git} alt="" />
    </div>

</div>
    <div className="a-right">
      
      <img src={purple} alt="" />
      <img src={giri} alt="" />
    </div>
    
    </div>
  )
}

export default Aboutpage