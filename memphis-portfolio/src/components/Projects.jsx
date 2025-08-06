import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Music Visualizer',
    description: 'A dynamic music visualizer that syncs animations to music beats using React and machine learning.',
    link: 'https://github.com/OliverDunnDev/mp3visualizer',
  },
  {
    title: 'Pizza Shop',
    description: 'A fully responsive React pizza ordering site with fun UI animations and state management.',
    link: 'https://oliverdunndev.github.io/B-Side-Newland/',
  },
  {
    title: 'Quantum Machine Learning',
    description: 'Research project exploring safe quantum ML algorithms with Python and Qiskit.',
    link: 'https://plennock.github.io/Honours-Stage-Project/',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, description, link }, idx) => (
          <a key={idx} href={link} className="project-card" target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
