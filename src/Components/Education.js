import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiMapPin,
  FiAward,
} from "react-icons/fi";

function Education() {
  const educationData = [
  {
    year: "2025 - Present",
    degree: "Master of Computer Applications",
    institution: "PES University",
    location: "RR Campus, Bangalore",
    // score: "",
    // description:
    //   "Currently pursuing my MCA with a focus on software development, Artificial Intelligence, Machine Learning, data analytics and modern web technologies.",
    icon: <FiBookOpen />,
  },

  {
    year: "2022 - 2025",
    degree: "Bachelor's Degree",
    institution: "Seshadripuram College",
    location: "Bangalore",
    score:"CGPA: 8.21",
    // description:
    //   "Built a strong foundation in programming, databases, software development and computer science fundamentals while working on academic and personal projects.",
    icon: <FiAward />,
  },

  {
    year: "2020-2022",
    degree: "Pre-University Course (PUC)",
    institution: "MES Kishora Kendra PU College",
    location: "Bangalore",
    score: "Percentage: 76 %",
    // description:
    //   "Completed my pre-university education with a strong academic foundation.",
    icon: <FiBookOpen />,
  },

  {
    year: "2020",
    degree: "SSLC / 10th Standard",
    institution: "Pavithra Vidyanikethana English High School",
    location: "Bangalore",
    score: "Percentage: 70 %",
    // description:
    //   "Completed my secondary education with a strong academic foundation.",
    icon: <FiAward />,
  },
];

  return (
    <section
      className="education-section"
      id="education"
    >
      <div className="education-container">

        {/* Section Heading */}

        <div className="section-heading">

          <h2>Education</h2>

          <div className="heading-line">
            <span></span>
          </div>

          <p>
            My academic journey and the foundation
            behind my technical skills.
          </p>

        </div>


        {/* Education Timeline */}

        <div className="education-timeline">

          <div className="timeline-line"></div>

          {educationData.map((education, index) => (
            <div
              className={`education-item ${
                index % 2 === 0
                  ? "education-left"
                  : "education-right"
              }`}
              key={education.degree}
            >

              {/* Timeline Point */}

              <div className="timeline-point">
                <span>
                  {education.icon}
                </span>
              </div>


              {/* Education Card */}

              <div className="education-card">

                <div className="education-year">
                  <FiCalendar />
                  {education.year}
                </div>

                <h3>
                  {education.degree}
                </h3>

                <h4>
                  {education.institution}
                </h4>

                  {education.score && (
                <div className="education-score">
                  {education.score}
                </div>
                )}

                <div className="education-location">
                  <FiMapPin />
                  {education.location}
                </div>

                <p>
                  {education.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;