import React from "react";
// import Navbar2 from "../../Page2/Navbar/Navbar2";
import Navigation from "../../Navbar/Navbar2";
import Footer from "../../footer/Footer";
import auth from "../../../assets/author.jpg";
import bde from "../../../assets/blog-details.jpg";
import bm1 from "../../../assets/blog-middle1.jpg";
import bm2 from "../../../assets/blog-middle2.jpg";
import admin from "../../../assets/admin-author.jpg";
import pre from "../../../assets/post-prev.jpg";
import next from "../../../assets/post-next.jpg";
import cum1 from "../../../assets/comment-author1.jpg";
import cum2 from "../../../assets/comment-author2.jpg";
// import next from "../../../assets/comment-author1.jpg";
import news1 from "../../../assets/news1.jpg";
import news2 from "../../../assets/news2.jpg";
import news3 from "../../../assets/news3.jpg";

const Blogdetail = () => {
  return (
    <>
      {/* <Navbar2 /> */}
      <Navigation />
      <div class="page-wrapper">
        <section class="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
          <div class="container">
            <div class="banner-inner text-white">
              <h3 class="page-title wow fadeInUp delay-0-2s">
                Tips For Conducting to Usability Studies With Participants
              </h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item active">
                    Tips For Conducting to Usability Studies With Participants
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
        <section class="blog-details-area pb-70 rpb-40 pb-130 rpb-100 rel z-1">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="blog-details-wrap">
                  <div class="content mt-35">
                    <div class="blog-meta mb-30 wow fadeInUp delay-0-2s">
                      <a href="/blog">Design</a>
                      <a href="/blog">Figma</a>
                    </div>
                    <div class="author-date-share mb-40 wow fadeInUp delay-0-4s">
                      <div class="author">
                        <img src={auth} alt="Author" />
                      </div>
                      <div class="text">
                        <span>Post By</span>
                        <h5>Martin D. Rubio</h5>
                      </div>
                      <div class="text">
                        <span>Published</span>
                        <h5>September 25, 2023</h5>
                      </div>
                      <a href="#" class="details-btn">
                        <i class="fa-solid fa-share-nodes"></i>
                      </a>
                    </div>
                  </div>
                  <div class="image mb-35 wow fadeInUp delay-0-5s">
                    <img src={bde} alt="Blog Details" />
                  </div>
                  <div class="content wow fadeInUp delay-0-2s">
                    <p class="big-letter">
                      sSed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium totam rem
                      aperiam eaque ipsa quae abillo inventore veritatis
                    </p>
                    <p>
                      beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequature
                    </p>
                    <blockquote>
                      Handling Mounting And Unmounting Of Given Navigation
                      Routes In React Native
                      <span class="blockquote-footer">Johnny M. Martin</span>
                    </blockquote>
                  </div>
                  <div class="row gap-20">
                    <div class="col-md-6">
                      <div class="image mb-20 wow fadeInUp delay-0-2s">
                        <img src={bm1} alt="Blog Middle" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="image mb-20 wow fadeInUp delay-0-4s">
                        <img src={bm2} alt="Blog Middle" />
                      </div>
                    </div>
                  </div>
                  <div class="content mt-30 wow fadeInUp delay-0-2s">
                    <h4>Get Your Service to Improve Business</h4>
                    <p>
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum exercitationem ullam
                    </p>
                    <div class="tag-share mt-45 py-30 wow fadeInUp delay-0-2s">
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
                  <div class="admin-comment mt-50 wow fadeInUp delay-0-2s">
                    <div class="comment-body">
                      <div class="author-thumb">
                        <img src={admin} alt="Author" />
                      </div>
                      <div class="content">
                        <h5>Richard M. Fudge</h5>
                        <p>
                          We denounce with righteous indignation and dislike men
                          beguiled and demoralized by the charms of pleasure of
                          the moment
                        </p>
                        <div class="social-style-two mt-5">
                          <i class="fab fa-facebook-f"></i>
                          <i class="fab fa-twitter"></i>
                          <i class="fab fa-linkedin-in"></i>
                          <i class="fab fa-instagram"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <div class="next-prev-post pt-50 pb-20 wow fadeInUp delay-0-2s">
                      <div class="post-item">
                        <div class="image">
                          <img src={pre} alt="Post" />
                        </div>
                        <div class="post-content">
                          <span class="date">
                            <i class="far fa-calendar-alt"></i>
                            <a href="#">Sep 25, 2023</a>
                          </span>
                          <h6>
                            <a href="blog-details">
                              Tips For Conducting Studie
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div class="post-item">
                        <div class="image">
                          <img src={next} alt="Post" />
                        </div>
                        <div class="post-content">
                          <span class="date">
                            <i class="far fa-calendar-alt"></i>
                            <a href="#">Sep 25, 2023</a>
                          </span>
                          <h6>
                            <a href="blog-details">
                              Usability With Participants
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content mt-65">
                    <h3 class="comment-title">Comments</h3>
                    <div class="comment-body wow fadeInUp delay-0-2s">
                      <div class="author-thumb">
                        <img src={cum1} alt="Author" />
                      </div>
                      <div class="content">
                        <ul class="blog-meta">
                          <li>
                            <h6>William L. Jackson</h6>
                          </li>
                          <li>
                            <a href="#">May 25, 2023</a>
                          </li>
                        </ul>
                        <p>
                          Quis autem vel eum iure reprehenderit qui in ea
                          voluptate velit esse molestiae consequatur qui dolorem
                          eum fugiat voluptas
                        </p>
                        <a class="read-more" href="#">
                          Reply <i class="far fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="comment-body comment-child wow fadeInUp delay-0-2s">
                      <div class="author-thumb">
                        <img src={cum2} alt="Author" />
                      </div>
                      <div class="content">
                        <ul class="blog-meta">
                          <li>
                            <h6>James M. Stovall</h6>
                          </li>
                          <li>
                            <a href="#">May 25, 2023</a>
                          </li>
                        </ul>
                        <p>
                          At vero eoset accusamus dignissimos ducimus blanditiis
                          sapiente praesentium voluptatum deleniti atque
                        </p>
                        <a class="read-more" href="#">
                          Reply <i class="far fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <form
                      id="comment-form"
                      class="comment-form form-style-one pt-65 pb-55 mt-55 wow fadeInUp delay-0-2s"
                      name="comment-form"
                      action="#"
                      method="post"
                    >
                      <h5>Leave a Reply</h5>
                      <div class="row mt-30">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              id="full-name"
                              class="form-control"
                              placeholder="Full Name"
                              name="full-name"
                              value=""
                            />
                            <label for="full-name" class="for-icon">
                              <i class="far fa-user"></i>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              id="email-address"
                              class="form-control"
                              placeholder="Email Address"
                              name="email-address"
                              value=""
                            />
                            <label for="email-address" class="for-icon">
                              <i class="far fa-envelope"></i>
                            </label>
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
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mb-0">
                            <button type="submit" class="theme-btn">
                              Leave A Reply <i class="far fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="main-sidebar rmt-65">
                  <div class="widget widget-search wow fadeInUp delay-0-2s">
                    <h4 class="widget-title">Search</h4>
                    <form class="default-search-form" action="#">
                      <input type="text" placeholder="Keywords" />
                      <button
                        type="submit"
                        class="searchbutton far fa-search"
                      ></button>
                    </form>
                  </div>
                  <div class="widget widget-category wow fadeInUp delay-0-4s">
                    <h4 class="widget-title">Category</h4>
                    <ul>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Web Design</a>
                      </li>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Mobile Apps Design</a>
                      </li>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Brand Identity Design</a>
                      </li>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Motion Graphic Design</a>
                      </li>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Web Development</a>
                      </li>
                      <li>
                        <i class="far fa-angle-right"></i>
                        <a href="blog">Digital Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget-recent-news wow fadeInUp delay-0-2s">
                    <h4 class="widget-title">Latest News</h4>
                    <ul>
                      <li>
                        <div class="image">
                          <img src={news1} alt="News" />
                        </div>
                        <div class="content">
                          <div class="blog-meta mb-5">
                            <a class="date" href="#">
                              <i class="far fa-calendar-alt"></i>
                              Sep 25, 2023
                            </a>
                          </div>
                          <h5>
                            <a href="blog-details">
                              Tips For Conducting Studie
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div class="image">
                          <img src={news2} alt="News" />
                        </div>
                        <div class="content">
                          <div class="blog-meta mb-5">
                            <a class="date" href="#">
                              <i class="far fa-calendar-alt"></i>
                              Sep 25, 2023
                            </a>
                          </div>
                          <h5>
                            <a href="blog-details">
                              Usability With Participants
                            </a>
                          </h5>
                        </div>
                      </li>
                      <li>
                        <div class="image">
                          <img src={news3} alt="News" />
                        </div>
                        <div class="content">
                          <div class="blog-meta mb-5">
                            <a class="date" href="#">
                              <i class="far fa-calendar-alt"></i>
                              Sep 25, 2023
                            </a>
                          </div>
                          <h5>
                            <a href="blog-details">Online Environment Work</a>
                          </h5>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                    <h4 class="widget-title">Popular Tags</h4>
                    <div class="tag-coulds">
                      <a href="blog">Design</a>
                      <a href="blog">Figma</a>
                      <a href="blog">Apps</a>
                      <a href="blog">Branding</a>
                      <a href="blog">Development</a>
                      <a href="blog">Digital</a>
                      <a href="blog">Mobile Apps</a>
                    </div>
                  </div>
                  <div class="widget widget-cta wow fadeInUp delay-0-2s">
                    <div
                      class="cta-widget"
                      // style="background-image:url(assets/images/widgets/widget-cta.jpg)"
                    >
                      <span class="sub-title">Get A Quote</span>
                      <h4>Looking For Creative Web Designer</h4>
                      <a class="theme-btn" href="/contact">
                        Hire Me <i class="far fa-angle-right"></i>
                      </a>
                    </div>
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

export default Blogdetail;
