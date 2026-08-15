import React from "react";
import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiC,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

function Skills() {
  const programmingSkills = [
    {
      name: "Python",
      level: "90%",
      icon: <FaPython />,
    },
    {
      name: "C",
      level: "80%",
      icon: <SiC />,
    },
    {
      name: "Java",
      level: "75%",
      icon: <FaJava />,
    },
    {
      name: "JavaScript",
      level: "80%",
      icon: <FaJsSquare />,
    },
  ];

  const frontendSkills = [
    {
      name: "React",
      level: "85%",
      icon: <FaReact />,
    },
    {
      name: "HTML",
      level: "90%",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      level: "85%",
      icon: <FaCss3Alt />,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      level: "80%",
      icon: <FaNodeJs />,
    },
    {
      name: "Express.js",
      level: "75%",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      level: "75%",
      icon: <SiMongodb />,
    },
    {
      name: "MySQL",
      level: "75%",
      icon: <SiMysql />,
    },
  ];

  const dataSkills = [
    {
      name: "Pandas",
      level: "85%",
      icon: <SiPandas />,
    },
    {
      name: "NumPy",
      level: "85%",
      icon: <SiNumpy />,
    },
    {
      name: "Machine Learning",
      level: "80%",
      icon: <SiScikitlearn />,
    },
    {
      name: "Git",
      level: "80%",
      icon: <FaGitAlt />,
    },
  ];

  const renderSkills = (skills) => {
    return skills.map((skill) => (
      <div className="skill-item" key={skill.name}>

        <div className="skill-info">

          <div className="skill-name">

            <span className="skill-icon">
              {skill.icon}
            </span>

            <span>
              {skill.name}
            </span>

          </div>

          <span className="skill-percentage">
            {skill.level}
          </span>

        </div>

        <div className="skill-bar">

          <div
            className="skill-progress"
            style={{
              width: skill.level,
            }}
          ></div>

        </div>

      </div>
    ));
  };

  return (
    <section
      className="skills-section"
      id="skills"
    >

      <div className="skills-container">

        {/* Section Heading */}

        <div className="section-heading">

          <h2>My Skills</h2>

          <div className="heading-line">
            <span></span>
          </div>

          <p>
            Technologies and tools I use to build
            modern, scalable and intelligent applications.
          </p>

        </div>


        {/* Skills Grid */}

        <div className="skills-grid">

          {/* Programming */}

          <div className="skill-category">

            <div className="skill-category-header">

              <div className="category-number">
                01
              </div>

              <div>
                <h3>Programming</h3>

                <p>
                  Core programming languages
                </p>
              </div>

            </div>

            <div className="skill-list">
              {renderSkills(programmingSkills)}
            </div>

          </div>


          {/* Frontend */}

          <div className="skill-category">

            <div className="skill-category-header">

              <div className="category-number">
                02
              </div>

              <div>
                <h3>Frontend</h3>

                <p>
                  Building modern user interfaces
                </p>
              </div>

            </div>

            <div className="skill-list">
              {renderSkills(frontendSkills)}
            </div>

          </div>


          {/* Backend */}

          <div className="skill-category">

            <div className="skill-category-header">

              <div className="category-number">
                03
              </div>

              <div>
                <h3>Backend & Database</h3>

                <p>
                  Server-side and database technologies
                </p>
              </div>

            </div>

            <div className="skill-list">
              {renderSkills(backendSkills)}
            </div>

          </div>


          {/* Data & AI */}

          <div className="skill-category">

            <div className="skill-category-header">

              <div className="category-number">
                04
              </div>

              <div>
                <h3>Data & AI</h3>

                <p>
                  Data analysis and intelligent systems
                </p>
              </div>

            </div>

            <div className="skill-list">
              {renderSkills(dataSkills)}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;