import React from "react";
import "./client.scss";

import c1 from "../../assets/client-logo1.png";
import c2 from "../../assets/client-logo2.png";
import c3 from "../../assets/client-logo3.png";
import c4 from "../../assets/client-logo4.png";
import c5 from "../../assets/client-logo5.png";
import c6 from "../../assets/client-logo6.png";
import c7 from "../../assets/client-logo7.png";
import c8 from "../../assets/client-logo8.png";
import c9 from "../../assets/client-logo9.png";
import c10 from "../../assets/client-logo10.png";
const Client = () => {
  return (
    <>
      <div class="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="section-title text-center pt-5  pb-3 wow fadeInUp delay-0-2s">
                <h6>
                  I’ve <span>1253+ Global Clients</span> &amp; lot’s of Project
                  Complete
                </h6>
              </div>
            </div>
          </div>
          <div class="client-logo-wrap">
            <a class="client-logo-item wow fadeInUp delay-0-2s" href="contact">
              <img src={c1} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-3s" href="contact">
              <img src={c2} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-4s" href="contact">
              <img src={c3} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-5s" href="contact">
              <img src={c4} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-6s" href="contact">
              <img src={c5} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-2s" href="contact">
              <img src={c6} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-3s" href="contact">
              <img src={c7} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-4s" href="contact">
              <img src={c8} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-5s" href="contact">
              <img src={c9} alt="Client Logo" />
            </a>
            <a class="client-logo-item wow fadeInUp delay-0-6s" href="contact">
              <img src={c10} alt="Client Logo" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
