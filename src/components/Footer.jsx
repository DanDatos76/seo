// Footer.jsx
import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Descubre la magia de SEOdigital</h4>
            <ul>
              <li>Servicios</li>
              <li>Nosotros</li>
              <li>Clientes</li>
              <li>Blog</li>
              <li></li>
             
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources.</h4>
            <ul>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Industries Insights</li>
           
            </ul>
          </div>
          <div className="footer-column">
            <h4>Careers.</h4>
            <ul>
              <li>Job Opportunities</li>
              <li>Talent Referrals</li>
            </ul>
          </div>
          <div className="footer-contact grey-background">

            <h4>Get in touch.</h4>
            <div className="contact-buttons">
              <button className="contact-btn">Contact Us</button>
              <button className="call-btn">Schedule a Call →</button>
            </div>
            <div className="phone">📞 +1 (408) 478-2739</div>
            <p className="insight-text">Get insights from the experts on building and scaling technology teams.</p>
            <div className="newsletter">
              <input type="email" placeholder="name@email.com" />
              <button>Subscribe 📩</button>
            </div>
            <div className="checkbox">
              <input type="checkbox" /> By subscribing I accept the <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Do Not Sell My Personal Information</a>
          </p>
          <p>SEOdigital  2025. All rights reserved.</p>
          <div className="social-icons">
            <span>🔗</span>
            <span>📘</span>
            <span>✖️</span>
            <span>📷</span>
            <span>▶️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
