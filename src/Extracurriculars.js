import React from 'react';
import './Extracurriculars.css';

const Extracurriculars = () => {
  return (
    <section id="extracurriculars" className="extracurriculars-section">
      <div className="extracurriculars-container">
        <div className="extracurriculars-wrapper">
          <h2 className="extracurriculars-title">Extracurriculars</h2>
          <div className="extracurricular">
            <img src="./MSAWLOGO.png" alt="Volunteer 1" className="extracurricular-photo" />
            <div className="extracurricular-details">
              <h3 className="extracurricular-title">Southern California Director, Board of Directors</h3>
              <div className="extracurricular-metadata">
                <p className="extracurricular-organization">MSA West</p>
                <p className="extracurricular-date">May 2023 - Ongoing</p>
              </div>
              <p className="extracurricular-description">Responsible for carrying out the organizational goal of supporting Muslim students across the West Coast. Primarily tasked with overlooking and aiding Muslim University Institutions in the Southern California region.</p>
            </div>
          </div>
        
          <hr className="extracurriculars-divider" />
          <div className="extracurricular">
            <img src="./CWLOGO.png" alt="Volunteer 1" className="extracurricular-photo" />
            <div className="extracurricular-details">
              <h3 className="extracurricular-title">California Ambassador</h3>
              <div className="extracurricular-metadata">
                <p className="extracurricular-organization">Charity Week</p>
                <p className="extracurricular-date">February 2023 - Ongoing</p>
              </div>
              <p className="extracurricular-description">Recruited and supported multiple organizations across California about Charity Week's mission to raise funds for needy children and orphans in developing countries, contributing to raising $2.4 million for relief in 19 countries.</p>
            </div>
          </div>

          <hr className="extracurriculars-divider" />
          <div className="extracurricular">
            <img src="./ISCNLOGO.png" alt="Volunteer 2" className="extracurricular-photo" />
            <div className="extracurricular-details">
              <h3 className="extracurricular-title">Youth Director</h3>
              <div className="extracurricular-metadata">
                <p className="extracurricular-organization">Islamic Society of Corona-Norco</p>
                <p className="extracurricular-date">June 2022 - Ongoing</p>
              </div>
              <p className="extracurricular-description">Lead in designing engaging educational and spiritual programs for local youth. Tasked with providing tailored professional development support to enhance skills and career growth. Developed essential project management skills alongside a professional staff.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Extracurriculars;
