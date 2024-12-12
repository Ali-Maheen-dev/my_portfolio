import React from "react";
import { Link } from "react-scroll"; 
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} MahiMakesWebs. All rights reserved.</p>
        <div>
          <Link
            to="about" 
            smooth={true} 
            duration={2000} 
            className="footer-link"
          >
            About
          </Link>
          {" | "}
          <Link
            to="projects"
            smooth={true}
            duration={2000}
            className="footer-link"
          >
            Projects
          </Link>
          {" | "}
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="footer-link"
          >
            Contact
          </Link>
        </div>
        <div className="gmail-contact">
          <p>Contact me at: <a href="mailto:maheenali.dev@gmail.com">maheenali.dev@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
