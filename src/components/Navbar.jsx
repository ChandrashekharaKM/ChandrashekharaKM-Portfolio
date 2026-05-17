import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, onThemeToggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass-panel scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="nav-logo">CKM.</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn">Hire Me</a></li>
          <li>
            <button className="theme-toggle" onClick={onThemeToggle} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
