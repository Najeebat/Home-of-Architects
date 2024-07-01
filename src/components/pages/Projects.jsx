import React from 'react';
import ImageA from "../images/pro1.png";
import ImageB from "../images/pro2.png";
import ImageC from "../images/pro3.png";
import { Footer } from "./Footer";
import Btn  from "./Btn";
import { BsSlashLg } from "react-icons/bs";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import "./projects.css";

const HrLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: "2px",
      border: "none",
      marginBottom: "1rem",
      marginTop: '1rem',
    }}
  />
);

export const Projects = () => {
  return (
    <div className='projects-page'>
      <div className='project-container'>
        <div className='project-content'>
          <p>Our</p>
          <h3>Projects</h3>
          <HrLine color="#F2F2F2" />

          <div className='project-items'>
            <div className='project-items-img'>
              <img src={ImageA} alt="Pro1" />
            </div>
            <div className='project-items-content'>
              <h2>Sample Project</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.</p>

              <Btn btnClass="sectionB-btn">
                VIEW MORE <GoArrowRight className="arrow-icon" />
              </Btn>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-items-img'>
              <img src={ImageB} alt="Pro1" />
            </div>
            <div className='project-items-content'>
              <h2>Sample Project</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.</p>

              <Btn btnClass="sectionB-btn">
                VIEW MORE <GoArrowRight className="arrow-icon" />
              </Btn>
            </div>
          </div>

          <div className='project-items'>
            <div className='project-items-img'>
              <img src={ImageC} alt="Pro1" />
            </div>
            <div className='project-items-content'>
              <h2>Sample Project</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a 
                type specimen book.</p>

              <Btn btnClass="sectionB-btn">
                VIEW MORE <GoArrowRight className="arrow-icon" />
              </Btn>
            </div>
          </div>
        </div>
       
      </div>
      <div className='peg-content'>
        <div className="peg">
            <span className='first-peg'>
              0 <br /> 1
            </span>{" "}
            <span>
              <BsSlashLg className='slash' />
            </span>{" "}
            <span>05</span>
          </div>
   
          <div className="gallery-arrow">
              <GoArrowLeft  className="icon"/>
              {" "}
              <GoArrowRight className="icon" />
            <HrLine color="#F2F2F2" />
          </div>
        </div>
      <Footer />
    </div>
  );
};
