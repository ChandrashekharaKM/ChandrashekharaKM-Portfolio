import React from 'react';
import './Projects.css';
import { ExternalLink, Shield, MapPin, BarChart2, TrendingUp, Database, Code } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projectData = [
    {
      title: 'AnonDesk',
      description: 'Secure anonymous feedback platform using SHA-256 encryption to protect user identity and feedback text. Optimized database performance by 40% through table normalization and custom index tuning in MySQL. Developed stateless REST layer with custom exception handling for high-volume concurrent client payloads.',
      tech: ['Java', 'MySQL', 'RESTful APIs', 'SHA-256'],
      icon: <Shield size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'SentiMint AI',
      description: 'Real-time sentiment analysis dashboard using FastAPI microservices to ingest and parse streaming message frequencies. Integrated pre-trained Hugging Face transformer layers for deep semantic scoring and emotion tracking. Configured asynchronous execution blocks in Python to support low-latency concurrent sessions.',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'Transformers'],
      icon: <BarChart2 size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'NeighborCare',
      description: 'Real-time emergency response network pairing active victims to verified local responders using geospatial mapping. Deployed Haversine formula calculation logic and Socket.io channels for low-latency proximity alert delivery. Engineered priority-matching sorting logic determining nearest responder arrays based on active GPS location streams.',
      tech: ['React Native', 'Node.js', 'Socket.io', 'Express'],
      icon: <MapPin size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'NoteZone & Enterprise Apps',
      description: 'Built NoteZone compilation infrastructure utilizing Java process runtime handlers to run user code strings securely. Architected multi-threaded request pool for concurrent sandbox execution isolation. Developed Water Quality Prediction system using Scikit-learn with 87% accuracy. Engineered AHAARIKA food ordering platform and Secure Online Voting engine with cryptographic ledger logic.',
      tech: ['Spring Boot', 'Java', 'PHP', 'Scikit-learn'],
      icon: <Code size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'Water Quality Prediction',
      description: 'Advanced ML system using Scikit-learn classification models to predict water safety with 87% evaluation accuracy. Implemented feature engineering pipelines to process environmental sensor data and quality indicators. Deployed predictive models for real-time water quality assessment and anomaly detection.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      icon: <TrendingUp size={32} />,
      links: { github: '#', live: '#' }
    },
    {
      title: 'PlacementCell Portal',
      description: 'Student placement tracking and management system built with PHP and normalized MySQL database design. Engineered secure authentication and role-based access control for students, companies, and administrators. Implemented milestone logging system to track student progress through placement pipeline with analytics dashboards.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      icon: <Database size={32} />,
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
