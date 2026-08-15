import React from "react";
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
} from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "OBSERA Health",
      category: "AI / Machine Learning",

      description:
        "An AI-powered maternal health risk prediction system that analyzes health indicators and provides explainable risk insights using machine learning.",

      image: "/images/project1.png",

      technologies: [
        "Python",
        "Machine Learning",
        "Random Forest",
        "Streamlit",
        "SHAP",
      ],

      github: "https://github.com/",
      live: "#",
    },

    {
      title: "BookLoop",
      category: "MERN Stack",

      description:
        "A peer-to-peer book exchange platform that allows users to discover, exchange and manage books through a modern web application.",

      image: "/images/project2.png",

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],

      github: "https://github.com/",
      live: "#",
    },

    {
      title: "Data Analytics Project",
      category: "Data Analytics",

      description:
        "A data analytics application designed to transform raw datasets into meaningful insights through data cleaning, analysis and interactive visualizations.",

      image: "/images/project3.png",

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Data Analytics",
        "Visualization",
      ],

      github: "https://github.com/",
      live: "#",
    },
  ];

  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="projects-container">

        {/* Section Heading */}

        <div className="section-heading">

          <h2>My Projects</h2>

          <div className="heading-line">
            <span></span>
          </div>

          <p>
            Some of the projects I have built while
            exploring software development, AI/ML and
            data-driven technologies.
          </p>

        </div>


        {/* Projects Grid */}

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.title}
            >

              {/* Project Image */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-number">
                  0{index + 1}
                </div>

              </div>


              {/* Project Content */}

              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                {/* Technologies */}

                <div className="project-technologies">

                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="technology-tag"
                      >
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {/* Project Links */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <FiGithub />
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-live"
                  >
                    Live Demo
                    <FiExternalLink />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* View More */}

        <div className="projects-more">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="projects-more-button"
          >
            View More Projects

            <FiArrowRight />

          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;