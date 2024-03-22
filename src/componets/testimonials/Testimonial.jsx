import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testi.scss"; // Make sure to import your stylesheet
import Arrow from "../shared/arrow";
import Au1 from "../../assets/author1.png";
import Au2 from "../../assets/author2.png";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      author: "Rodolfo E. Shannon",
      role: "CEO & Founder",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores",
      img: Au1,
    },
    {
      id: 2,
      author: "Kenneth J. Dutton",
      role: "Web Developer",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
      img: Au2,
    },
    // {
    //   id: 3,
    //   author: "Kenneth J. Dutton",
    //   role: "Web Developer",
    //   text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
    //   img: Au2,
    // },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-area rel z-1 bg-black ">
      <div className="for-bgc-black py-130 rpy-100">
        <div className="container">
          <div className="row gap-90">
            <div className="col-lg-4 row  p-0">
              <div className="testimonials-content-part rel z-2 rmb-55">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Clients Testimonials</span>
                  <h2>
                    I’ve 1253+ Clients <span>Feedback</span>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
                <div className="slider-arrows">
                  <button
                    className="testimonial-prev slick-arrow "
                    style={{
                      background: "none",
                      border: "none",
                      transform: "rotate(270deg)",
                    }}
                  >
                    <Arrow />
                  </button>
                  <button
                    
                    className="testimonial-next slick-arrow sdfs"
                    style={{
                      background: "none",
                      border: "none",
                      // transform: "rotate(0deg)",
                    }}
                  >
                    <Arrow />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pe-5">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="slick-slide">
                    <div className="testimonial-item">
                      <div className="author">
                        <img src={testimonial.img} alt="" />
                      </div>
                      <div className="text">{testimonial.text}</div>
                      <div className="testi-des">
                        <h5>{testimonial.author}</h5>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
