import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Hi, I'm Oliver Dunn</h1>
      <p className="hero-subtitle">
        Web Developer & Designer — Crafting modern, bold, and interactive experiences.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn">See My Work</a>
      </div>
      <div className="memphis-shapes">
        <div className="shape circle"></div>
        <div className="shape zigzag"></div>
        <div className="shape triangle"></div>
        <div className="shape squiggle"></div>
      </div>
    </div>
  );
};

export default HeroSection;
