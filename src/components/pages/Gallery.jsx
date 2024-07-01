import React from 'react'
import { Footer } from './Footer';
import GalleryI from '../images/galleryI.png';
import GalleryA from '../images/galleryA.png';
import GalleryB from '../images/galleryB.png';
import GalleryC from '../images/galleryC.png';
import GalleryD from '../images/galleryD.png';
import GalleryE from '../images/galleryE.png';
import GalleryF from '../images/galleryF.png';
import GalleryG from '../images/galleryG.png';
import GalleryH from '../images/galleryH.png';
import { BsSlashLg } from "react-icons/bs";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import "./Gallery.css";


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

export const Gallery = () => {
  return (
    <div>
      <div className='gallery-container'>
        <div className='gallery-content'>
        <p>Photo</p>
        <h3>Gallery</h3>
        <HrLine color="#F2F2F2" />

        <div className='grid-container'>
        <div><img src={GalleryI} alt="" /></div>
        <div><img src={GalleryA} alt="" /></div>
        <div><img src={GalleryB} alt="" /></div>  
        <div><img src={GalleryC} alt="" /></div>
        <div><img src={GalleryD} alt="" /></div>
        <div><img src={GalleryE} alt="" /></div>  
        <div><img src={GalleryF} alt="" /></div> 
        <div><img src={GalleryG} alt="" /></div> 
        <div><img src={GalleryH} alt="" /></div>
        <div><img src={GalleryI} alt="" /></div> 
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
        </div>

      </div>
      <Footer/>
      </div>
  )
}
