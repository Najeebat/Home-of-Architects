import React, { useState } from "react";
import Section_A from "../images/sectionA-img.png";
import ImageA from "../images/secB_imgA.png";
import ImageB from "../images/secB_imgB.png";
import ImageC from "../images/secB_imgC.png";
import ImageE from "../images/secD-imgB.png";
import ImageF from "../images/secD-imgC.png";
import ImageG from "../images/secD-imgD.png";
import ImageH from "../images/secD-imgE.png";
import Contactsec from "../images/contact-img.png";
import { Footer } from './Footer';
import Btn from "./Btn";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsSlashLg } from "react-icons/bs";
import "./Main.css";

// eslint-disable-next-line react/prop-types
const HrLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: "2px",
      border: "none",
      width: "300px",
    }}
  />
);

export const Main = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="sectionA">
     <div className="sectionA-content">
         <p>PROJECT</p>
          <h3>Lorum</h3>
          <div className="sectionA-arrow">
              <GoArrowLeft  className="icon"/>
              {" "}
              <GoArrowRight className="icon" />
            <HrLine color="#F2F2F2" />
          </div>

          <div className="pegination">
            <span>
              0 <br /> 1
            </span>{" "}
            <span>
              <BsSlashLg />
            </span>{" "}
            <span>02</span>
          </div>
     </div>

        <div className="sectionA-img">
          <img src={Section_A} alt="Section A" />
          <Btn btnClass="sectionA-btn">
            VIEW PROJECT <GoArrowRight className="arrow-icon" />
          </Btn>
        </div>
      </div>

      <div className="sectionB">
        <div className="sectionB-content">
          <div className="sectionB-img">
            <div className="grid-container">
              <div className="box box1">
                <img src={ImageA} alt="Section B" />
              </div>
              <div className="box box2">
                <img src={ImageB} alt="Section B" />
              </div>
              <div className="box box3">
                <img src={ImageC} alt="Section B" />
              </div>
            </div>
          </div>

          <div className="sectionB-text">
            <h2>About</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <Btn btnClass="sectionB-btn">
              {" "}
              READ MORE <GoArrowRight className="arrow-icon" />
            </Btn>
          </div>
        </div>
      </div>

      <div className="sectionC">
        <h2>Main Focus/Mission Statement</h2>
        <div className="sectionC-content">
          <div className="sectionC-left">
            <div className="sectionC-two">
              <span>1</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>

          <div className="sectionC-right">
            <div className="sectionC-two">
              <span>2</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                efficitur, lectus et facilisis placerat, magna mauris porttitor
                tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="sectionD">
      <h2>Our Projects</h2>
        <div className="sectionD-img">
          <div className="secD-grid-container">
            <div className="sectionD-top">
              <div className="box box1">
              <p>Sample <br /> Project</p>
             
              <Btn btnClass="box1-btn">
              {" "}
              VIEW MORE <GoArrowRight className="secD-arrow-icon" />
            </Btn>
              </div>
              <div className="box box2">
                <img src={ImageE} alt="Section D" />
              </div>
            </div>

            <div className="sectionD-bottom">
              <div className="box box3">
                <img src={ImageF} alt="Section D" />
              </div>
              <div className="box box4">
                <img src={ImageG} alt="Section D" />
              </div>
              <div className="box box5">
                <img src={ImageH} alt="Section D" />
              </div>
            </div>
            <Btn btnClass="sectionD-btn">
              {" "}
              ALL PROJECTS <GoArrowRight className="secD-arrow-icon" />
            </Btn>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <div className="contact">
          <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number"></label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Phone number"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject"></label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Interested in"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Btn btnClass="sectionB-btn submit" >
              {" "}
              SEND EMAIL <GoArrowRight className="arrow-icon " />
            </Btn>
        </form>
        </div>
       <div className="contact-img">
        <img src={Contactsec } alt="Section E" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};
