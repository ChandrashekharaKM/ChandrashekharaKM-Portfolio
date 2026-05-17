import React from 'react';
import './Experience.css';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work <span className="text-gradient">Experience</span></h2>
        
        <div className="timeline">
          <div className="timeline-item glass-card">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>Software Developer Intern</h3>
                  <h4 className="company-name">SwipeGen</h4>
                </div>
                <div className="timeline-date">
                  <Calendar size={16} />
                  <span>Dec 2025 – May 2026</span>
                </div>
              </div>
              <ul className="timeline-details">
                <li>
                  Engineered an advanced HR Automation System leveraging Python and Google APIs.
                </li>
                <li>
                  Successfully optimized execution time by <strong>30%</strong> through efficient code structuring and API batching.
                </li>
                <li>
                  Automated critical workflows, resulting in a time saving of <strong>15+ hours</strong> of manual work weekly for the HR team.
                </li>
              </ul>
              <div className="tech-stack">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">Google APIs</span>
                <span className="tech-pill">Automation</span>
              </div>
            </div>
          </div>

          <div className="timeline-item glass-card">
            <div className="timeline-icon">
              <Briefcase size={24} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>QA-DevOps Intern</h3>
                  <h4 className="company-name">CazeLabs</h4>
                </div>
                <div className="timeline-date">
                  <Calendar size={16} />
                  <span>May 2026 – Present</span>
                </div>
              </div>
              <ul className="timeline-details">
                <li>
                  Supporting QA automation and DevOps workflows to improve release reliability and deployment speed.
                </li>
                <li>
                  Collaborating with cross-functional teams to implement CI/CD pipelines and automated testing frameworks.
                </li>
                <li>
                  Monitoring system health and streamlining deployment practices for faster, safer releases.
                </li>
              </ul>
              <div className="tech-stack">
                <span className="tech-pill">QA Automation</span>
                <span className="tech-pill">DevOps</span>
                <span className="tech-pill">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
