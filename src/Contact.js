import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div id="contact"></div>
      <a href="https:/www.linkedin.com/in/jad-mukbel" target="_blank" rel="noopener noreferrer">
        <img className="small-image" src="linkedin.png" alt="LinkedIn Icon" />
      </a>
      
      <a href="https://github.com/jmukb001" target="_blank" rel="noopener noreferrer">
        <img className="small-image" src="github.png" alt="GitHub Icon" />
      </a>

      <a href="mailto:jadmukbel@gmail.com" target="_blank" rel="noopener noreferrer">
        <img className="small-image email-image" src="emailLog3.png" alt="Email Icon" />
      </a>
    </div>
  );
};

export default Contact;
