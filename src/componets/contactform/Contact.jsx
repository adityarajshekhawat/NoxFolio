import React from "react";
import Arrowbtn from "../shared/arrow-move-btn/Arrowbtn";
import { FaPhone } from "react-icons/fa";
import { PiSubtitlesBold } from "react-icons/pi";
import { GrFormNext } from "react-icons/gr";
const Contact = () => {
  return (
    <>
      <section
        id="contact"
        class="contact-area pt-95 pb-130 rpt-70 rpb-100 rel z-1"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="contact-content-part rpt-0 rmb-55 wow fadeInUp delay-0-2s">
                <div class="section-title mb-40">
                  <span class="sub-title">Get In Touch</span>
                  <h2 className="mt-3">
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                    inventore veritatis
                  </p>
                </div>
                <ul class="list-style-two">
                  <li>5+ Years Of Experience</li>
                  <li>Professional Web Designer</li>
                  <li>Mobile Apps Design</li>
                  <li>Custom Design Support</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="contact-form contact-form-wrap form-style-one wow fadeInUp delay-0-4s">
                <form
                  id="contactForm"
                  class="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          class="form-control"
                          placeholder="Richard D. Hammond"
                          data-error="Please enter your Name"
                          name="name"
                          value=""
                        />
                        <label for="name" class="for-icon">
                          <i class="far fa-user"></i>
                        </label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          class="form-control"
                          placeholder="support@gmail.com"
                          data-error="Please enter your Email"
                          name="email"
                          value=""
                        />
                        <label for="email" class="for-icon">
                          <i class="far fa-envelope"></i>
                        </label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="phone_number">Phone Number</label>
                        <input
                          type="text"
                          id="phone_number"
                          class="form-control"
                          placeholder="+880 (123) 456 88"
                          data-error="Please enter your Phone Number"
                          name="phone_number"
                          value=""
                        />
                        <label for="phone_number" class="for-icon">
                          <FaPhone />
                        </label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          class="form-control"
                          placeholder="Subject"
                          data-error="Please enter your Subject"
                          name="subject"
                          value=""
                        />
                        <label for="subject" class="for-icon">
                          <PiSubtitlesBold />
                        </label>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          class="form-control"
                          rows="4"
                          placeholder="write message"
                          data-error="Please enter your Message"
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group mb-0">
                        <Arrowbtn
                          text="Send Us Message"
                          type="submit"
                          class="theme-btn"
                        />

                        <div id="msgSubmit" class="hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
