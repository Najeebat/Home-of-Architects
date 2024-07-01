import React from 'react'
import {Footer} from "./Footer";
import "./Contact.css";


// eslint-disable-next-line react/prop-types
const HrLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: "2px",
      border: "none",
      marginBottom:"1rem",
      marginTop:'1rem',
    }}
  />
);
export const Contact = () => {
  return (
    <div>
        <div className='contact-container'>
        <div className='contact-content'>
        <p>Contact</p>
        <h3>Information</h3>
        <HrLine color="#F2F2F2" />
        </div>
      </div>
      <Footer />
      </div>
  )
}
