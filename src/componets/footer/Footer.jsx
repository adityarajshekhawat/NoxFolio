import React from "react";
import "./footer.scss";
import { IoIosArrowForward } from "react-icons/io";
import logog from "../../assets/nav-logo.png";
const Footer = () => {
  return (
    <>
      <footer class="main-footer rel z-1">
        <div class="footer-top-wrap bgc-black pt-100 pb-75">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-12">
                <div class="footer-widget widget_logo wow fadeInUp delay-0-2s">
                  <div class="footer-logo">
                    <a href="/">
                      <img src={logog} alt="Logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-7">
                <div class="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h6 class="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <a href="services">Service</a>
                    </li>
                    <li>
                      <a href="projects">Projects</a>
                    </li>
                    <li>
                      <a href="services#pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="about#faqs">Faqs</a>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div class="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                  <form action="#">
                    <label for="email-address" className="">
                      <i class="far fa-envelope"></i>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      placeholder="Email Address"
                    />
                    <button>
                      Sign Up <IoIosArrowForward />
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-3 col-md-5">
                <div class="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                  <h6 class="footer-title">Address</h6>
                  <ul>
                    <li style={{ color: "#ffffffa6" }}>
                      <i class="fa-solid fa-location-dot"></i> 55 Main Street,
                      2nd block, New York City
                    </li>
                    <li>
                      <i class="far fa-envelope"></i>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i class="fa-solid fa-phone"></i>
                      <a href="callto:+880(123)45688">+880 (123) 456 88</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom pt-20  rpt-25">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="copyright-text">
                  <p>
                    Copyright @
                    <a href="/" style={{ textDecoration: "none" }}>
                      Noxfolio
                    </a>
                    All Rights Reserved
                  </p>
                </div>
              </div>
              <div class="col-lg-6 text-lg-end">
                <ul class="footer-bottom-nav">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="scroll-top scroll-to-target d-inline-block">
              <span class="fas fa-angle-double-up"></span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
