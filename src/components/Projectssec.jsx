import React from 'react'
import pr2 from "../Images/pr2.png"
import pr3 from "../Images/pr3.png"
import pr4 from "../Images/pr4.png"
import pr5 from "../Images/nykaa.png"
import htmlimg from "../Images/htmlimg.png"
import cssimg from "../Images/cssimg.png"
import reactimg from "../Images/reactimg.png"
import reduximg from "../Images/reduximg.png"
import jsimg from "../Images/jsimg.png"
import next from "../Images/next.png"
import "../css/Projsec.css"

const Projectssec = () => {
    return (
        <div>
            <div className='newpr-main'>
                <div className='newpr-child'>
                    <img className='p-img' src={pr2} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Expedia.com Clone</h2>
                    <p className='des-p'>expedia.com is an E-commerce website that deals with travel packages. A variety of services are available through the website. The Search Functionality and Add to cart and checkout Has been done by me in this Collab project</p>
                    <h2 className='des-h1'>Tech Stacks Used-</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="" />
                        <img src={cssimg} alt="" />
                        <img src={jsimg} alt="" />
                    </div> 

                    <h2 className='des-h1'>Project Type-</h2>
                    <p className='des-p'>Collaborative</p>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/expedia.com-clone" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://darling-brigadeiros-283dcb.netlify.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>
        
                

                
                <div className='newpr-child'>
                    <img className='p-img' src={pr3} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Simple Movie booking App</h2>
                    <p className='des-p'>A simple Movie app Where we can Book Movies, I used omdb Api to Fetch movie data and display also we can add money to wallet and booking will cost you</p>
                    <h2 className='des-h1'>Tech Stacks Used-</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="" />
                        <img src={cssimg} alt="" />
                        <img src={jsimg} alt="" />
                    </div> 

                    <h2 className='des-h1'>Project Type-</h2>
                    <p className='des-p'>Collaborative</p>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/Simple-Movie-app" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://storied-naiad-809472.netlify.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>


                <div className='newpr-child'>
                    <img className='p-img' src={pr4} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Job Seeking App</h2>
                    <p className='des-p'>Simple job App That stores Data And Displays It in The browser. It also contains Bookmark and sort filter functionality too.</p>
                    <h2 className='des-h1'>Tech Stacks Used-</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="" />
                        <img src={cssimg} alt="" />
                        <img src={jsimg} alt="" />
                    </div> 

                    <h2 className='des-h1'>Project Type-</h2>
                    <p className='des-p'>Collaborative</p>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/Simple-Api-Products-App" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://stellular-crepe-9f0df2.netlify.app/index.html" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>

                <div className='newpr-child'>
                    <img className='p-img' src={pr5} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Simple Movie booking App</h2>
                    <p className='des-p'>Nyka is Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.</p>
                    <h2 className='des-h1'>Tech Stacks Used-</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="img" />
                        <img src={next} alt="img" />
                        <img src={reduximg} alt="img" />
                        <img src={reactimg} alt="img" />
                    </div> 

                    <h2 className='des-h1'>Project Type-</h2>
                    <p className='des-p'>Collaborative</p>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/Nykaa.com-clone" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://secretive-form-5947-umber.vercel.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Projectssec