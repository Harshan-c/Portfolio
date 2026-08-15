import React from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiPandas, SiNumpy, SiCplusplus } from "react-icons/si";
import { FiArrowRight, FiMail, FiCode, FiHeart } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Decorative Technology Icons */}
      <div className="hero-tech-icons">

        <FaPython className="floating-tech python-icon" />

        <FaJava className="floating-tech java-icon" />

        <FaReact className="floating-tech react-icon" />

        <FaNodeJs className="floating-tech node-icon" />

        <FaJsSquare className="floating-tech js-icon" />

        <FaGitAlt className="floating-tech git-icon" />

        <SiMongodb className="floating-tech mongo-icon" />

        <SiPandas className="floating-tech pandas-icon" />

        <SiNumpy className="floating-tech numpy-icon" />

        <SiCplusplus className="floating-tech cpp-icon" />

      </div>


      {/* Background decorative elements */}
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-grid"></div>


      {/* Main Hero Content */}
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

          <div className="hero-label">
            <span className="label-dot"></span>
            HELLO, I'M
          </div>


          <h1>
            Harshan.C
          </h1>


          <h2>
            Software Developer
            <span> | </span>
            AI/ML Enthusiast
            <span> | </span>
            Full Stack Developer
          </h2>


          <p className="hero-description">
            Passionate about building intelligent, scalable and
            user-focused applications using modern technologies.
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Projects
              <FiArrowRight />
            </a>


            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
              <FiMail />
            </a>

          </div>


          {/* Statistics */}
          <div className="hero-stats">

            <div className="stat-item">
              <div className="stat-icon">
                <FiCode />
              </div>

              <div>
                <h3>04+</h3>
                <p>Projects Completed</p>
              </div>
            </div>


            <div className="stat-item">
              <div className="stat-icon">
                <FiCode />
              </div>

              <div>
                <h3>4+</h3>
                <p>Years Learning</p>
              </div>
            </div>


            <div className="stat-item">
              <div className="stat-icon">
                <FiCode />
              </div>

              <div>
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>


            <div className="stat-item">
              <div className="stat-icon">
                <FiHeart />
              </div>

              <div>
                <h3>100%</h3>
                <p>Passion</p>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-visual">

          <div className="developer-glow"></div>

          <img
            src="/images/developer.png"
            alt="Developer working on computer"
            className="developer-image"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;