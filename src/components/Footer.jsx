import React from 'react';
import './Footer.css';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Chandrashekhara KM</h3>
          <p>Full-Stack Developer & MCA Student</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/ChandrashekharaKM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={24} />
          </a>
          <a href="https://linkedin.com/in/chandrashekhara-k-m" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </a>
          <a href="mailto:contact@example.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Chandrashekhara KM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
