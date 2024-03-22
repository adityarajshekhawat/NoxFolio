import React from "react";
import "./pdetails.scss";
import Navbar2 from "../../Navbar/Navbar2";
import Footer from "../../footer/Footer";
import projectd from "../../../assets/project-details.jpg";
import projectm1 from "../../../assets/project-middle1.jpg";
import projectm2 from "../../../assets/project-middle2.jpg";
import projectm3 from "../../../assets/project-middle3.jpg";
import related1 from "../../../assets/related-project1.jpg";
import related2 from "../../../assets/related-project2.jpg";
import related3 from "../../../assets/related-project3.jpg";
const Projectdetail = () => {
  return (
    <>
      <Navbar2 />
      <div class="page-wrapper">
        <section class="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
          <div class="container">
            <div class="banner-inner text-white">
              <h1 class="page-title wow fadeInUp delay-0-2s">
                Mobile Application Design
              </h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center fs-5 wow fadeInUp delay-0-4s">
                  <li class="breadcrumb-item">
                    <a href="/" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active">
                    Mobile Application Design
                  </li>
                </ol>
              </nav>
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
        <section class="projects-details-area pt-40 pb-130 rpb-100 rel z-1">
          <div class="container">
            <div class="projects-details-image mb-50 wow fadeInUp delay-0-2s">
              <img src={projectd} alt="Project Details" />
            </div>
            <div class="row gap-120">
              <div class="col-lg-8">
                <div class="project-details-content wow fadeInUp delay-0-2s">
                  <h3>We Create digital Product For Business</h3>
                  <p class="big-letter">
                    sSed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque seeney laudantium totam
                    rem aperiam eaque ipsa quae abillo inventore veritatis
                  </p>
                  <p>
                    Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aufugit sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam estqui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                    quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid consequature
                  </p>
                  <ul class="list-style-one two-column mt-50 mb-40 me-5">
                    <li>Branding &amp;Design</li>
                    <li>Digital Marketing</li>
                    <li>Web Development</li>
                    <li>Product Design</li>
                    <li>Mobile Apps Design</li>
                    <li>System &amp;Guide</li>
                    <li>Graphics Design</li>
                    <li>Content Management</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 wow fadeInUp delay-0-4s">
                <div
                  class="project-details-info rmb-55"
                  // style="background-image:url(assets/images/projects/project-info-bg.png)"
                >
                  <div class="pd-info-item">
                    <span>Category</span>
                    <h5>Product Design</h5>
                  </div>
                  <div class="pd-info-item">
                    <span>Clients</span>
                    <h5>X_Design Studio</h5>
                  </div>
                  <div class="pd-info-item">
                    <span>Location</span>
                    <h5>Melbourne, Australia</h5>
                  </div>
                  <div class="pd-info-item">
                    <span>Published</span>
                    <h5>September 25, 2023</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pb-15">
              <div class="col-lg-4 col-sm-6">
                <div class="image mb-30 wow fadeInUp delay-0-2s">
                  <img src={projectm1} alt="Project Middle" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="image mb-30 wow fadeInUp delay-0-4s">
                  <img src={projectm2} alt="Project Middle" />
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="image mb-30 wow fadeInUp delay-0-6s">
                  <img src={projectm3} alt="Project Middle" />
                </div>
              </div>
            </div>
            <div class="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
              <h3 class="title mb-25">Project Summery</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don &#x27;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn &#x27;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks reasonable. The generated Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
              </p>
            </div>
            <div class="tag-share py-30 wow fadeInUp delay-0-2s">
              <div class="item">
                <b>Tags</b>
                <div class="tag-coulds">
                  <a href="blog">Design</a>
                  <a href="blog">Figma</a>
                  <a href="blog">Apps</a>
                </div>
              </div>
              <div class="item">
                <b>Share</b>
                <div class="social-style-one">
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
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
        <section class="related-projects-area pb-70 rpb-40 rel z-1">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-12">
                <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                  <h2>Related Projects</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="project-item style-two wow fadeInUp delay-0-2s">
                  <div class="project-image before-after-none">
                    <img src={related1} alt="Project" />
                  </div>
                  <div class="project-content">
                    <span class="sub-title">Graphics Design</span>
                    <h4>
                      <a href="/project-details">Brand Identity Design</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="project-item style-two wow fadeInUp delay-0-4s">
                  <div class="project-image before-after-none">
                    <img src={related2} alt="Project" />
                  </div>
                  <div class="project-content">
                    <span class="sub-title">Product Design</span>
                    <h4>
                      <a href="/project-details">Mobile Apps Design</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="project-item style-two wow fadeInUp delay-0-6s">
                  <div class="project-image before-after-none">
                    <img src={related3} alt="Project" />
                  </div>
                  <div class="project-content">
                    <span class="sub-title">Product Design</span>
                    <h4>
                      <a href="/project-details">Dashboard Development</a>
                    </h4>
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
        <Footer />
      </div>
    </>
  );
};

export default Projectdetail;
