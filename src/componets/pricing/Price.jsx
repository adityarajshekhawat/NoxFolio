import React from "react";
import "./price.scss";
import { FaCheck } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FaChevronRight } from "react-icons/fa";
const Price = () => {
  return (
    <>
      <section class="pricing-area mt-100 rpt-100 rel z-1 undefined">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">Pricing Package</span>
                <h2>
                  Amazing <span>Pricing</span> For your Projects
                </h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center pt-5">
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
                  <a class="theme-btn text-decoration-none" href="/contact">
                    Choose Package <FaChevronRight />
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
                    <li> Website Design</li>
                    <li>Mobile Apps Design</li>
                    <li>Product Design</li>
                    <li>Digital Marketing</li>
                    <li>Custom Support</li>
                  </ul>
                  <a class="theme-btn text-decoration-none" href="/contact">
                    Choose Package <FaChevronRight />
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
                  <a class="theme-btn text-decoration-none" href="/contact">
                    Choose Package <FaChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
