import React from 'react';
import './Navigation.css';

const Navigation = () => {
  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -80; 
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#hero" onClick={(e) => handleClick(e, 'hero')}>Hero</a></li>
          <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
          <li><a href="#education-and-skills" onClick={(e) => handleClick(e, 'education-and-skills')}>Education & Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
          <li><a href="#extracurriculars" onClick={(e) => handleClick(e, 'extracurriculars')}>Extracurriculars</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
