import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Home;
