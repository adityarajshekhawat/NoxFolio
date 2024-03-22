import React from "react";
import "./skills.scss";

import simg1 from "../../assets/skill1.png";
import simg2 from "../../assets/skill2.png";
import simg3 from "../../assets/skill3.png";
import simg4 from "../../assets/skill4.png";
import simg5 from "../../assets/skill5.png";
import simg6 from "../../assets/skill6.png";
import simg7 from "../../assets/skill7.png";
import simg8 from "../../assets/skill8.png";

import Arrowbtn from "../shared/arrow-move-btn/Arrowbtn";
const Skills = () => {
  return (
    <>
      <div className="skill ">
        <div className="skill-main">
          <div className="skill-left">
            <h5>My Skills</h5>
            <h1 className="about-white-h1">Let’s Explore Popular</h1>
            <h1 className="about-yellow-h1">Skills & Experience</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus to voluptatem
              accusantium doloremque laudantium, totam rem aperiamc eaque ipsa
              quae ab illo inventore veritatis
            </p>
            <Arrowbtn text={"learn more"} />
          </div>
          <div className="skill-right">
            <div className="skill-boxs">
              <img src={simg1} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg2} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg3} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg4} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg5} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg6} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>{" "}
            <div className="skill-boxs">
              <img src={simg7} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>
            <div className="skill-boxs">
              <img src={simg8} alt="" className="skill-img" />
              <h5>Figma</h5>
              <div className="skill-per">95%</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
