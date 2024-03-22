import React from "react";
import errorimg from "../../../assets/404-error.png";
import Arrowbtn from "../arrow-move-btn/Arrowbtn";
import Navigation from "../../Navbar/Navbar2";
const Page404 = () => {
  return (
    <div class="page-wrapper">
      <Navigation />
      <section class="error-area pt-185 rpt-130 pb-130 rpb-100 rel z-1 text-center">
        <div class="container">
          <div class="error-content">
            <div class="image mb-85 rmb-55 wow fadeInUp delay-0-2s">
              <img src={errorimg} alt="Error" />
            </div>
            <div class="section-title mb-40 wow fadeInUp delay-0-2s">
              <h1>OPPS!</h1>
              <h2>This Page Are Can &#x27;t be Found</h2>
            </div>
            <Arrowbtn text={"Go To Homepage"} />
            {/* <a class="theme-btn wow fadeInUp delay-0-2s" href="/">
              Go To Homepage <i class="far fa-angle-right"></i>
            </a> */}
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
    </div>
  );
};

export default Page404;
