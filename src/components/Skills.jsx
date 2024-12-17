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
import jest from "../Images/jest.png"
import ts from "../Images/typescript.png"
import git2 from "../Images/git2.png"
import vs from "../Images/vs.png"
import thund from "../Images/thund.png"
import "../css/skills.css"

const Skills = ({skills}) => {
  return (
    <div ref={skills}>
     <h1 className='p-text'>Technical <span className='headingspan'>Skills</span> </h1>
     <hr className='hrlin'/>
    <br />
    <br />
    <div className='s-main'>
    <div><img src={htmlimg} alt="img" className='s-img' />
      <h3 className='s-read'>HTML</h3>
      </div>
      <div><img src={cssimg} alt="img" className='s-img' />
      <h3 className='s-read'>CSS</h3>
      </div>
      <div><img src={reactimg} alt="img" className='s-img' />
      <h3 className='s-read'>React</h3>
      </div>
      <div><img src={reduximg} alt="img" className='s-img' />
      <h3 className='s-read'>Redux</h3>
      </div>
      <div><img src={jsimg} alt="img" className='s-img' />
      <h3 className='s-read'>JavaScript</h3>
      </div>
      <div><img src={chakra} alt="img" className='s-img' />
      <h3 className='s-read'>Chakra</h3>
      </div>
      <div><img src={mongo} alt="img" className='s-img' />
      <h3 className='s-read'>MongoDB</h3>
      </div>
      <div><img src={jest} alt="img" className='s-img' />
      <h3 className='s-read'>JEST</h3>
      </div>
      <div><img src={ts} alt="img" className='s-img' />
      <h3 className='s-read'>TypeScript</h3>
      </div>
    
     </div>
     <div className="tools">
      <h1 className='p-text'> <span className='headingspan'>Tools</span>  I Know</h1>
      <hr className='hrlin'/>
      <br />
      <div className="s-main">
      <div><img src={git} alt="img" className='s-img' />
      <h3 className='s-read'>Git</h3>
      </div>
      <div><img src={vercel} alt="img" className='s-img' />
      <h3 className='s-read'>Vercel</h3>
      </div>
      <div><img src={node} alt="img" className='s-img' />
      <h3 className='s-read'>Node</h3>
      </div>
      <div><img src={npm} alt="img" className='s-img' />
      <h3 className='s-read'>Npm</h3>
      </div>
      <div><img src={net} alt="img" className='s-img' />
      <h3 className='s-read'>Netlify</h3>
      </div>
      <div><img src={git2} alt="img" className='s-img' />
      <h3 className='s-read'>Github</h3>
      </div>
      <div><img src={thund} alt="img" className='s-img' />
      <h3 className='s-read'>Thunder Client</h3>
      </div>
      <div><img src={vs} alt="img" className='s-img' />
      <h3 className='s-read'>VS Code</h3>
      </div>
      </div>
     </div>
  </div>
  )
}

export default Skills