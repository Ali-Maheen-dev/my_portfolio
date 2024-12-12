import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        I'm Maheen Ali, a passionate and innovative full-stack web developer with a strong command of HTML, CSS, JavaScript, jQuery, Bootstrap, React Bootstrap, Three.js, PHP, the MERN stack, and WordPress. With a proven track record of successfully executing multiple projects, I thrive on transforming ideas into reality through responsive and user-centric web solutions. My mission is to harness cutting-edge web development practices to create dynamic, efficient, and engaging digital experiences that leave a lasting impact. Let's build something extraordinary together!
        </p>
      </Container>
    </section>
  );
};

export default About;
