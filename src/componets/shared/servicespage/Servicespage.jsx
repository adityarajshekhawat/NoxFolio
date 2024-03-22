import "./servicepagestyle.scss";
import React from "react";
import Navbar2 from "../../Page2/Navbar/Navbar2";
import Pricing from "../../Page2/pricing/Pricing";
import Services from "../../Page2/services/Services2";
import Price from "../../pricing/Price";
import Footer from "../../footer/Footer";
import w1 from "../../../assets/what-i-do1.jpg";
import w2 from "../../../assets/what-i-do2.jpg";
import Arrowbtn from "../arrow-move-btn/Arrowbtn";

const Servicespage = () => {
  return (
    <>
      <div className="servicespage">
        <Navbar2 />
        <div class="page-wrapper">
          {/* <header class="main-header menu-absolute">
          <div class="header-upper">
            <div class="container container-1620 clearfix">
              <div class="header-inner rel d-flex align-items-center">
                <div class="logo-outer">
                  <div class="logo">
                    <a href="/">
                      <img
                        src="assets/images/logos/logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </div>
                </div>
                <div class="nav-outer clearfix mx-auto">
                  <nav class="main-menu navbar-expand-lg">
                    <div class="navbar-header">
                      <div class="mobile-logo my-15">
                        <a href="/">
                          <img
                            src="assets/images/logos/logo.png"
                            alt="Logo"
                            title="Logo"
                          />
                        </a>
                      </div>
                      <button
                        type="button"
                        class="navbar-toggle me-4"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    </div>
                    <div class="navbar-collapse collapse clearfix ">
                      <ul class="navigation clearfix">
                        <li class="dropdown">
                          <a href="#">Home</a>
                          <ul>
                            <li class="dropdown">
                              <a href="#">MultiPage</a>
                              <ul>
                                <li>
                                  <a href="/">Home One</a>
                                </li>
                                <li>
                                  <a href="/index2">Home Two</a>
                                </li>
                              </ul>
                              <div class="dropdown-btn">
                                <span class="fas fa-chevron-down"></span>
                              </div>
                            </li>
                            <li class="dropdown">
                              <a href="#">OnePage</a>
                              <ul>
                                <li>
                                  <a href="/indexonepage">Home One</a>
                                </li>
                                <li>
                                  <a href="/index2onepage">Home Two</a>
                                </li>
                              </ul>
                              <div class="dropdown-btn">
                                <span class="fas fa-chevron-down"></span>
                              </div>
                            </li>
                          </ul>
                          <div class="dropdown-btn">
                            <span class="fas fa-chevron-down"></span>
                          </div>
                        </li>
                        <li>
                          <a href="/about">about</a>
                        </li>
                        <li>
                          <a href="/services">services</a>
                        </li>
                        <li class="dropdown">
                          <a href="#">projects</a>
                          <ul>
                            <li>
                              <a href="/projects">project Grid</a>
                            </li>
                            <li>
                              <a href="/projects-masonry">projects masonry</a>
                            </li>
                            <li>
                              <a href="/project-details">projects details</a>
                            </li>
                          </ul>
                          <div class="dropdown-btn">
                            <span class="fas fa-chevron-down"></span>
                          </div>
                        </li>
                        <li class="dropdown">
                          <a href="#">blog</a>
                          <ul>
                            <li>
                              <a href="/blog">blog standard</a>
                            </li>
                            <li>
                              <a href="/blog-details">blog details</a>
                            </li>
                          </ul>
                          <div class="dropdown-btn">
                            <span class="fas fa-chevron-down"></span>
                          </div>
                        </li>
                        <li class="dropdown">
                          <a href="#">pages</a>
                          <ul>
                            <li>
                              <a href="/404">Error Page</a>
                            </li>
                          </ul>
                          <div class="dropdown-btn">
                            <span class="fas fa-chevron-down"></span>
                          </div>
                        </li>
                        <li>
                          <a href="contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="menu-btns d-none d-lg-block">
                  <div class="menu-sidebar">
                    <button>
                      <img
                        src="assets/images/shape/sidebar-tottler.svg"
                        alt="Toggler"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="form-back-drop"></div>
        <section class="hidden-bar">
          <div class="inner-box text-center">
            <div class="cross-icon">
              <span class="fa fa-times"></span>
            </div>
            <div class="title">
              <h4>Get Appointment</h4>
            </div>
            <div class="appointment-form">
              <form method="post">
                <div class="form-group">
                  <input type="text" placeholder="Name" name="text" value="" />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <textarea placeholder="Message" rows="5"></textarea>
                </div>
                <div class="form-group">
                  <button type="submit" class="theme-btn">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
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
        </section> */}
          <section class="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
            <div class="container">
              <div class="banner-inner text-white">
                <h1 class="page-title wow fadeInUp delay-0-2s">
                  Popular Service
                </h1>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center fs-5 wow fadeInUp delay-0-4s">
                    <li class="breadcrumb-item">
                      <a href="/" className="text-decoration-none">
                        Home
                      </a>
                    </li>
                    <li class="breadcrumb-item active">Popular Service</li>
                  </ol>
                </nav>
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
          <section class="what-i-do-area pt-25 rpt-0 pb-130 rpb-100 rel z-1">
            <div class="container">
              <div class="row align-items-center justify-content-between">
                <div class="col-lg-6">
                  <div class="what-i-do-images rmb-55 wow fadeInUp delay-0-2s">
                    <div class="first-image">
                      <img src={w1} alt="What I do" />
                    </div>
                    <div class="last-image">
                      <img src={w2} alt="What I do" />
                    </div>
                    <div class="icon first">
                      <i class="fa-solid fa-asterisk"></i>
                      {/* <i class="flaticon-asterisk-1"></i> */}
                    </div>
                    <div class="icon last">
                      <i class="fa-solid fa-asterisk"></i>
                      {/* <i class="flaticon-asterisk-1"></i> */}
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-lg-6">
                  <div class="what-i-do-content wow fadeInUp delay-0-4s">
                    <div class="section-title mb-40">
                      <span class="sub-title mb-15">What I Do</span>
                      <h2>
                        Real <span>Problem Solutions</span>
                        Experience
                      </h2>
                      <p>
                        At vero eos et accusamus etodio dignissimos ducimus
                        praesen tium voluptat corrupti quos dolores quas
                        molestias
                      </p>
                    </div>
                    <ul class="list-style-two pb-50">
                      <li>5+ Years Of Experience</li>
                      <li>Professional Web Designer</li>
                      <li>Mobile Apps Design</li>
                    </ul>
                    <div className="ms-4">
                      <Arrowbtn text={"Learn More"} />
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
          <section
            id="services"
            class="services-area pt-130 rpt-100 pb-100 rpb-70 rel z-1 bgc-black"
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
          {/* <Price class="mt-5" /> */}
          <section class="pricing-area pt-130 rpt-100 rel z-1 pb-100">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-xl-12">
                  <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                    <span class="sub-title mb-15">Pricing Package</span>
                    <h2>
                      Amazing <span>Pricing</span>
                      For your Projects
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-item wow fadeInUp delay-0-2s">
                    <div class="pricing-header">
                      <h4 class="title">Basic Plan</h4>
                      <p class="save-percent">
                        Try Out Basic Plan Save <span>20%</span>
                      </p>
                      <span class="price">19.95</span>
                    </div>
                    <div class="pricing-details">
                      <p>
                        Sed perspiciatis unde natus totam see rem aperiam eaque
                        inventore
                      </p>
                      <ul>
                        <li>Website Design</li>
                        <li>Mobile Apps Design</li>
                        <li>Product Design</li>
                        <li class="unable">Digital Marketing</li>
                        <li class="unable">Custom Support</li>
                      </ul>
                      <a class="theme-btn" href="/contact">
                        Choose Package <i class="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-item wow fadeInUp delay-0-4s">
                    <div class="pricing-header">
                      <h4 class="title">Standard Plan</h4>
                      <p class="save-percent">
                        Try Out Basic Plan Save <span>35%</span>
                      </p>
                      <span class="price">19.95</span>
                    </div>
                    <div class="pricing-details">
                      <p>
                        Sed perspiciatis unde natus totam see rem aperiam eaque
                        inventore
                      </p>
                      <ul>
                        <li>Website Design</li>
                        <li>Mobile Apps Design</li>
                        <li>Product Design</li>
                        <li>Digital Marketing</li>
                        <li>Custom Support</li>
                      </ul>
                      <a class="theme-btn" href="/contact">
                        Choose Package <i class="fa-solid fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="pricing-item wow fadeInUp delay-0-6s">
                    <div class="pricing-header">
                      <h4 class="title">Basic Plan</h4>
                      <p class="save-percent">
                        Try Out Basic Plan Save <span>45%</span>
                      </p>
                      <span class="price">19.95</span>
                    </div>
                    <div class="pricing-details">
                      <p>
                        Sed perspiciatis unde natus totam see rem aperiam eaque
                        inventore
                      </p>
                      <ul>
                        <li>Website Design</li>
                        <li>Mobile Apps Design</li>
                        <li>Product Design</li>
                        <li>Digital Marketing</li>
                        <li>Custom Support</li>
                      </ul>
                      <a class="theme-btn" href="/contact">
                        Choose Package
                        <i class="fa-solid fa-angle-right"></i>
                      </a>
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
          <Footer />
          {/* <footer class="main-footer rel z-1">
            <div class="footer-top-wrap bgc-black pt-100 pb-75">
              <div class="container">
                <div class="row">
                  <div class="col-lg-2 col-md-12">
                    <div class="footer-widget widget_logo wow fadeInUp delay-0-2s">
                      <div class="footer-logo">
                        <a href="/">
                          <img src="assets/images/logos/logo.png" alt="Logo" />
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
                        <label for="email-address">
                          <i class="far fa-envelope"></i>
                        </label>
                        <input
                          id="email-address"
                          type="email"
                          placeholder="Email Address"
                        />
                        <button>
                          Sign Up <i class="far fa-angle-right"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-5">
                    <div class="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                      <h6 class="footer-title">Address</h6>
                      <ul>
                        <li>
                          <i class="far fa-map-marker-alt"></i>
                          55 Main Street, 2nd block, New York City
                        </li>
                        <li>
                          <i class="far fa-envelope"></i>
                          <a href="mailto:support@gmail.com">
                            support@gmail.com
                          </a>
                        </li>
                        <li>
                          <i class="far fa-phone"></i>
                          <a href="callto:+880(123)45688">+880 (123) 456 88</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-bottom pt-20 pb-5 rpt-25">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="copyright-text">
                      <p>
                        Copyright @ ,<a href="/">Noxfolio</a>
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
          </footer> */}
        </div>
      </div>
    </>
  );
};

export default Servicespage;
