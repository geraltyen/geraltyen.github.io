import React from 'react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import "../css/footer.css"
import { AiOutlinePhone } from "react-icons/ai"
import link2 from "../Images/link2.png"
import git2 from "../Images/git2.png"
import fb2 from "../Images/fb2.png"
import phn from "../Images/phn.png"
import phn2 from "../Images/phn2.jpg"
import gmail from "../Images/gmail2.jpg"
export const ContactUs = ({ footer }) => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4l0aq85', 'template_1xrfzwj', form.current, 'kaulwbFKBMfMKE8A1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className='f-main ' ref={footer}>
      <h1 className='f-h'>Contact Me </h1>
      <div className='f-subh'>
      <h1>Get in touch</h1>
      <h1>My details</h1>
      </div>
      
      <div className='f-cont'>
        <div className='f-left'>
        

          <form className='footer' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input className='f-text' placeholder='Your Name' type="text" name="user_name" />
            <label>Email</label>
            <input className='f-text' placeholder='Your Email' type="email" name="user_email" />
            <label>Message</label>
            <textarea className='f-text' placeholder='The Message You Wanna Send To Me' name="message" />
            <input className='f-btn' type="submit" value="Send" />
          </form>
        </div>


        <div className="f-right">
        
          <div>
          <a href="" className='f-rightchild'>
          <div><img src={phn2} alt="" /></div>
          <div><span>6370060300</span></div>
          </a>
          </div>
          <div>
          <a href="" className='f-rightchild'>
          <div><img src={link2} alt="" /></div>
          <div><span>Linked In</span></div>
          </a>
          </div>
         
          <div>
          <a href="" className='f-rightchild'>
          <div><img src={gmail} alt="" /></div>
          <div><span>girireddyanna@gmail.com</span></div>
          </a>
          </div>
        
          <div>
          <a href="" className='f-rightchild'>
          <div><img src={git2} alt="" /></div>
          <div><span>Github</span></div>
          </a>
          </div>
          
        
         

        </div>
      </div>
    </div>

  );
};
