import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I'm Oliver Dunn, a passionate web developer and designer who loves crafting
        modern, interactive, and visually striking websites.
      </p>
      <p>
        With a strong foundation in React and Vite, and a flair for abstract Memphis aesthetics,
        I create engaging user experiences that are responsive and full of personality.
      </p>
      <div className="about-shapes">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
      </div>
    </div>
  );
};

export default About;
