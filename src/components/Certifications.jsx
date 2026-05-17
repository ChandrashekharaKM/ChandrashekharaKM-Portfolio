import React from 'react';
import './Certifications.css';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: 'Certified Secure Computer User (CSCU)', issuer: 'EC-Council' },
    { title: 'Cisco Support Technician (CCST) Networking', issuer: 'Cisco' },
    { title: 'Digital Fluency', issuer: 'Government & Partner Institutions' }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title"><span className="text-gradient">Certifications</span></h2>
        
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className="cert-icon">
                <Award size={28} />
              </div>
              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
