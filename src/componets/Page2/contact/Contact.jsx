import React from "react";
import "./sdsad.scss";
const Contact = () => {
  return (
    <>
      <section id="contact" class="contact-area py-115 rpy-100 rel z-1">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-7 col-lg-8">
              <div class="contact-two-content pt-5 rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                <div class="section-title mb-25 p-0">
                  <span class="sub-title mb-15">
                    {/* <i class="flaticon-asterisk-1"></i> */}
                    <i class="fa-solid fa-asterisk pe-2"></i>
                    let’s work together
                  </span>
                  <h2 className="p-0 m-0">let’s Work Together</h2>
                </div>
                <div class="row align-items-center">
                  <div class="col-sm-8">
                    <h3 className="mb-4">i,m avaiable at</h3>
                    <h5 className="mb-4">
                      <i
                        class="far fa-envelope me-2"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                      bill.sanders@example.com
                    </h5>
                    <h5 className="mb-4">
                      {/* <i class="far fa-phone"></i> */}
                      <i
                        class="fa-solid fa-phone me-2"
                        style={{ color: "var(--primary-color)" }}
                      ></i>
                      239 555-0108
                    </h5>
                  </div>
                  <div class="col-sm-4">
                    <div class="arrow" id="aaaro">
                      <i class="fa-solid fa-arrow-right"></i>
                      {/* <i class="fal fa-arrow-right"></i> */}
                      {/* <i class="fa-regular fa-arrow-right"></i> */}
                    </div>
                  </div>
                </div>
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
            <div class="col-lg-4">
              <div class="contact-form-twos form-style-one wow fadeInUp delay-0-4s">
                <form
                  id="contactForm"
                  class="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div class="form-group">
                    <label class="for-title" for="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      class="form-control"
                      data-error="Please enter your Email"
                      type="email"
                      name="email"
                    />
                    <label for="email" class="for-icon">
                      <i class="far fa-envelope"></i>
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <label class="for-title" for="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      class="form-control"
                      data-error="Please enter your Name"
                      type="text"
                      name="name"
                    />
                    <label for="name" class="for-icon">
                      <i class="far fa-user"></i>
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="7"
                      placeholder="Write Messege....."
                      data-error="Please enter your Message"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group mb-0">
                    <button type="submit" class="thheme-btn">
                      <i class="far fa-envelope"></i> Messege me
                    </button>
                    <div id="msgSubmit" class="hidden"></div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="col-lg-4">
              <div
                class="contact-form-two form-style-one wow fadeInUp delay-0-4s"
                style="visibility: visible;"
              >
                <form
                  id="contactForm"
                  class="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div class="form-group">
                    <label class="for-title" for="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      class="form-control"
                      data-error="Please enter your Email"
                      type="email"
                      name="email"
                    />
                    <label for="email" class="for-icon">
                      <i class="far fa-envelope"></i>
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <label class="for-title" for="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      class="form-control"
                      data-error="Please enter your Name"
                      type="text"
                      name="name"
                    />
                    <label for="name" class="for-icon">
                      <i class="far fa-user"></i>
                    </label>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="7"
                      placeholder="Write Messege....."
                      data-error="Please enter your Message"
                    ></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="form-group mb-0">
                    <button type="submit" class="theme-btn">
                      <i class="far fa-envelope"></i> Messege me
                    </button>
                    <div id="msgSubmit" class="hidden"></div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div class="headline-area pt-60 bgc-black rel z-2">
        <div class="headline-wrap">
          <span class="marquee-wrap style-two pb-20">
            <span class="marquee-inner left">
              <span class="marquee-item">
                <span>_ Designer _</span>
                Portfolio <span>_ Developer _ </span>
                Portfolio
              </span>
            </span>
            <span class="marquee-inner left">
              <span class="marquee-item">
                <span>_ Designer _</span>
                Portfolio <span>_ Developer _ </span>
                Portfolio
              </span>
            </span>
            <span class="marquee-inner left">
              <span class="marquee-item">
                <span>_ Designer _</span>
                Portfolio <span>_ Developer _ </span>
                Portfolio
              </span>
            </span>
          </span>
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
    </>
  );
};

export default Contact;
