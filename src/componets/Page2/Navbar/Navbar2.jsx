import React, { useState, useEffect } from "react";
import logogo from "../../../assets/page2/logo.png";
import sidebar from "../../../assets/page2/sidebar-tottler-white.svg";
import "./navi.scss";
const Navbar2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the scroll position exceeds a threshold (e.g., 100)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        class={`main-header header-two menu-absolute  ${
          isScrolled ? "scrolled" : ""
        }`}
        style={{ transition: "all 0.5 cubic-bezier(0.165, 0.84, 0.44, 1)" }}
      >
        <div class="header-upper">
          <div class="container container-1620 clearfix">
            <div class="header-inner rel d-flex align-items-center justifly-content-center">
              <div class="logo-outer">
                <div class="logo">
                  <a href="/">
                    <img src={logogo} alt="Logo" title="Logo" />
                  </a>
                </div>
              </div>
              <div class="nav-outer clearfix mx-auto">
                <nav class="main-menu navbar-expand-lg">
                  <div class="navbar-header">
                    <div class="mobile-logo my-15">
                      <a href="/">
                        <img src={logogo} alt="Logo" title="Logo" />
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
              <div class="menu-btns">
                <div class="menu-sidebar d-none d-lg-block">
                  <button onClick={handleMenuToggle}>
                    <img src={sidebar} alt="Toggler" />
                  </button>
                </div>
                <a class="theme-btn" href="contact">
                  let,s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <div class="form-back-drop"></div>
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
      {/* <div
        id="nav-contact-menu"
        className={isMenuOpen ? "nav-entry" : "nav-exit"}
      >
        <div id="nav-contact-left"></div>
        <div id="nav-contact-right">
          <form action="">
            <div id="nav-contact-closeimg" onClick={handleMenuToggle}>
              <a href="#"> */}
              {/* <IoCloseSharp size={30} color="white" /> */}
              {/* </a> */}
            {/* </div>
            <h1>Get Appointment</h1>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email Address" name="email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit Now</button>
            <div id="nav-contact-socialicons">
              <div className="nav-socialicons">
                <RiTwitterFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiFacebookBoxFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiInstagramFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiPinterestFill color="grey" />
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Navbar2;
