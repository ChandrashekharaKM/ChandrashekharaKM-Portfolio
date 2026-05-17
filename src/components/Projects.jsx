import React from 'react';
import './Projects.css';
import { ExternalLink, Shield, MapPin, BarChart2, TrendingUp } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projectData = [
    {
      title: 'NeighborCare',
      description: 'A real-time emergency response network using React Native and Socket.io with geospatial tracking to connect users in critical situations.',
      tech: ['React Native', 'Socket.io', 'Node.js', 'Geospatial API'],
      icon: <MapPin size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'AnonDesk',
      description: 'A secure anonymous feedback platform featuring SHA-256 encryption and RESTful APIs to ensure absolute data privacy and integrity.',
      tech: ['Java', 'Spring Boot', 'SHA-256', 'REST APIs'],
      icon: <Shield size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'SentiMint AI',
      description: 'A real-time sentiment analysis dashboard built with FastAPI and Hugging Face transformer models for processing high-volume text streams.',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'React'],
      icon: <BarChart2 size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'AgriPriceAI',
      description: 'A robust market forecasting system using Scikit-learn to analyze agricultural data and accurately predict vegetable prices over time.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      icon: <TrendingUp size={32} />,
      links: { github: '#', live: '#' }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.links.github} className="project-link" aria-label="GitHub Repository">
                  <GithubIcon size={20} />
                </a>
                <a href={project.links.live} className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
