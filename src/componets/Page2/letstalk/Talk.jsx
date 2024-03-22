import React from "react";

const Talk = () => {
  return (
    <>
      <div class="lets-talk-area bgc-black rel z-1 text-center pb-115 rpb-100">
        <div class="container">
          <a
            class="lets-talk-text wow zoomIn delay-0-2s text-decoration-none"
            href="/contact"
          >
            Get In Touch
            <i class="fa-solid fa-arrow-right ms-4 pt-2"></i>
          </a>
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
      </div>
      <a href="#" class="scroll-top scroll-to-target" data-target="html">
        <span class="fas fa-angle-double-up"></span>
      </a>
    </>
  );
};

export default Talk;
