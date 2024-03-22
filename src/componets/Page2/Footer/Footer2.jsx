import React from "react";
import log from "../../../assets/page2/logo.png";
const Footer2 = () => {
  return (
    <>
      <footer class="main-footer footer-two pt-75 rel z-1">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-3 col-md-5">
              <div class="footer-widget widget_logo text-center text-md-start wow fadeInUp delay-0-2s">
                <div class="footer-logo">
                  <a href="/">
                    <img src={log} alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7">
              <div class="footer-widget widget_nav_menu me-0 wow fadeInUp delay-0-4s">
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
                    <a href="blog">News</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-12">
              <hr class="mb-40 " />
            </div>
            <div class="col-xl-6 col-lg-7">
              <div class="footer-widget widget_text text-center text-lg-start wow fadeInUp delay-0-2s">
                <div class="text pb-20">
                  These Terms will be applied fully and affect to your use of
                  this Website. By using this Website, you agreed to accept all
                  terms and conditions written in here.
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="footer-widget widget_social text-center text-lg-end wow fadeInUp delay-0-4s">
                <div class="social-flow">
                  <h4>Follow :</h4>
                  <div class="social-style-one">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <hr class="mt-0" />
            </div>
          </div>
        </div>
        <div class="footer-bottom pt-10 pb-15">
          <div class="container">
            <div class="copyright-text text-center">
              <p>
                Copyright @ ,
                <a href="/" class="pe-2 ps-1 text-decoration-none">
                  Noxfolio
                </a>
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
