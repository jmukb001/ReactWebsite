import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Background from './Background';
import Hero from './Hero';
import About from './About';
import EducationAndSkills from './EducationAndSkills';
import Projects from './Projects';
import Extracurriculars from './Extracurriculars';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Background /> {}
      <Navigation />
      <Hero />
      <About />
      <EducationAndSkills />
      <Projects />
      <Extracurriculars />
      <Contact />
    </div>
  );
}

export default App;
