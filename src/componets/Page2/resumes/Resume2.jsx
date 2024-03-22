import React from "react";
import Arrow from "../../shared/arrow";
import "./style.scss";
const Resume2 = () => {
  return (
    <>
      <section
        id="resume"
        class="resume-area-two bgc-black rel z-1 pt-185 rpt-145 pb-140 rpb-100"
      >
        <div class="container">
          <div class="row align-items-center pb-20">
            <div class="col-lg-8">
              <div class="section-title mb-35 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">
                  <i class="fa-solid fa-asterisk"></i>
                  MY Expereince resume
                </span>
                <h2 style={{ fontSize: "45px", color: "white" }}>
                  work &amp; Education
                </h2>
              </div>
            </div>
            <div class="col-lg-4 text-lg-end">
              <a class="theme-btn mb-35 text-decoration-none" href="/contact">
                Contact Me
              </a>
            </div>
          </div>
          <div class="row no-gap">
            <div class="col-xl-6">
              <div class="resume-box-wrap design-two">
                <div class="timeline-heading wow fadeInUp delay-0-4s">
                  <span class="title">work</span>
                  <div class="arrow">
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
                <div class="resume-box wow fadeInLeft delay-0-2s">
                  <div class="resume-column">
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2021 - Present
                        </span>
                        <h5 class="title">Senior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2018 -
                        </span>
                        <h5 class="title">Senior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="resume-column">
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2016 - 2018
                        </span>
                        <h5 class="title">Junior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2014 - 2016
                        </span>
                        <h5 class="title">Graphics Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="resume-line">
                    <span class="resume-dots"></span>
                    <span class="resume-dots"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="resume-box-wrap mt-110 rmt-75">
                <div class="timeline-heading wow fadeInDown delay-0-4s">
                  <span class="title">study</span>
                  <div class="arrow">
                    <i class="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
                <div class="resume-box wow fadeInRight delay-0-2s">
                  <div class="resume-column">
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2021 - Present
                        </span>
                        <h5 class="title">Senior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        {/* <i class="fal fa-long-arrow-right"></i> */}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2018 - 2021
                        </span>
                        <h5 class="title">Senior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        {/* <i class="fal fa-long-arrow-right"></i> */}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="resume-column">
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2016 - 2018
                        </span>
                        <h5 class="title">Junior UI Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        {/* <i class="fal fa-long-arrow-right"></i> */}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div class="timeline-item">
                      <div class="resume-content">
                        <span class="duration">
                          <i class="far fa-calendar-alt"></i>
                          2014 - 2016
                        </span>
                        <h5 class="title">Graphics Designer</h5>
                      </div>
                      <a href="#" class="details-btn">
                        {/* <i class="fal fa-long-arrow-right"></i> */}
                        <i class="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="resume-line">
                    <span class="resume-dots"></span>
                    <span class="resume-dots"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default Resume2;
