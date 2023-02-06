import React from 'react';
import Navbar from './components/Navbar';
import Socialmedia from './components/social';
import { Link, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import "./App.css"
import  "./css/navbar.css"
import Aboutpage from './components/Aboutpage';
import { ContactUs } from './components/Footer';
import Skills from './components/Skills';
import { useRef } from 'react';
import resume from "./assets/R_Giri_Reddy_Resume.pdf"
import Githubstats from './components/Githubstats';
import Navbarto from './components/Navbarto';
import Projectssec from './components/Projectssec';
function App() {
  const home=useRef(null)
  const about=useRef(null)
  const skills=useRef(null)
  const projects=useRef(null)
  const gitStats=useRef(null)
  const footer=useRef(null)

  const scrolltosection=(elementRef)=>{
    window.scrollTo({
      top:elementRef.current.offsetTop,behavior:"smooth",
      duration:5000})
  }

  return (
    <div className="App">
   {/* <Link to="/about">About</Link>
   <Link  to="/skills"> <h3 onClick={()=>{scrolltosection(skills)}}>Skills</h3></Link> */}
   {/* <Navbar scrolltosection={scrolltosection} home={home } about={about} skills={skills} projects={projects} footer={footer} gitStats={gitStats}/> */}
    <Navbarto scrolltosection={scrolltosection} home={home } about={about} skills={skills} projects={projects} footer={footer} gitStats={gitStats}/>
    <Aboutpage about={about} />
    
    <Homepage home={home} projects={projects}/>
    <Projectssec/>
    <Skills skills={skills}/>
    <Githubstats gitStats={gitStats} />
    <ContactUs footer={footer}/>
   
    
    </div>
  );
}

export default App;
