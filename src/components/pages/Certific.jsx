import React from 'react'
import {Footer} from "./Footer";
import "./certific.css";



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
export const Certific = () => {
  return (
    <div>
       <div className='certification-container'>
        <div className='certification-content'>
        <p>Company</p>
        <h3>Certifications</h3>
        <HrLine color="#F2F2F2" />

        </div>
        
      </div>
      <Footer />
    </div>
  )
}
