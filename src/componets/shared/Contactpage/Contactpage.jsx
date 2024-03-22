import React from "react";
import "./contactpage.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Arrowbtn from "../../shared/arrow-move-btn/Arrowbtn";
// import Buttonone from "../components-1/Buttonone";
import { FaRegUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { CiText } from "react-icons/ci";
import { MdMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Navi from "../../Navbar/Navi";
import Footer from "../../footer/Footer";

const Contactpage = () => {
  return (
    <>
      <Navi />
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h1
              className="page-title wow fadeInUp delay-0-2s"
              style={{ visibility: "visible" }}
            >
              Contact Us
            </h1>
            <nav aria-label="breadcrumb">
              <ol
                className="breadcrumb justify-content-center wow fadeInUp delay-0-4s"
                style={{ visibility: "visible" }}
              >
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-lines">
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

      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                    inventore veritatis
                  </p>
                </div>
                <h6>Main Office</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <IoLocationOutline id="loc" /> 55 Main Street, 2nd block,
                      <br /> New York City
                    </li>
                    <li>
                      <IoMdMail id="loc" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <FaPhoneAlt id="loc" />{" "}
                      <a href="callto:+880(123)45688">+880 (123) 456 88</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-page-form contact-form form-style-one wow fadeInUp delay-0-2s">
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          className="form-control"
                          placeholder="Richard D. Hammond"
                          data-error="Please enter your Name"
                          type="text"
                          value=""
                          name="name"
                        />
                        <label htmlFor="name" className="for-icon">
                          <FaRegUser />
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          className="form-control"
                          placeholder="support@gmail.com"
                          data-error="Please enter your Email"
                          type="email"
                          value=""
                          name="email"
                        />
                        <label htmlFor="email" className="for-icon">
                          <MdMail />
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input
                          id="phone_number"
                          className="form-control"
                          placeholder="+880 (123) 456 88"
                          data-error="Please enter your Phone Number"
                          type="text"
                          value=""
                          name="phone_number"
                        />
                        <label htmlFor="phone_number" className="for-icon">
                          <FaPhoneAlt />
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          id="subject"
                          className="form-control"
                          placeholder="Subject"
                          data-error="Please enter your Subject"
                          type="text"
                          value=""
                          name="subject"
                        />
                        <label htmlFor="subject" className="for-icon">
                          <CiText />
                        </label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows="4"
                          placeholder="write message"
                          data-error="Please enter your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <Arrowbtn text="Send Us Message" />
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
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
      <div
        className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s"
        style={{ visibility: "visible" }}
      >
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ border: "0px", width: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactpage;
