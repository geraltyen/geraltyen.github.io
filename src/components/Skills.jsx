import React from 'react'
import htmlimg from "../Images/htmlimg.png"
import cssimg from "../Images/cssimg.png"
import reactimg from "../Images/reactimg.png"
import reduximg from "../Images/reduximg.png"
import jsimg from "../Images/jsimg.png"
import chakra from "../Images/chakra.png"
import git from "../Images/gitimg.png"
import net from "../Images/netlify.png"
import node from "../Images/node.png"
import npm from "../Images/npm.png"
import mongo from "../Images/mongo.png"
import vercel from "../Images/vercel.png"
import jest from "../Images/jest.jpg"
import ts from "../Images/typescript.png"
import "../css/skills.css"

const Skills = ({skills}) => {
  return (
    <div ref={skills}>
     <h1 className='s-head' >Technical Skills</h1>

    <div className='s-main'>
   
      <img src={htmlimg} alt="img" className='s-img'/>
      <img src={cssimg} alt="img" className='s-img' />
      <img src={reactimg} alt="img" className='s-img' />
      <img src={reduximg} alt="img" className='s-img' />
      <img src={jsimg} alt="img" className='s-img' />
      <img src={chakra} alt="img" className='s-img' />
      <img src={git} alt="img" className='s-img' />
      <img src={npm} alt="img" className='s-img' />
      <img src={net} alt="img" className='s-img' />
      <img src={node} alt="img" className='s-img' />
      <img src={mongo} alt="img" className='s-img' />
      <img src={vercel} alt="img" className='s-img' />
      <img src={jest} alt="img" className='s-img' />
      <img src={ts} alt="img" className='s-img' />
     </div>
     <div className="tools">
      
     </div>
  </div>
  )
}

export default Skills