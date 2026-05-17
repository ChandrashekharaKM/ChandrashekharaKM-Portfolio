import React from 'react';
import './Projects.css';
import { ExternalLink, Shield, MapPin, BarChart2, TrendingUp, Database, Code, Share2 } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projectData = [
    {
      title: 'NeighborCare',
      description: 'Real-time emergency response network using React Native and Socket.io with geospatial mapping. Deployed Haversine proximity matching and low-latency Socket.io channels to connect victims with nearby responders.',
      tech: ['React Native', 'Node.js', 'Socket.io', 'Express'],
      icon: <MapPin size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/NeigborCare', live: '#' }
    },
    {
      title: 'AnonDesk',
      description: 'Secure anonymous feedback platform with SHA-256 identity and message protection. Optimized MySQL tables by 40% through normalization and custom indexing, and built a stateless REST layer for high-volume payload handling.',
      tech: ['Java', 'MySQL', 'Spring Boot', 'SHA-256'],
      icon: <Shield size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/AnonDesk', live: '#' }
    },
    {
      title: 'SentiMint AI',
      description: 'AI sentiment dashboard using FastAPI microservices to parse streaming text. Integrated Hugging Face transformer layers for semantic scoring and asynchronous execution for low-latency emotion analytics.',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'Transformers'],
      icon: <BarChart2 size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/SentiMint', live: '#' }
    },
    {
      title: 'Water Quality Analysis',
      description: 'Water safety prediction pipeline using Scikit-learn classification models. Built data processing workflows and real-time assessment logic to reach 87% accuracy on safety evaluation.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      icon: <TrendingUp size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/WaterQualityAnalysis', live: '#' }
    },
    {
      title: 'NoteZone',
      description: 'Java code compilation platform with secure sandbox runtime handlers. Architected a multi-threaded request pool to safely isolate concurrent code execution and dynamic compilation tasks.',
      tech: ['Java', 'Spring Boot', 'Java Compiler API'],
      icon: <Code size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/NoteZone', live: '#' }
    },
    {
      title: 'AgriPriceAI',
      description: 'Agricultural price forecasting system using Scikit-learn models. Designed predictive workflows to analyze seasonal data and deliver actionable market signals.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      icon: <Database size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/AgriPriceAI', live: '#' }
    },
    {
      title: 'Medilink HMS',
      description: 'Role-based Spring Boot hospital management system for patient registration, ward management, lab tests, equipment tracking, and billing using H2 in-memory database.',
      tech: ['Java 17', 'Spring Boot', 'Thymeleaf', 'H2 Database'],
      icon: <Database size={32} />,
      links: { github: 'https://github.com/ChandrashekharaKM/PatientBillingSystem', live: '#' }
    }
  ];

  const handleShare = async (project) => {
    const shareData = {
      title: project.title,
      text: `Check out ${project.title} on GitHub:`,
      url: project.links.github
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Share action canceled or failed:', error);
      }
    } else {
      window.prompt('Copy and share this project link:', project.links.github);
    }
  };

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
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.links.github} className="project-link" aria-label="GitHub Repository" target="_blank" rel="noopener noreferrer">
                  <GithubIcon size={20} />
                </a>
                {project.links.live && project.links.live !== '#' && (
                  <a href={project.links.live} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
                <button type="button" className="project-link share-btn" onClick={() => handleShare(project)} aria-label="Share Project">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
