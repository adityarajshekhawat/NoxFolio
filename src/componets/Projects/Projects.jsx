import React from "react";
import "./project.scss";

import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import Project4 from "../../assets/project4.jpg";

import Arrow from "../shared/arrow";

const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="project-main">
          <h5 id="latname" >Latest Works</h5>
          <h1 className="about-white-h1">
            Explore My Popular
            <h1 className="about-yellow-h1"> Projects</h1>
          </h1>
          <div className="project-div">
            <div className="projectboxs">
              <div className="project-left">
                <img src={Project1} alt="" />
              </div>
              <div className="project-right">
                <div className="lul">
                  
                <h5>Product Design</h5>
                <h1>
                  Mobile Application <br /> Design
                </h1>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <Arrow />
                </div>
              </div>
            </div>
            <div className="projectboxs">

              <div className="project-right">
                <div className="lul">

                <h5>Product Design</h5>
                <h1>
                  Mobile Application <br /> Design
                </h1>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <Arrow />
                </div>
              </div>
              <div className="project-left">
                <img src={Project2} alt="" />
              </div>
            </div>
            <div className="projectboxs">
              <div className="project-left">
                <img src={Project3} alt="" />
              </div>

              <div className="project-right">
                <div className="lul">

                <h5>Product Design</h5>
                <h1>
                  Mobile Application <br /> Design
                </h1>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <Arrow />
                </div>
              </div>
            </div>
            <div className="projectboxs">

              <div className="project-right">
                <div className="lul">

                <h5>Product Design</h5>
                <h1>
                  Mobile Application <br /> Design
                </h1>
                <p>
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis architecto beatae
                </p>

                <Arrow />
                </div>
              </div>
              <div className="project-left">
                <img src={Project4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
