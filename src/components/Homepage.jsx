import React, { useState } from 'react'
import "../css/homepage.css"
import Aboutpage from './Aboutpage'
import Githubstats from './Githubstats'
import Socialmedia from './social'
import cyber from "../Images/cyber.png"
const techimages = []
const Homepage = () => {
  const [img, setImg] = useState({ cyber })
  const [live, setLive] = useState("https://github.com")
  const [code, setCode] = useState("")
  const [txt, setTxt] = useState("text given")
  const [tech, setTech] = useState(techimages)


  return (
    <>

      <Aboutpage />
      <div className='h-projects'>
        <h1 className='p-text'>Have a Look of My Projects</h1>
        <div className='view-section'>
          <div className="l-view">
            <img src={img.cyber} alt="proj img" className='pr-img' />
          </div>
          <div className="r-view">
            <h1>Description</h1>
            <p>{txt}</p>
            <h2>Tech Stacks Used</h2>
            <a href={code} className="p-btn"><button className='button'>Source Code</button></a>
            <a href={live} className="p-btn"><button className='button'>Live</button></a>
          </div>

        </div>

      </div>
      <div className="p-cards">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <br />
      <div className='g-stats'>
        <Githubstats />
      </div>
    </>
  )
}

export default Homepage