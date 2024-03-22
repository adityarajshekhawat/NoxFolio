import React, { useState } from "react";
import Navbar2 from "../../Page2/Navbar/Navbar2";
import Footer from "../../footer/Footer";
import "./gridstyle.scss";
import Arrowbtn from "../../shared/arrow-move-btn/Arrowbtn";
import Project1 from "../../../assets/project1.jpg";
import Project2 from "../../../assets/project2.jpg";
import Project3 from "../../../assets/project3.jpg";
import Project4 from "../../../assets/project4.jpg";
import Project5 from "../../../assets/project4.jpg";
import Project6 from "../../../assets/project4.jpg";

const Projectgridpage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Project 1",
      name: "Mobile Application Design",
      image: Project1,
      category: "design",
    },
    {
      id: 2,
      title: "Project 2",
      name: "Website Makeup Design",
      image: Project2,
      category: "design",
    },
    {
      id: 3,
      title: "Project 3",
      name: "Brand Identity and Motion Design",
      image: Project3,
      category: "branding",
    },
    {
      id: 4,
      title: "Project 4",
      name: "Mobile Application Design",
      image: Project4,
      category: "development",
    },
    {
      id: 5,
      title: "Project 5",
      name: "Creative Graphic Design",
      image: Project5,
      category: "graphics",
    },
    {
      id: 6,
      title: "Project 6",
      name: "Design & Branding Mockup",
      image: Project6,
      category: "design",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="page-wrapper pgridpage">
      <Navbar2 />
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s">
              Project Grid View
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center fs-5 wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <a href="/" className="text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Project Grid View</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-lines">
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
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="gridcat w-100 mb-5 d-flex justify-content-center flex-wrap ">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`grid-categories responsive-grid me-5 ${
                selectedCategory === "all" ? "active" : ""
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => handleCategoryChange("design")}
              className={`grid-categories responsive-grid me-5 ${
                selectedCategory === "design" ? "active" : ""
              }`}
            >
              Design
            </button>
            <button
              onClick={() => handleCategoryChange("branding")}
              className={`grid-categories responsive-grid me-5 ${
                selectedCategory === "branding" ? "active" : ""
              }`}
            >
              Branding
            </button>
            <button
              onClick={() => handleCategoryChange("development")}
              className={`grid-categories responsive-grid me-5 ${
                selectedCategory === "development" ? "active" : ""
              }`}
            >
              Development
            </button>
            <button
              onClick={() => handleCategoryChange("graphics")}
              className={`grid-categories responsive-grid me-5 ${
                selectedCategory === "graphics" ? "active" : ""
              }`}
            >
              Graphics
            </button>
          </div>
          <div className="gridproject">
            <div className="row">
              {filteredProjects.map((project) => (
                <div key={project.id} className="col-lg-6 mb-4">
                  <div className="pboxs d-grid ">
                    <img src={project.image} alt={project.title} />
                    <h5 className="mt-4 ps-5"> {project.name}</h5>
                    <h1 className="mb-4 ps-5">{project.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="project-btn text-center wow fadeInUp delay-0-2s">
            <Arrowbtn text={"View More Projects"} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projectgridpage;
