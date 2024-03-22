import React from "react";
import bg1 from "../../../assets/page2/blog-two1.jpg";
import bg2 from "../../../assets/page2/blog-two2.jpg";
import bg3 from "../../../assets/page2/blog-two3.jpg";
import airow from "../../../assets/page2/details-arrow.png";
const Blog2 = () => {
  return (
    <>
      <section
        id="blog"
        class="blog-area bgc-black pt-110 rpt-80 pb-100 rpb-70 rel z-1"
      >
        <div class="container container-1200">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">
                  {/* <i class="flaticon-asterisk-1"></i> */}
                  <i class="fa-solid fa-asterisk pe-2"></i>
                  Introduction about me
                </span>
                <h2 style={{ fontSize: "45px", color: "white" }}>
                  Leatest News &amp;Blogs
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="blog-item-two wow fadeInUp delay-0-2s">
                <div class="image">
                  <img src={bg1} alt="Blog" />
                  <a class="details-btn" href="/blog-details">
                    {/* <i class="fal fa-long-arrow-right"></i> */}
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details">
                      Trending code settings for a nice portfolio
                    </a>
                  </h4>
                  <a class="read-more" href="/blog-details">
                    Read More
                    <img src={airow} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item-two wow fadeInUp delay-0-4s">
                <div class="image">
                  <img src={bg2} alt="Blog" />
                  <a class="details-btn" href="/blog-details">
                    {/* <i class="fal fa-long-arrow-right"></i> */}
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details">
                      Trending code settings for a nice portfolio
                    </a>
                  </h4>
                  <a class="read-more" href="/blog-details">
                    Read More
                    <img src={airow} alt="Arrow" />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item-two wow fadeInUp delay-0-6s">
                <div class="image">
                  <img src={bg3} alt="Blog" />
                  <a class="details-btn" href="/blog-details">
                    {/* <i class="fal fa-long-arrow-right"></i> */}
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a href="project-details">
                      Trending code settings for a nice portfolio
                    </a>
                  </h4>
                  <a class="read-more" href="/blog-details">
                    Read More
                    <img src={airow} alt="Arrow" />
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
    </>
  );
};

export default Blog2;
