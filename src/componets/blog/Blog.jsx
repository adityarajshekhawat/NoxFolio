import React from "react";
import "./blog.scss";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";

const Blog = () => {
  return (
    <>
      <section id="blog" class="blog-area rel z-1">
        <div class="for-bgc-black pt-100 pb-100 rpt-100 rpb-70">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-12">
                <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <span class="sub-title mb-15">News &amp; Blog</span>
                  <h2>
                    Latest News &amp; <span>Blog</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="blog-item wow fadeInUp delay-0-2s">
                  <div class="image">
                    <img src={blog1} alt="Blog" />
                  </div>
                  <div class="content">
                    <div class="blog-meta mb-35">
                      <a href="blog">Design</a>
                      <a href="blog">Figma</a>
                    </div>
                    <h5>
                      <a href="blog-details">
                        Tips For Conductin See Usability Studies
                      </a>
                    </h5>
                    <hr />
                    <div class="blog-meta mt-35">
                      <a class="date" href="#">
                        <i class="far fa-calendar-alt"></i> September 25, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="blog-item wow fadeInUp delay-0-2s">
                  <div class="image">
                    <img src={blog2} alt="Blog" />
                  </div>
                  <div class="content">
                    <div class="blog-meta mb-35">
                      <a href="blog">Design</a>
                      <a href="blog">Figma</a>
                    </div>
                    <h5>
                      <a href="blog-details">
                        Keyboard-Only Suppor Assistive Technology
                      </a>
                    </h5>
                    <hr />
                    <div class="blog-meta mt-35">
                      <a class="date" href="#">
                        <i class="far fa-calendar-alt"></i> September 25, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
