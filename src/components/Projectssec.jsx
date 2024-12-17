import React from 'react'
import pr1 from "../Images/pr1.png"
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
import mongo from "../Images/mongo.png"
import avis from "../Images/pr5.png"
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
                    <h2 className='des-h1'>Tech Stacks Used</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="" />
                        <img src={cssimg} alt="" />
                        <img src={jsimg} alt="" />
                    </div> 
                    
                    <h2 className='des-h1'>Project Type : <span style={{color:"black"}}>Collaborative</span> </h2>
                    
                    
                    
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/expedia.com-clone" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://darling-brigadeiros-283dcb.netlify.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>
        
                

                
                <div className='newpr-child'>
                    <img className='p-img' src={avis} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Avis Rentals Clone</h2>
                    <p className='des-p'>FULL STACK APP. Avis is India's leading mobility Company with services ranging from chauffeur drive and self-drive car rentals, car-Sales, operating lease and fleet management and has been present in the country for over 20 years.This was a collaborative Project which is made by 5 team members within 5 Days.</p>
                    <h2 className='des-h1'>Tech Stacks Used</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="img" />
                        <img src={cssimg} alt="img" />
                        <img src={reactimg} alt="img" />
                        <img src={reduximg} alt="img" />
                        <img src={mongo} alt="img" />

                    </div> 

                    <h2 className='des-h1'>Project Type : <span style={{color:"black"}}>Collaborative</span> </h2>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/shikhu51197/Avis-Rentals" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://cruiserental.vercel.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>


                <div className='newpr-child'>
                    <img className='p-img' src={pr1} alt="" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>T-Metric Clone</h2>
                    <p className='des-p'>This Website is a time management Website. Contains apps to track Your progress through out the day I have used HTML,JAVASCRIPT,CSS to build the front-end of this Web page.</p>
                    <h2 className='des-h1'>Tech Stacks Used</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="" />
                        <img src={cssimg} alt="" />
                        <img src={jsimg} alt="" />
                    </div> 

                    <h2 className='des-h1'>Project Type : <span style={{color:"black"}}>Individual</span> </h2>
                    <div className='pr-btn-btn'>
                        <a href="https://github.com/geraltyen/TMETRIC---CLONE" target="_blank"><button className='btn-des'>Source</button></a>
                        <a href="https://teal-hotteok-90ff2a.netlify.app/" target="_blank"><button className='btn-des'>Live</button></a>
                    </div>
                </div>

                <div className="last" className='newpr-child'>
                    <img className='p-img' src={pr5} alt="img" />
                    <h1 className='des-h1'>Project Description</h1>
                    <h2 className='des-title'>Nykaa Clone</h2>
                    <p className='des-p'>Nyka is Buy cosmetics & beauty products online from Nykaa, the online shopping beauty store. Browse makeup, health products & more from top beauty brands.</p>
                    <h2 className='des-h1'>Tech Stacks Used</h2>
                    <div className='t-st'>
                        <img src={htmlimg} alt="img" />
                        <img src={next} alt="img" />
                        <img src={reduximg} alt="img" />
                        <img src={reactimg} alt="img" />
                    </div> 

                    <h2 className='des-h1'>Project Type : <span style={{color:"black"}}>Collaborative</span> </h2>
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