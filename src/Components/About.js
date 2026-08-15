import React from "react";
import {
  FiCode,
  FiCpu,
  FiLayers,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="section-heading">
          <h2>About Me</h2>

          <div className="heading-line">
            <span></span>
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">

          {/* Profile Image */}
          <div className="about-image-wrapper">
            <div className="image-glow"></div>

            <div className="about-image-border">
              <img
                src="/images/profile.jpeg"
                alt="Harshan Profile"
                className="about-image"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="about-text">
            <p>
              I am a passionate software developer with a strong
              interest in building innovative solutions that solve
              real-world problems.
            </p>

            <p>
              My journey involves exploring the fields of Artificial
              Intelligence, Machine Learning, and Full Stack Development.
            </p>

            <p>
              I love working with data, building intelligent models,
              and creating seamless web experiences using modern
              technologies.
            </p>

            <p>
              I believe in continuous learning and enjoy turning
              ideas into impactful digital products.
            </p>

            {/* About Button */}
            <a
              href="#skills"
              className="about-button"
            >
              Know More About Me
              <FiArrowRight />
            </a>
          </div>

          {/* Feature Cards */}
          <div className="about-features">

            {/* Developer */}
            <div className="about-feature-card">
              <div className="feature-icon">
                <FiCode />
              </div>

              <div>
                <h3>Developer</h3>

                <p>
                  Building efficient, scalable and clean code.
                </p>
              </div>
            </div>

            {/* AI / ML */}
            <div className="about-feature-card">
              <div className="feature-icon">
                <FiCpu />
              </div>

              <div>
                <h3>AI/ML Enthusiast</h3>

                <p>
                  Exploring intelligent systems and machine
                  learning models.
                </p>
              </div>
            </div>

            {/* Full Stack */}
            <div className="about-feature-card">
              <div className="feature-icon">
                <FiLayers />
              </div>

              <div>
                <h3>Full Stack Developer</h3>

                <p>
                  Working with modern technologies from frontend
                  to backend.
                </p>
              </div>
            </div>

            {/* Problem Solver */}
            <div className="about-feature-card">
              <div className="feature-icon">
                <FiZap />
              </div>

              <div>
                <h3>Problem Solver</h3>

                <p>
                  Analytical thinker with a passion for solving
                  real-world problems.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;