import React from 'react';
import './LandingPageComponent.css';

const LandingPageComponent = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <h1 className="logo">SportsZone</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#teams">Teams</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="hero-section">
        <h1 className="hero-title">Get Ready to Play!</h1>
        <p className="hero-subtitle">Join us to experience the best sporting events and training sessions.</p>
        <a href="#signup" className="cta-button">Join Now</a>
      </div>

      <div className="scroll-indicator">▼</div>

      
    </div>
  );
};

export default LandingPageComponent;
