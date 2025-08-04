// File: MegaMenu2.js
import React, { useState } from 'react';
import '../styles/Megamenu2.css';

const MegaMenu2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mega-menu-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <span className="nav-title">Technologies <span className="arrow">▾</span></span>
            {isOpen && (
              <div className="mega-menu">
                <div className="mega-menu-left">
                  <h4>Technologies<span className="dot">.</span></h4>
                  <p>Get experts in 100+ technologies.<br />Cover any tech stack.</p>
                  <p>Hire Software Developers</p>
                  <p>Top 1% Talent</p>
                  <hr />
                  <div className="pinterest-block">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" />
                    <p>We now have 230+ devs across 37 projects at Pinterest. <a href="#">Read case study.</a></p>
                  </div>
                </div>
                <div className="mega-menu-right">
                  <div className="tech-column">
                    <ul>
                      <li>.NET</li>
                      <li>AWS</li>
                      <li>Django</li>
                      <li>Java</li>
                      <li>Machine Learning</li>
                      <li>PHP</li>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li><a href="#">All Technologies →</a></li>
                    </ul>
                  </div>
                  <div className="tech-column">
                    <ul>
                      <li>AI</li>
                      <li>C#</li>
                      <li>Golang</li>
                      <li>JavaScript</li>
                      <li>Microsoft Azure</li>
                      <li>Power BI</li>
                      <li>Ruby</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                  <div className="tech-column">
                    <ul>
                      <li>Angular</li>
                      <li>C++</li>
                      <li>Google Cloud</li>
                      <li>Kotlin</li>
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>Salesforce</li>
                      <li>Xamarin</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu2;
