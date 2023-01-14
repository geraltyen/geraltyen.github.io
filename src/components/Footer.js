import React from 'react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react';
import "../css/footer.css"
import { AiOutlinePhone } from "react-icons/ai"
import wave from "../Images/wave.png"
import phn from "../Images/phn.png"
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

    <div className='f-main' ref={footer}>
      <h1 className='f-h'>I will Get Your Message </h1>
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
      <img src={phn} alt="" />
        <span>6370060300</span>
        </div>
         

        </div>
      </div>
    </div>

  );
};
