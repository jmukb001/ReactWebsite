import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
        Currently finishing up my final year in Computer Science at UC Riverside.
        I plan to use my skills to enter a field where I can better the lives of others.

        <br></br>
        <br></br>
        
        I'm heavily interested in working with the software and firmware of medical devices. 
        I believe that by applying my expertise in this area, 
        I can contribute to developing innovative solutions that enhance healthcare outcomes and improve the quality of life for patients worldwide.
       

        </p>
        <a href="CS110RESUME.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
          CV
        </a>
      </div>
    </section>
  );
};

export default About;
