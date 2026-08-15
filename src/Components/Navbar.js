import React, { useEffect, useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiMenu,
  FiX,
} from "react-icons/fi";

const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "education",
    "contact",
  ];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  //  NAVIGATION CLICK

  const handleNavClick = (section) => {
    setMenuOpen(false);

    const element = document.getElementById(section);

    if (element) {
      const navbarHeight = 90;

      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });

      setActiveSection(section);
    }
  };

  // ACTIVE SECTION WHILE SCROLLING

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((section) => {
        const element =
          document.getElementById(section);

        if (element) {
          const sectionTop =
            element.offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = section;
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

      <div className="navbar-container">

        {/* LOGO */}

        <button
          className="navbar-logo"
          onClick={() =>
            handleNavClick("home")
          }
          aria-label="Go to home"
        >
          <span>HS</span>
        </button>


        {/* DESKTOP NAVIGATION */}

        <div className="navbar-menu">

          {sections.map((section) => (
            <button
              key={section}
              className={`nav-link ${
                activeSection === section
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleNavClick(section)
              }
            >
              {section === "home" && "Home"}
              {section === "about" && "About"}
              {section === "skills" && "Skills"}
              {section === "projects" && "Projects"}
              {section === "education" && "Education"}
              {section === "contact" && "Contact"}
            </button>
          ))}

        </div>


        {/* DESKTOP RIGHT SIDE */}

        <div className="navbar-actions">

          <a
            href="https://github.com/Harshan-c"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/harshan-c-15589b31a/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>


          <a
            href="/Harshan-CV.pdf"
            download
            className="cv-button"
          >
            <span>Download CV</span>
            <FiDownload />
          </a>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >

        {sections.map((section) => (
          <button
            key={section}
            className={`mobile-nav-link ${
              activeSection === section
                ? "mobile-active"
                : ""
            }`}
            onClick={() =>
              handleNavClick(section)
            }
          >
            {section === "home" && "Home"}
            {section === "about" && "About"}
            {section === "skills" && "Skills"}
            {section === "projects" && "Projects"}
            {section === "education" && "Education"}
            {section === "contact" && "Contact"}
          </button>
        ))}


        {/* Mobile CV */}

        <a
          href="/Harshan-CV.pdf"
          download
          className="mobile-download-cv"
          onClick={() =>
            setMenuOpen(false)
          }
        >
          <FiDownload />
          Download CV
        </a>

      </div>

    </nav>
  );
}

export default Navbar;