import React from "react";
import "./intro.scss";
import "../shared/animation.scss";
import Arrowbtn from "../shared/arrow-move-btn/Arrowbtn";

import { IoIosArrowForward } from "react-icons/io";
import homeyellow from "../../assets/progress-shape.png";
import blackboy from "../../assets/blackboy.png";
const Intro = () => {
  return (
    <>
      <div class="bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="intro-main">
        <div id="intro-textdiv">
          <h1 id="home-grey-h1">Hello, i’m</h1>
          <h1 id="home-yellow-h1">Roy C. Jones</h1>
          <h1 id="home-white-h1">web designer</h1>
          <p>
            We denounce with righteous indignation dislike demoralized by the
            charms of pleasure
          </p>
          <div id="intro-text-btndiv">
            <Arrowbtn text={"Hire Me"} />
            <a href="" id="intro-text-btn">
              Download Resume
              <IoIosArrowForward color="white" />
            </a>
          </div>
        </div>
        <div id="intro-image">
          <div id="intro-image-black"></div>
          <img src={homeyellow} alt="" id="intro-yellow" />
          <img src={blackboy} alt="" id="intro-boy" />
        </div>
        <div id="intro-numdiv">
          <div className="intro-numdivs">
            <h1 className="intro-num" id="intro-exp">
              13+
            </h1>
            <p className="intro-num-text">Years of Experience</p>
          </div>
          <hr style={{ color: "grey" }} />
          <div className="intro-numdivs">
            <h1 className="intro-num">8k+</h1>
            <p className="intro-num-text">project complete</p>
          </div>
          <hr style={{ color: "grey" }} />

          <div className="intro-numdivs">
            <h1 className="intro-num">99%+</h1>
            <p className="intro-num-text">client satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
