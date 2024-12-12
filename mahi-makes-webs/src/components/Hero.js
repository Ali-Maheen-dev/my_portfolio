import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll'; 
import '../css/Hero.css';  
import Poster from '../assets/Poster.png';  

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={6} md={12}>
            <h1 className="hero-title">Hello</h1>
            <h1 className="hero-title">It's <span>Maheen Ali</span></h1>
            <p className="hero-description">
              A passionate web developer dedicated to building responsive
               and engaging websites. I specialize in creating user-friendly experiences using the latest web technologies.
            </p>
            <Link
              to="projects" 
              smooth={true} 
              duration={1500} 
            >
              <Button variant="primary" className="hero-btn">
                See My Work
              </Button>
            </Link>
          </Col>
          <Col lg={6} md={12} className="hero-img-col">
            <img
              src={Poster} 
              alt="MahiMakesWebs"
              className="hero-img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
