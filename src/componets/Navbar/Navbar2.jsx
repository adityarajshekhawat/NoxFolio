import React, { useState, useEffect } from "react";
import Navimg from "../../assets/nav-logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiPinterestFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./navigation.scss";
// import Btnimg from '../assests-1/btnimg.png'

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the scroll position exceeds a threshold (e.g., 100)
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`nav-bar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-img">
          <img src={Navimg} alt="navlogo" id="nav-logo" />
        </div>
        <Navbar collapseOnSelect expand="lg" className="custom-navbar">
          <Container className="text-center">
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Home" id="collapsible-nav-dropdown">
                  <NavDropdown
                    title="Multipage"
                    id="collapsible-nav-dropdown"
                    style={{ backgroundColor: "grey", marginTop: "2vh" }}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Home1
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Home2
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Onepage" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Home 1
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Home 2
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>
                <Nav.Link href="#features" id="nav-link">
                  About
                </Nav.Link>
                <Nav.Link href="#pricing" id="nav-link">
                  Services
                </Nav.Link>
                <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Project Grid
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Project Masonry
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Project Details
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Blog" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Blog Standard
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Blog Details
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Error Page
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#features" id="nav-link">
                  Contact
                </Nav.Link>
              </Nav>
              {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="menu-btn" onClick={handleMenuToggle}>
          <RiMenu2Line size={25} color="black" />
        </div>
      </div>

      <div
        id="nav-contact-menu"
        className={isMenuOpen ? "nav-entry" : "nav-exit"}
      >
        <div id="nav-contact-left"></div>
        <div id="nav-contact-right">
          <form action="">
            <div id="nav-contact-closeimg" onClick={handleMenuToggle}>
              {/* <a href="#"> */}
              <IoCloseSharp size={30} color="white" />
              {/* </a> */}
            </div>
            <h1>Get Appointment</h1>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email Address" name="email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Submit Now</button>
            <div id="nav-contact-socialicons">
              <div className="nav-socialicons">
                <RiTwitterFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiFacebookBoxFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiInstagramFill color="grey" />
              </div>
              <div className="nav-socialicons">
                <RiPinterestFill color="grey" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navigation;
