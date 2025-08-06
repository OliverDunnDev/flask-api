import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="memphis-bg">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;


