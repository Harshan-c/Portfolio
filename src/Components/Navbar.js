import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // NAVIGATION

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);

           
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


    // DETECT SECTION WHILE SCROLLING

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];

      const scrollPosition = window.scrollY;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop =
            section.offsetTop - 150;

          if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    handleScroll();


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="navbar-logo">
        <div className="logo-shape"></div>
      </div>


      {/* NAVIGATION */}

      <div className="navbar-menu">

        <button
          className={`nav-link ${
            activeSection === "home"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("home")
          }
        >
          Home
        </button>


        <button
          className={`nav-link ${
            activeSection === "about"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("about")
          }
        >
          About
        </button>


        <button
          className={`nav-link ${
            activeSection === "skills"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("skills")
          }
        >
          Skills
        </button>


        <button
          className={`nav-link ${
            activeSection === "projects"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("projects")
          }
        >
          Projects
        </button>


        <button
          className={`nav-link ${
            activeSection === "education"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("education")
          }
        >
          Education
        </button>


        <button
          className={`nav-link ${
            activeSection === "contact"
              ? "active"
              : ""
          }`}
          onClick={() =>
            handleNavigation("contact")
          }
        >
          Contact
        </button>

      </div>


      {/* RIGHT SIDE */}

      <div className="navbar-actions">

        {/* GitHub */}

        <a
          href="https://github.com/Harshan-c"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>


        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/harshan-c-15589b31a/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>


        {/* Download CV */}

        <a
          href="/Harshan-CV.pdf"
          className="cv-button"
          download
        >
          Download CV

          <FiDownload />
        </a>

      </div>

    </nav>
  );
}

export default Navbar;