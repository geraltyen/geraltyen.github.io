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
import mongo from "../Images/mongo.png"
import jsimg from "../Images/jsimg.png"
import pr1 from "../Images/pr1.png"
import pr2 from "../Images/pr2.png"
import pr3 from "../Images/pr3.png"
import pr4 from "../Images/pr4.png"
import pr5 from "../Images/nykaa.png"
import avis from "../Images/pr5.png"
import Slider from 'react-slick'
const primg1=[htmlimg,cssimg,jsimg]
const primg2=[reactimg,reduximg,next]
const primg3=[reactimg,reduximg,mongo]
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
  setImg("https://user-images.githubusercontent.com/107506646/221434962-c51516ca-5281-4ef3-928e-31e7a2c88b84.png")
  setTxt("Avis is India's leading mobility Company with services ranging from chauffeur drive and self-drive car rentals, car-Sales")
  setLive("https://cruiserental.vercel.app/")
  setCode("https://github.com/shikhu51197/Avis-Rentals")
  setType("Collaborative")
  setPname("Avis Rentals Clone")
  setTech(primg3)
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
        <h1 className='p-text'>Have a Look at <span className='headingspan'>My Projects</span> </h1>
        <hr className='hrlin'/>
        
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
        <img src={avis} alt="i" onClick={()=>{third()}}/>
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