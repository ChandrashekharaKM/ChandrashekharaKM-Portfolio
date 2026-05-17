import React from 'react';
import './About.css';
import { Code, Server, Database, BrainCircuit } from 'lucide-react';
import ProfileImage from '../assets/Profile.png';

const About = () => {
  const skills = {
    Languages: ['Java', 'Python', 'JavaScript (TypeScript)', 'MySQL', 'C', 'PHP'],
    'Frameworks & Tools': ['Spring Boot', 'FastAPI', 'React Native', 'Node.js', 'Docker', 'Git']
  };

  const highlights = [
    {
      icon: <Server className="highlight-icon" />,
      title: 'Backend Systems',
      description: 'Designing scalable REST APIs and secure server architecture.'
    },
    {
      icon: <BrainCircuit className="highlight-icon" />,
      title: 'AI Integrations',
      description: 'Bridging models, data and UX to create intelligent workflows.'
    },
    {
      icon: <Database className="highlight-icon" />,
      title: 'Data Architecture',
      description: 'Structuring clean, performant data pipelines and storage.'
    },
    {
      icon: <Code className="highlight-icon" />,
      title: 'Clean Code',
      description: 'Writing maintainable applications with strong engineering practices.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">About</span> Me</h2>

        <div className="about-card glass-card animate-fade-in delay-100">
          <div className="about-left">
            <div className="profile-widget">
              <span className="profile-badge">Profile</span>
              <div className="profile-ring animate-float-ring">
                <div className="profile-frame">
                  <img src={ProfileImage} alt="Chandrashekhara KM" onContextMenu={(e) => e.preventDefault()} />
                  <div className="image-overlay">Do not download image</div>
                </div>
              </div>
              <div className="profile-details">
                <span className="profile-role">Full-Stack Developer</span>
                <h3>Chandrashekhara KM</h3>
                <p>
                  Building secure, scalable backend platforms and polished interfaces with elegant code.
                </p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="about-intro">
              <p className="section-chip">Who I Am</p>
              <h3 className="about-heading">Bringing modern systems to life with thoughtful engineering.</h3>
            </div>

            <p className="about-description">
              I am a high-achieving MCA student with a strong foundation in Data Structures & Algorithms (DSA) and Object-Oriented Programming (OOP). I enjoy transforming complex problems into clean, reliable experiences.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.title} className="highlight-card">
                  {item.icon}
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <div className="skill-grid">
                    {items.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
