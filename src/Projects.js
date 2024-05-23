import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-wrapper">
          <h2 className="projects-title">Projects</h2>
          <div className="project">
            <img src="/wildfires.png" alt="California Wildfire Map" className="project-photo" />
            <div className="project-details">
              <h3 className="project-title">Wildfire Analysis</h3>
              <div className="project-metadata">
                <p className="project-language">Scala</p>
                <p className="project-date">May 2024</p>
              </div>
              <p className="project-description">Developed a machine learning model to predict fire intensity based on analyzed
spatio-temporal features of a specified fire. Trained and tested on a wildfire dataset in California.</p>
            </div>
          </div>
        
          <hr className="project-divider" />
          <div className="project">
            <img src="./imposterSyndrome.png" alt="Imposter Syndrome Stockphoto" className="project-photo" />
            <div className="project-details">
              <h3 className="project-title">Analysis of Academic Imposter Syndrome</h3>
              <div className="project-metadata">
                <p className="project-language">Python</p>
                <p className="project-date">December 2023</p>
              </div>
              <p className="project-description">Utilizing data analysis methods and techniques,
collected and analyzed real-student data to assess correlations between student demographics and
experience with perception of imposter syndrome.</p>
            </div>
          </div>

          <hr className="project-divider" />
          <div className="project">
            <img src="/frankie.png" alt="Frankie-Discord Bot" className="project-photo" />
            <div className="project-details">
              <h3 className="project-title">Tamabotchi</h3>
              <div className="project-metadata">
                <p className="project-language">Python</p>
                <p className="project-date"> May 2023</p>
              </div>
              <p className="project-description">A bot embedded within Discord utilizing its API. A shared virtual pet among a server in
which members contribute to nurturing the personalized pet through the bot’s extensive features.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
