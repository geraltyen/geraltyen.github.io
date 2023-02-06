import React, { useState } from 'react'
import "../css/homepage.css"
import Aboutpage from './Aboutpage'
import Githubstats from './Githubstats'
import Socialmedia from './social'
import cyber from "../Images/cyber.png"
import htmlimg from "../Images/htmlimg.png"
import cssimg from "../Images/cssimg.png"
import reactimg from "../Images/reactimg.png"
import reduximg from "../Images/reduximg.png"
import next from "../Images/next.png"
import jsimg from "../Images/jsimg.png"
import pr1 from "../Images/pr1.png"
import pr2 from "../Images/pr2.png"
import pr3 from "../Images/pr3.png"
import pr4 from "../Images/pr4.png"
import pr5 from "../Images/nykaa.png"
import Slider from 'react-slick'
const primg1=[htmlimg,cssimg,jsimg]
const primg2=[reactimg,reduximg,next]
const primg3=[]
const primg4=[]

const Homepage = ({home,projects}) => {

  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [img, setImg] = useState( pr5 )
  const [live, setLive] = useState("https://secretive-form-5947-umber.vercel.app/")
  const [code, setCode] = useState("https://github.com/geraltyen/Nykaa.com-clone")
  const [txt, setTxt] = useState("Nyka is Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.")
  const [type,setType]=useState("Collaborative")
  const [tech, setTech] = useState(primg2)
  const [pname,setPname]=useState("Nykaa Clone")
  
  const first=()=>{
    setImg(pr1)
    setTxt("This Website is a time management Website. Contains apps to track Your progress through out the day I have used HTML,JAVASCRIPT,CSS to build the front-end of this Web page")
    setType("Individual")
    setPname("T-Metric Clone")
    setLive("https://teal-hotteok-90ff2a.netlify.app/")
    setCode("https://github.com/geraltyen/TMETRIC---CLONE")
    setTech(primg1)
  }
const second=()=>{
  setImg(pr2)
  setTxt("expedia.com is an E-commerce website that deals with travel packages. A variety of services are available through the website. The Search Functionality and Add to cart and checkout Has been done by me in this Collab project")
  setLive("https://darling-brigadeiros-283dcb.netlify.app/")
  setCode("https://github.com/geraltyen/expedia.com-clone")
  setType("Collaboration")
  setPname("Expedia.com Clone")
  setTech(primg1)
}
const third=()=>{
  setImg(pr3)
  setTxt("A simple Movie app Where we can Book Movies, I used omdb Api to Fetch movie data and display also we can add money to wallet and booking will cost you")
  setLive("https://storied-naiad-809472.netlify.app/")
  setCode("https://github.com/geraltyen/Simple-Movie-app")
  setType("Individual")
  setPname("Simple Movie booking App")
  setTech(primg1)
}
const fourth=()=>{
  setImg(pr5)
  setTxt("Nyka is Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.")
  setLive("https://secretive-form-5947-umber.vercel.app/")
  setCode("https://github.com/geraltyen/Nykaa.com-clone")
  setType("Collaborative")
  setPname("Nykaa Clone")
  setTech(primg2)
}
  return (
    < >

      
      <div className='h-projects' ref={projects}>
        <h1 className='p-text'>Have a Look at My Projects</h1>
        <div className='view-section'>
          <div className="l-view">
            <img src={img} alt="proj img" className='pr-img' />
          </div>
          <div className="r-view">
          <h1 className='p-head'>Project Description</h1>
          <hr />
            <h2 className='p-title'>{pname}</h2>
            <p className='p-des'>{txt}</p>
            <div className="main-stack">
            <div className='stacks'>
            <h2 className='p-tech-title'>Tech Stacks Used-</h2>
            
            {
              tech.map((ele,ind)=>{
                return(
                  <div key={ind}>
                    <img src={ele} alt="techstack img" />
                  </div>
                )
              })
            }
            </div>
            <div className='r-stack'>
              <h2 className='p-type'>Project Type-</h2>
              <p className='p-types'>{type}</p>
            </div>
            </div>

            <div className="pr-btns-div">
            <a href={code} target="_blank"><button className='p-btn'>Source</button></a>
            <a href={live} target="_blank"><button className='p-btn'>Live</button></a>
            </div>
          </div>

        </div>

      </div>
     
      <div className="p-cards">
       
       <div>
        <img src={pr1} alt="i" onClick={()=>{first()}} />
        </div>
        <div>
        <img src={pr2} alt="i" onClick={()=>{second()}} />
        </div>
        <div>
        <img src={pr3} alt="i" onClick={()=>{third()}}/>
        </div>
        <div>
        <img src={pr5} alt="i" onClick={()=>{fourth()}}/>
        </div>
        
      </div>
      
      <hr />
      
    </>
  )
}

export default Homepage