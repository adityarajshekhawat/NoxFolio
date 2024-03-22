import React from "react";
import "./about.scss";

import { FaCheck } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

import btnimg1 from "../../assets/btn-image1.png";
import btnimg2 from "../../assets/btn-image2.png";
import contimg from "../../assets/about.jpg";
import animimg from "../../assets/about-dot.png";

const About = () => {
  
  return (
    <div id="abouts">
      <div id="about-main">
        <div id="about-textdiv">
          <h5>About Me</h5>
          <h1 className="about-white-h1" style={{ display: "flex" }}>
            Professional
            <h1 className="about-yellow-h1" style={{ display: "flex" }}>
              Problem Solutions
            </h1>
          </h1>
          <h1 className="about-white-h1">For Digital Products</h1>
          <p>
            At vero eos et accusamus etodio dignissimos ducimus praesentium
            voluptatum corrupti quos dolores quas molestias excepturi sint
            occaecati cupiditate provident qui officia deserunt mollitia animi,
            id est laborum et dolorum
          </p>
          <div id="about-text-ticks">
            <div className="about-tick-divs">
              <FaCheck color="#c9f31d" />
              Branding & Design
            </div>
            <div className="about-tick-divs">
              <FaCheck color="#c9f31d" />
              Digital Marketing
            </div>
            <div className="about-tick-divs">
              <FaCheck color="#c9f31d" />
              Web Development
            </div>
            <div className="about-tick-divs">
              <FaCheck color="#c9f31d" />
              Product Design
            </div>
          </div>
          <div id="about-text-contact">
            <div className="about-contact">
              <div className="about-contact-image">
                <MdOutlineEmail color="black" size={25} />
              </div>
              <div className="about-contact-text">
                <p>Email Us</p>
                <a href="" id="about-contact-email">
                  Support@gmail.com
                </a>
              </div>
            </div>
            <div className="about-contact">
              <div className="about-contact-image">
                <IoCallOutline color="black" size={25} />
              </div>
              <div className="about-contact-text">
                <p>Make A Call</p>
                <a href="" id="about-contact-email">
                  +91 9085603265
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="about-imagediv">
          <img src={animimg} alt="" id="about-aniimg" />
          <div className="about-image-hovers" id="about-img">
            <div className="contact-hover-image">
              <img src={btnimg1} alt="" />
            </div>
            <p>Experience Designer</p>
            <MdArrowOutward size={25} />
          </div>
          <div className="about-image-hovers" id="about-img2">
            <div className="contact-hover-image">
              <img src={btnimg2} alt="" />
            </div>
            <p>Mark J. Collins</p>
            <MdArrowOutward size={25} />
          </div>
          <img src={contimg} alt="" id="contact-image-ani" />
        </div>
      </div>
    </div>
  );
};

export default About;
