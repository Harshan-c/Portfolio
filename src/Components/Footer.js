import React from "react";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-bottom">

        {/* Copyright */}
        <p>
          © {new Date().getFullYear()} Harshan. All Rights Reserved.
        </p>


        {/* Built With */}
        <p>
          Built with React
        </p>


        {/* Back To Top */}
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;