import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../css/Header.css';
import logo from '../assets/Logo.png';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#hero" className="logo-text">
          <img src={logo} alt="MahiMakesWebs Logo" className="Logo" />
          MahiMakesWebs
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="hero"
              smooth={true}
              duration={1500}
              offset={-70} 
              className="nav-links nav-text"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1500}
              offset={-70}
              className="nav-links nav-text"
            >
              About
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1500}
              offset={-70}
              className="nav-links nav-text"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              offset={-70}
              className="nav-text"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
