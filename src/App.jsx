import React from "react";

import "./componets/shared/animation.scss";
// import "./shared/news.scss";
import "./componets/shared/new.scss";
import Navigation from "./componets/Navbar/Navbar2";
import Intro from "./componets/Home/Intro";
import About from "./componets/aboutme/About";
import Experince from "./componets/experiencecomp/Experince[1]";
import Skills from "./componets/skills/Skills";
import Projects from "./componets/Projects/Projects";
import Testimonial from "./componets/testimonials/Testimonial";
import Price from "./componets/pricing/Price";
import Contact from "./componets/contactform/Contact";
import Blog from "./componets/blog/Blog";
import Client from "./componets/client/Client";
import Footer from "./componets/footer/Footer";
import Navi from "./componets/Navbar/Navi";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <>
      <Navi />
      {/* <Navigation /> */}
      <Intro />
      <About />
      <Experince />
      <Skills />
      <Projects />
      <Testimonial />
      <Price />
      <Contact />
      <Blog />
      <Client />
      <Footer />
    </>
  );
};

export default App;
