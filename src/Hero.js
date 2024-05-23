import React from 'react';
import './Hero.css';

const Hero = () => {

  return (
    <div id="hero">
      <div className="hero">
        <div className="hero-content">
          <img src="./MyPhoto.png" alt="Jad Mukbel" className="hero-photo" />
          <h1 className="hero-name">Hello, I'm Jad Mukbel</h1>
          <p className="hero-description">
            Current Computer Science Undergraduate at the University of California, Riverside.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jad-mukbel" target="_blank" rel="noopener noreferrer">
              <img src="./LinkedIn.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/jmukb001" target="_blank" rel="noopener noreferrer">
              <img src="./github.png" alt="Github" className="social-icon" />
            </a>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
