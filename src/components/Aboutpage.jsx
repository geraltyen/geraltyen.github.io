import React from 'react'
import "../css/About.css"
import insta from "../Images/hacker.png"
import facebook from "../Images/fb2.png"
import git from "../Images/git2.png"
import linkedin from "../Images/link2.png"
import purple from "../Images/purpleblur.png"
import giri from "../Images/giri.png"
const Aboutpage = ({about}) => {
  return (
    <div className='a-wrapper' ref={about}>
    
<div className="a-left">
    <div className='a-name'>
        <span style={{color:"white"}}>Hii! I Am,</span> <span>R Giri Reddy</span>  
        <span>Full Stack Web Developer,Capable of Producing Quality Web Work trained by Masai School, Bengaluru.Passionate in creating projects and systems which can result in both me and my organizations success.</span>
    </div> 
    <div className='a-img'>
    <a target="_blank" href="https://www.hackerrank.com/girireddyanna"><img src={insta} alt="img" /></a> 
    
    <a target="_blank" href="https://fb.com/greystarktony"><img src={facebook} alt="img" /></a> 
    <a target="_blank" href="https://linkedin.com/in/giri-reddy-geralt"><img src={linkedin} alt="img" /></a> 
    <a target="_blank" href="https://github.com/geraltyen"><img src={git} alt="" /></a> 
    </div>

    </div>
    <div className="a-right">
      
      <img src={giri} alt="" />
    </div>
    
    </div>
  )
}

export default Aboutpage