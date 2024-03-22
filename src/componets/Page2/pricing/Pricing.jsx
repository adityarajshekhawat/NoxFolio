import React from "react";
import arr from "../../../assets/page2/price-arrow.png";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        class="pricing-area-two bgc-black pt-140 rpt-100 rel z-1"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-12">
              <div class="section-title text-center mb-25 wow fadeInUp delay-0-2s">
                <span class="sub-title mb-15">
                  {/* <i class="flaticon-asterisk-1"></i> */}
                  <i class="fa-solid fa-asterisk pe-2"></i>
                  explore pricing plan
                </span>
                <h2 class="" style={{ fontSize: "45px", color: "white" }}>
                  amazing <span class="pe-2">pricing</span>
                  plan
                </h2>
              </div>
              <ul class="nav pricing-tab mb-50 nav" role="tablist">
                <li class="nav-item">
                  <button
                    role="tab"
                    data-rb-event-key="monthly"
                    aria-selected="true"
                    class="nav-link active"
                  >
                    Monthly
                  </button>
                </li>
                <li class="nav-item">
                  <button
                    role="tab"
                    data-rb-event-key="yearly"
                    aria-selected="false"
                    class="nav-link"
                  >
                    Yearly
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content wow fadeInUp ms-5 ps-3 delay-0-4s tab-content">
            <div
              role="tabpanel"
              aria-hidden="false"
              class="fade tab-pane fade tab-pane active show"
            >
              <div class="row">
                <div class="col-xl-6">
                  <div class="pricing-item style-two">
                    <div class="row justify-content-between">
                      <div class="col-sm-6">
                        <div class="title">
                          <div class="icon">
                            <i class="fa-solid fa-check"></i>
                            {/* <i class="fa-solid fa-check"></i> */}
                          </div>
                          <div class="content">
                            <h4>Private plan</h4>
                            <span class="save">Save 20%</span>
                          </div>
                        </div>
                        <span class="price">29.</span>
                        <div class="arrow">
                          <img src={arr} alt="Arrow" />
                        </div>
                        <a
                          class="theme-btn text-decoration-none"
                          href="/contact"
                        >
                          Get started
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>
                            All Financial Tasks{" "}
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Economic Market Survey
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Sales Operations <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Auto Intelligence <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            24/7 Support <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Financila Technology Se
                            <i class="fa-solid fa-check"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="pricing-item style-two">
                    <div class="row justify-content-between">
                      <div class="col-sm-6">
                        <div class="title">
                          <div class="icon">
                            {/* <i class="fa-solid fa-check"></i> */}
                            <i class="fa-solid fa-check"></i>
                          </div>
                          <div class="content">
                            <h4>Private plan</h4>
                            <span class="save">Save 20%</span>
                          </div>
                        </div>
                        <span class="price">29.</span>
                        <div class="arrow">
                          <img src={arr} alt="Arrow" />
                        </div>
                        <a
                          class="theme-btn text-decoration-none"
                          href="/contact"
                        >
                          Get started
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>
                            All Financial Tasks{" "}
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Economic Market Survey
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Sales Operations <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Auto Intelligence <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            24/7 Support <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Financila Technology Se
                            <i class="fa-solid fa-check"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              role="tabpanel"
              aria-hidden="true"
              class="fade tab-pane fade yearly tab-pane"
            >
              <div class="row">
                <div class="col-xl-6">
                  <div class="pricing-item style-two wow fadeInUp delay-0-2s">
                    <div class="row justify-content-between">
                      <div class="col-sm-6">
                        <div class="title">
                          <div class="icon">
                            <i class="fa-solid fa-check"></i>
                          </div>
                          <div class="content">
                            <h4>Private plan</h4>
                            <span class="save">Save 20%</span>
                          </div>
                        </div>
                        <span class="price">29.</span>
                        <div class="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <a class="theme-btn" href="/contact">
                          Get started
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>
                            All Financial Tasks{" "}
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Economic Market Survey
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Sales Operations <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Auto Intelligence <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            24/7 Support <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Financila Technology Se
                            <i class="fa-solid fa-check"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="pricing-item style-two wow fadeInUp delay-0-4s">
                    <div class="row justify-content-between">
                      <div class="col-sm-6">
                        <div class="title">
                          <div class="icon">
                            <i class="fa-solid fa-check"></i>
                          </div>
                          <div class="content">
                            <h4>Private plan</h4>
                            <span class="save">Save 20%</span>
                          </div>
                        </div>
                        <span class="price">29.</span>
                        <div class="arrow">
                          <img
                            src="assets/images/icons/price-arrow.png"
                            alt="Arrow"
                          />
                        </div>
                        <a class="theme-btn" href="/contact">
                          Get started
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <ul class="list">
                          <li>
                            All Financial Tasks{" "}
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Economic Market Survey
                            <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Sales Operations <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Auto Intelligence <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            24/7 Support <i class="fa-solid fa-check"></i>
                          </li>
                          <li>
                            Financila Technology Se
                            <i class="fa-solid fa-check"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
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
    </>
  );
};

export default Pricing;
