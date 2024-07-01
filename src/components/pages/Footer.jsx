import React from 'react'
import Footerlogo from'../images/Footer-logo.png';
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import "./Footer.css"


const HrLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: "2px",
      border: "none",
      width: "100%",
      paddingBottom: "3rem",
    }}
  />
);

export const Footer = () => {
  return (
    <div>
       <div className='hero'>
        <div className='footer-container'>
            <div className='BoxA'>
            <img src={Footerlogo} alt="Section A" />
            </div>
            <div className='BoxB'>
              <h5>Information</h5>
              <ul>
                <li>Main</li>
                <li>Gallery</li>
                <li>Projects</li>
                <li>Certifications</li>
                <li>Contacts</li>
              </ul>
            </div>
            <div className='BoxC'>
            <h5>Contacts</h5>
              <div className='location'>
            <span><IoLocationOutline className='icons'/></span><p>1234 Sample Street <br />
            Austin Texas 78704</p>
            </div>
            <div className='location'>
            <span><FiPhone className='icons'/></span><p>512.333.2222</p>
            </div>
            <div className='location'>
            <span><TfiEmail className='icons' /></span><p>sampleemail@gmail.com</p>
            </div>
            </div>
            <div className='BoxD'>
            <h5>Social Media</h5>
            <div className='social'>
            <span><FaFacebookF className='icon'/></span>
            <span><FaTwitter className='icon' /></span>
            <span><FaLinkedin className='icon'/></span>
            <span><FaPinterestP className='icon'/></span>


            </div>
            </div>
        </div>
        </div>
        </div>
  )
}
