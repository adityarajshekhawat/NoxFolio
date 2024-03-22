import React from "react";

import Navbar2 from "./componets/Page2/Navbar/Navbar2";
import Home from "./componets/Page2/Home/Home";
import About2 from "./componets/Page2/about/About2";
import Resume2 from "./componets/Page2/resumes/Resume2";
import Skills2 from "./componets/Page2/skills/Skills2";
import Projects2 from "./componets/Page2/projects/Projects2";
import Services2 from "./componets/Page2/services/Services2";
import Awards from "./componets/Page2/awards/Awards";
import Pricing from "./componets/Page2/pricing/Pricing";
import Client2 from "./componets/Page2/clientl/Client2";
import Contact from "./componets/Page2/contact/Contact";
import Blog2 from "./componets/Page2/Blog/Blog2";
import Talk from "./componets/Page2/letstalk/Talk";
import Footer2 from "./componets/Page2/Footer/Footer2";
import Aboutme from "./componets/shared/aboutmepage/Aboutme";
import Servicespage from "./componets/shared/servicespage/Servicespage";
import Projectgridpage from "./componets/shared/projectspage/Projectgridpage";
import Projectmansorypage from "./componets/shared/projectspage/Projectmansorypage";
import Projectdetail from "./componets/shared/projectspage/Projectdetail";
import Blogdetail from "./componets/shared/blogpage/Blogdetail";
import Blogstandard from "./componets/shared/blogpage/Blogstandard";
import Page404 from "./componets/shared/404page/Page404";
import Contactpage from "./componets/shared/Contactpage/Contactpage";

import "./componets/shared/animation.scss";
import "./componets/shared/new.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar2 />
      <Home />
      <About2 />
      <Resume2 />
      <Services2 />
      <Skills2 />
      <Projects2 />
      <Awards />
      <Pricing />
      <Client2 />
      <Contact />
      <Blog2 />
      <Talk />
      <Footer2 />
      {/* <Aboutme /> */}
      {/* <Servicespage /> */}
      {/* <Projectgridpage /> */}
      {/* <Projectmansorypage /> */}
      {/* <Projectdetail /> */}
      {/* <Blogstandard /> */}
      {/* <Blogdetail /> */}
      {/* <Page404 /> */}
      {/* <Contactpage /> */}
    </>
  );
};

export default App;
