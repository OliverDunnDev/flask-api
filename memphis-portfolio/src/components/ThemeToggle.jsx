import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
