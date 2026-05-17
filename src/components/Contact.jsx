import React, { useState } from 'react';
import './Contact.css';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.location.href = `mailto:chandrashekharakm07@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info glass-card">
            <h3>Let's Connect</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="contact-links">
              <a href="mailto:chandrashekharakm07@gmail.com" className="contact-link-item">
                <div className="icon-wrapper"><Mail size={20} /></div>
                <span>chandrashekharakm07@gmail.com</span>
              </a>
              <a href="https://github.com/ChandrashekharaKM" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="icon-wrapper"><GithubIcon size={20} /></div>
                <span>ChandrashekharaKM</span>
              </a>
              <a href="https://linkedin.com/in/chandrashekhara-k-m" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="icon-wrapper"><LinkedinIcon size={20} /></div>
                <span>chandrashekhara-k-m</span>
              </a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can I help you?" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
