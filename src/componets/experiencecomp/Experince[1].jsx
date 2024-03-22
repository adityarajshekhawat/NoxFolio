import React from "react";
import "./experince.scss";
import { FaStarOfLife } from "react-icons/fa6";
import Arrow from "../shared/arrow";

const Experince = () => {
  return (
    <div className="container pt-100">
      <div className="row">
        <div className="col-sm-3">
          <div className="exp-icon">
            <FaStarOfLife size={200} />
          </div>
        </div>
        <div className="col-sm-9">
          <div className="my-resume">My Resume</div>
          <div className="my-resume2">
            Real <span id="resume-green">Problem Solutions</span>
            <br />
            Experience
          </div>
          <div className="resume-div">
            <div className="resume-divone">
              <div className="resume-div1">
                <Arrow />
                <div className="resume-div-pad">
                  <div className="redume-div-content">
                    <div className="resume-div2">2021-Present</div>
                    <div className="resume-div3">Lead Product Designer</div>
                    <div className="resume-div4">Google</div>
                  </div>
                </div>
              </div>
              <div className="resume-div1">
                <Arrow />

                <div className="resume-div-pad">
                  <div className="redume-div-content">
                    <div className="resume-div2">2021-Present</div>
                    <div className="resume-div3">Lead Product Designer</div>
                    <div className="resume-div4">Google</div>
                  </div>
                </div>
              </div>
            </div>
            <hr
              id="exp-hr"
              style={{
                width: "24vh",
                transform: "Rotate(90deg) translateX(20vh)",
              }}
            />
            <div className="resume-divtwo">
              <div className="resume-div1">
                <Arrow />

                <div className="resume-div-pad">
                  <div className="redume-div-content">
                    <div className="resume-div2">2021-Present</div>
                    <div className="resume-div3">Lead Product Designer</div>
                    <div className="resume-div4">Google</div>
                  </div>
                </div>
              </div>
              <div className="resume-div1">
                <Arrow />

                <div className="resume-div-pad">
                  <div className="redume-div-content">
                    <div className="resume-div2">2021-Present</div>
                    <div className="resume-div3">Lead Product Designer</div>
                    <div className="resume-div4">Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div id="nono">
          <div className="my-resume">Popular Services</div>
          <div className="my-resume2">
            <h1>
              My <span id="resume-green">Special Service</span> For your <br />
              Business Development
            </h1>
          </div>
        </div>
        <div className="row2">
          <div className="col-sm-6 hello">
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
            <div className="exp-boxs">
              <div className="number">01.</div>
              <div className="services-box">
                <div className="services-1">Brand Identity Design</div>
                <div className="resume-div4">
                  Dignissimos ducimus blanditiis praesen
                </div>
              </div>
              <Arrow />
            </div>
          </div>
        </div>
        <div className="col-sm-6"></div>
      </div>
    </div>
  );
};

export default Experince;
