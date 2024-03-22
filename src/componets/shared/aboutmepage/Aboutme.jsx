import React from "react";
import { LuDot } from "react-icons/lu";
import Navbar2 from "../../Page2/Navbar/Navbar2";
import "./meabout.scss";
import aboutimg from "../../../assets/aboutme/about-page.jpg";
import btn1 from "../../../assets/btn-image1.png";
import btn2 from "../../../assets/btn-image2.png";
import dota from "../../../assets/about-dot.png";
import Arrowbtn from "../arrow-move-btn/Arrowbtn";
import Experince from "../../experiencecomp/Experince[1]";
import Skills from "../../skills/Skills";
import Testimonial from "../../testimonials/Testimonial";
import Client from "../../client/Client";
import Footer from "../../footer/Footer";
import fakee from "../../../assets/aboutme/faq-one.jpg";
import fakee2 from "../../../assets/aboutme/faq-two.jpg";
const Aboutme = () => {
  return (
    <>
    <div className="aboutme">

      <Navbar2 />
      <div class="container">
        <div class="me-heading pt-200 mb-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="">About Me</h1>
          <div className="me-subheading">
            <a href="" className="text-decoration-none text-light">
              Home
            </a>
            <LuDot className="mx-2" size={30} />
            <a href="" className="pe-none">
              About Me
            </a>
          </div>
        </div>
        <div class="about-main-image-area pt-40">
          <div class="container">
            <div class="about-main-image wow fadeInUp delay-0-5s">
              <img src={aboutimg} alt="About Page" />
            </div>
          </div>
        </div>
        <section class="about-page-area py-130 rpy-100 rel z-1">
          <div class="container">
            <div class="row align-items-center justify-content-between">
              <div class="col-lg-6">
                <div class="about-page-content-part rel z-2 rmb-55">
                  <div class="section-title mb-35 wow fadeInUp delay-0-2s">
                    <span class="sub-title mb-15">About Me</span>
                    <h2>
                      Professional <span>Problem Solutions</span>
                      For Digital Products
                    </h2>
                    <p>
                      At vero eos et accusamus etodio dignissimos ducimus
                      praesentium voluptatum corrupti quos dolores quas
                      molestias excepturi sint occaecati cupiditate provident
                      qui officia deserunt mollitia animi, id est laborum et
                      dolorum
                    </p>
                  </div>
                  <ul class="list-style-one two-column pb-30 wow fadeInUp delay-0-2s">
                    <li>Branding &amp;Design</li>
                    <li>Digital Marketing</li>
                    <li>Web Development</li>
                    <li>Product Design</li>
                  </ul>

                  <Arrowbtn text={"Learn More"} />
                </div>
              </div>
              <div class="col-xl-5 col-lg-6">
                <div class="about-right-part wow fadeInLeft delay-0-3s">
                  <div class="experience-years">
                    <b>25+</b>
                    <h5>Years Of Experience</h5>
                  </div>
                  <div class="about-btn one wow fadeInRight delay-0-4s">
                    <img src={btn1} alt="Image" />
                    <h6>Experience Designer</h6>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="about-btn two wow fadeInRight delay-0-5s">
                    <img src={btn2} alt="Image" />
                    <h6>Mark J. Collins</h6>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="about-btn three wow fadeInRight delay-0-4s">
                    <img src={btn1} alt="Image" />
                    <h6>Experience Designer</h6>
                    <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="dot-shape one">
                    <img src={dota} alt="Shape" />
                  </div>
                  <div class="dot-shape two">
                    <img src={dota} alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      <section
        id="services"
        class="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 bgc-black  w-100"
        >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Popular Services</span>
                <h2>
                  My <span>Special Service</span>
                  For your Business Development
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">01 .</div>
                <div class="content">
                  <h4>Brand Identity Design</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">02 .</div>
                <div class="content">
                  <h4>Website Design</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">03 .</div>
                <div class="content">
                  <h4>Mobile Application Design</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">04 .</div>
                <div class="content">
                  <h4>Motion Graphics Design</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">05 .</div>
                <div class="content">
                  <h4>Website Development</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="service-item wow fadeInUp delay-0-2s">
                <div class="number">06 .</div>
                <div class="content">
                  <h4>SEO &amp;Digital Marketing</h4>
                  <p>Dignissimos ducimus blanditiis praesen</p>
                </div>
                <a class="details-btn" href="/#">
                  <i class="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <section id="faqs" class="faqs-area py-130 rpy-100 rel z-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="faq-image-part rmb-55 wow fadeInUp delay-0-2s">
                <div class="image-one">
                  <img src={fakee} alt="FAQ" />
                </div>
                <div class="image-two">
                  <img src={fakee2} alt="FAQ" />
                </div>
                <div class="square-shape"></div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="faq-content-part rel z-2">
                <div class="section-title mb-40 wow fadeInUp delay-0-4s">
                  <h2>
                    Professional Solutions For Your{" "}
                    <span>Digital Product </span>
                    Design and development
                  </h2>
                </div>
                <div
                  id="faq-accordion"
                  class="accordion wow fadeInUp delay-0-4s accordion"
                  >
                  <div class="accordion-item">
                    <h5 class="accordion-header">
                      <button class="accordion-button" type="button">
                        What Service We Provide ?
                      </button>
                    </h5>
                    <div class="accordion-collapse collapse collapse">
                      <div class="accordion-body">
                        <p>
                          To take a trivial example which undertakes laborious
                          physical exercise except to obtain some advantage
                          pleasure annoying consequences
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 class="accordion-header">
                      <button class="accordion-button collapsed" type="button">
                        How Many Years Of Experience ?
                      </button>
                    </h5>
                    <div class="accordion-collapse collapse show">
                      <div class="accordion-body">
                        <p>
                          At vero eos et accusamus dignissimos ducimus
                          voluptatum corrupti quos dolores quas molestias
                          excepturie
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 class="accordion-header">
                      <button class="accordion-button collapsed" type="button">
                        Have Any Professional Team Member ?
                      </button>
                    </h5>
                    <div class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p>
                          To take a trivial example which undertakes laborious
                          physical exercise except to obtain some advantage
                          pleasure annoying consequences
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 class="accordion-header">
                      <button class="accordion-button collapsed" type="button">
                        Are You Awards Winning Agency ?
                      </button>
                    </h5>
                    <div class="accordion-collapse  collapse">
                      <div class="accordion-body">
                        <p>
                          To take a trivial example which undertakes laborious
                          physical exercise except to obtain some advantage
                          pleasure annoying consequences
                        </p>
                      </div>
                    </div>
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
      <Testimonial />
      <Client />
      <Footer />
                  </div>
    </>
  );
};

export default Aboutme;
