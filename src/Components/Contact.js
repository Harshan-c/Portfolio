import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-container">

        {/* Section Heading */}

        <div className="section-heading">

          <h2>Let's Connect</h2>

          <div className="heading-line">
            <span></span>
          </div>

          <p>
            Have a project idea, opportunity or just want
            to say hello? I'd love to hear from you.
          </p>

        </div>


        {/* Contact Content */}

        <div className="contact-content">

          {/* Left Side */}

          <div className="contact-info">

            <span className="contact-label">
              GET IN TOUCH
            </span>

            <h3>
              Let's build something
              <span> amazing </span>
              together.
            </h3>

            <p>
              I'm always interested in hearing about
              new projects, creative ideas and opportunities
              to work with people who are passionate about
              technology.
            </p>


            {/* Email */}

            <a
              href="mailto:yourmail@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <span>Email</span>
                <strong>
                  charshan30@gmail.com
                </strong>
              </div>
            </a>


            {/* Phone */}

            <a
              href="tel:+910000000000"
              className="contact-item"
            >
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  +91 9019427571
                </strong>
              </div>
            </a>


            {/* Location */}

            <div className="contact-item">

              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <span>Location</span>
                <strong>
                  India
                </strong>
              </div>

            </div>


            {/* Social */}

            <div className="contact-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

            </div>

          </div>


          {/* Right Side - Form */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* Subject */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* Message */}

              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message

                <FiSend />

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;