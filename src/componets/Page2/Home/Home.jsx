import React from "react";
import "./home.scss";
import hero from "../../../assets/page2/hero-two.png";
import scrolld from "../../../assets/page2/scroll-down.png";

const Home = () => {
  return (
    <div id="home" class="hero-area-two pt-150  rel z-2">
      <div class="container rel z-3">
        <div class="hero-two-content">
          <span class="sub-title wow fadeInLeft delay-0-1s justify-content-center">
            <i class="fa-solid fa-asterisk"></i>
            UI/UX Designer
          </span>
          <span class="title wow fadeInLeft delay-0-2s">
            Hello <small>i,m</small>
          </span>
          <span class="name wow fadeInRight delay-0-4s">henry gayle</span>
          <span class="designations wow fadeInLeft delay-0-6s">
            <span>Ux</span>
            Designer
          </span>
        </div>
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-7">
            <div class="author-image-part wow fadeIn delay-0-3s">
              <div class="bg-circle"></div>
              <img src={hero} alt="Author" />
            </div>
          </div>
        </div>
      </div>
      <a href="#about" class="scroll-down">
        <img src={scrolld} alt="" />
      </a>
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
    </div>
  );
};

export default Home;
