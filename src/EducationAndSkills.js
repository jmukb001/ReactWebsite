import React from 'react';
import './EducationAndSkills.css';

const EducationAndSkills = () => {
  return (
    <section id="education-and-skills" className="education-and-skills-section">
      <div className="education">
        <h2 className="section-title">Education</h2>
        <img src="./UCRLOGO.jpeg" alt="UCR Logo" className="education-logo" />
        <div className="education-details">
          <p className="section-content university">University of California, Riverside</p>
          <p className="section-content program">Bachelor of Science <br></br><br></br> Computer Science with Business Applications</p>
          <p className="section-content duration">2020 - 2024</p>
          <p className="section-content grade">Grade: Senior</p>
        </div>
      </div>
      <div className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skill-category">
        <h3>Front-End Languages</h3>
        <p>HTML/CSS, React, JavaScript</p>
      </div>
      <div className="skill-category">
        <h3>Back-End Languages</h3>
        <p>C++, Python, Java, Scala</p>
      </div>
      <div className="skill-category">
        <h3>Software Development</h3>
        <p>
          Object-Oriented Design<br />
          Data Structures<br />
          Version Control (Git)<br />
          Agile Methodologies
        </p>
      </div>
      <div className="skill-category">
        <h3>Data Analysis & Big Data</h3>
        <p>
          Big Data Management<br />
          Data Analysis Packages
        </p>
      </div>
    </div>
    </section>
  );
};

export default EducationAndSkills;


