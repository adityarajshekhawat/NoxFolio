import React from 'react'
import "./pro2.scss"
import pimg1 from "../../../assets/page2/project-two1.jpg";
import pimg2 from "../../../assets/page2/project-two2.jpg";
import pimg3 from "../../../assets/page2/project-two3.jpg";
import pimg4 from "../../../assets/page2/project-two4.jpg";
import pimg5 from "../../../assets/page2/project-two5.jpg";
const Projects2 = () => {
  return (
    <>
      {" "}
      <section
        id="projects"
        class="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
      >
        <div class="container container-1200">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">
                  <i class="fa-solid fa-asterisk"></i>
                  Explore my projects
                </span>
                <h2>Explore My Projects</h2>
              </div>
            </div>
          </div>
          <div class="row gap-50">
            <div class="col-md-6">
              <div class="project-item style-four wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={pimg1} alt="Project" />
                  <a class="hover-box" href="/project-details">
                    <span>View More</span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </a>
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/project-details">Digital Marketing</a>
                  </h5>
                  <span class="sub-title">Art , Direction</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="project-item style-four wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={pimg2} alt="Project" />
                  <a class="hover-box" href="/project-details">
                    <span>View More</span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </a>
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/project-details">Digital Marketing</a>
                  </h5>
                  <span class="sub-title">Art , Direction</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="project-item style-four wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={pimg3} alt="Project" />
                  <a class="hover-box" href="/project-details">
                    <span>View More</span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </a>
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/project-details">Digital Marketing</a>
                  </h5>
                  <span class="sub-title">Art , Direction</span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="project-item style-four wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={pimg4} alt="Project" />
                  <a class="hover-box" href="/project-details">
                    <span>View More</span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </a>
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/project-details">Digital Marketing</a>
                  </h5>
                  <span class="sub-title">Art , Direction</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 order-md-3">
              <div class="project-item style-four wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={pimg5} alt="Project" />
                  <a class="hover-box" href="/project-details">
                    <span>View More</span>
                    <i class="fa-solid fa-arrow-up"></i>
                  </a>
                </div>
                <div class="content">
                  <h5 class="title">
                    <a href="/project-details">Digital Marketing</a>
                  </h5>
                  <span class="sub-title">Art , Direction</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 align-self-center">
              <div class="project-details-btn mb-50">
                <a
                  class="more-btn wow zoomIn delay-0-2s"
                  href="/project-details"
                >
                  <span>More</span>
                  <i class="fa-solid fa-arrow-up"></i>
                </a>
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
}

export default Projects2