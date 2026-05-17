import React from 'react';
import './Hero.css';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <p className="hero-greeting text-gradient">Hello, I'm</p>
          <h1 className="hero-title">Chandrashekhara KM</h1>
          <h2 className="hero-subtitle">Full-Stack Developer & MCA Student.</h2>
          <p className="hero-description">
            Building secure, scalable backend systems and high-concurrency applications. 
            Passionate about transforming complex problems into elegant, efficient solutions.
          </p>
          <div className="hero-cta delay-200 animate-fade-in">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={20} />
            </a>
            <a href="https://drive.google.com/file/d/1dJ0GqftzX481TIktXE9vzJDCFZtRVuGn/view?usp=drive_link" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download Resume <Download size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
