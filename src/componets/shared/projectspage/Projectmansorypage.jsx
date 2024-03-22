import React, { useState } from "react";
import Navigation from "../../Navbar/Navbar2";
import "./ProjectMasonry.scss"; // Import the CSS file for Masonry styles

import man1 from "../../../assets/project-masonry1.jpg";
import man2 from "../../../assets/project-masonry2.jpg";
import man3 from "../../../assets/project-masonry3.jpg";
import man4 from "../../../assets/project-masonry4.jpg";
import man5 from "../../../assets/project-masonry5.jpg";
import man6 from "../../../assets/project-masonry6.jpg";
import man7 from "../../../assets/project-masonry7.jpg";
import man8 from "../../../assets/project-masonry8.jpg";
import man9 from "../../../assets/project-masonry9.jpg";

const Projectmansorypage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { image: man1, title: "Project 1", category: "Branding" },
    { image: man2, title: "Project 2", category: "Design" },
    { image: man3, title: "Project 3", category: "Marketing" },
    { image: man4, title: "Project 4", category: "Development" },
    { image: man5, title: "Project 5", category: "Mobile Apps" },
    { image: man6, title: "Project 6", category: "Graphics" },
    { image: man7, title: "Project 7", category: "Branding" },
    { image: man8, title: "Project 8", category: "Design" },
    { image: man9, title: "Project 9", category: "Marketing" },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  return (
    <>
    
      <Navigation />

      <section className="projects-masonry rel z-1">
        <div className="container projects-masonry-area">
          <ul className="project-filter filter-btns-one justify-content-center pb-35">
            <li
              className={`c-pointer ${selectedCategory === "All" && "current"}`}
              onClick={() => setSelectedCategory("All")}
            >
              Show All
            </li>
            <li
              className={`c-pointer ${
                selectedCategory === "Design" && "current"
              }`}
              onClick={() => setSelectedCategory("Design")}
            >
              Design
            </li>
            <li
              className={`c-pointer ${
                selectedCategory === "Branding" && "current"
              }`}
              onClick={() => setSelectedCategory("Branding")}
            >
              Branding
            </li>
            {/* Add other category filter items */}
          </ul>
          <div className="row project-masonry-active">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`col-xl-4 col-md-6 item ${project.category.toLowerCase()}`}
              >
                <div className="project-item style-three">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <a className="project-btn" href="/project-details">
                      <i className="far fa-arrow-right"></i>
                    </a>
                    <h4>
                      <a href="project-details">{project.title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="project-btn mt-25 text-center">
            <a className="theme-btn" href="/projects">
              View More Projects <i className="far fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
    <div className="page-wrapper">
    </div>
  </>
  );
};

export default Projectmansorypage;
