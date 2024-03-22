import React from "react";
import ser1 from "../../../assets/page2/service1.png";
import ser2 from "../../../assets/page2/service2.png";
import ser3 from "../../../assets/page2/service3.png";
import ser4 from "../../../assets/page2/service4.png";

const Services2 = () => {
  return (
    <>
      {" "}
      <section
        id="services"
        class="services-area-two pt-130 rpt-100 pb-140 rpb-100 rel z-1"
      >
        <div class="container container-1200">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div
                class="section-title text-center mb-50 wow fadeInUp delay-0-2s"
                style={{ animation: "fadeInUp 0.5s ease-in-out" }}
              >
                <span class="sub-title mb-15 ">
                  {/* <i class="flaticon-asterisk-1"></i> */}
                  <i class="fa-solid fa-asterisk pe-2"></i>
                  my services area
                </span>
                <h2 class="text-light" style={{ fontSize: "45px" }}>
                  MY SERVICE AREA
                </h2>
              </div>
            </div>
          </div>
          <div class="services-two-wrap">
            <div class="service-item-two wow fadeInUp delay-0-2s">
              <div class="icon">
                <img src={ser1} alt="Icon" />
              </div>
              <h5 class="title">
                <a href="#">WEBSITE DEvelopment</a>
              </h5>
              <div class="text">
                Welcome to our portfolio website! We are a prof printing company
                that offers a wide range of Lo rem ipsum dolor sit amet,
                consectetur
              </div>
              <ul class="list">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp;Mobile app</li>
              </ul>
              <a href="#" class="details-btn">
                {/* <i class="fal fa-long-arrow-right"></i> */}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="service-item-two wow fadeInUp delay-0-2s">
              <div class="icon">
                <img src={ser2} alt="Icon" />
              </div>
              <h5 class="title">
                <a href="#">Digital Marketing</a>
              </h5>
              <div class="text">
                Welcome to our portfolio website! We are a prof printing company
                that offers a wide range of Lo rem ipsum dolor sit amet,
                consectetur
              </div>
              <ul class="list">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp;Mobile app</li>
              </ul>
              <a href="#" class="details-btn">
                {/* <i class="fal fa-long-arrow-right"></i> */}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="service-item-two wow fadeInUp delay-0-2s">
              <div class="icon">
                <img src={ser3} alt="Icon" />
              </div>
              <h5 class="title">
                <a href="#">Front End DEvelopment</a>
              </h5>
              <div class="text">
                Welcome to our portfolio website! We are a prof printing company
                that offers a wide range of Lo rem ipsum dolor sit amet,
                consectetur
              </div>
              <ul class="list">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp;Mobile app</li>
              </ul>
              <a href="#" class="details-btn">
                <i class="fa-solid fa-arrow-right"></i>
                {/* <i class="fal fa-long-arrow-right"></i> */}
              </a>
            </div>
            <div class="service-item-two wow fadeInUp delay-0-2s">
              <div class="icon">
                <img src={ser4} alt="Icon" />
              </div>
              <h5 class="title">
                <a href="#">Joomla redesigning</a>
              </h5>
              <div class="text">
                Welcome to our portfolio website! We are a prof printing company
                that offers a wide range of Lo rem ipsum dolor sit amet,
                consectetur
              </div>
              <ul class="list">
                <li>Ui/Ux Design</li>
                <li>Research</li>
                <li>Web &amp;Mobile app</li>
              </ul>
              <a href="#" class="details-btn">
                {/* <i class="fal fa-long-arrow-right"></i> */}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="services-more-btn text-center pt-55 wow fadeInUp delay-0-2s">
            <a href="services" id="lol-service">
              Get more services
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services2;
