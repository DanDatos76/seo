import React, { useState } from 'react';
import '../styles/Header.css';
import { FaChevronDown } from 'react-icons/fa';
import MegaMenu from './MegaMenu';
import Contact from './Contact';
import { Link } from 'react-router-dom';







const Header = () => {
  const [contactOpen, setContactOpen] = useState(false);



  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/logo2.png">YourLogo</Link>
        </div>

        <nav className="nav-menu">
          <ul className="nav-list">

            <li>
              <Link to="/" className="nav-link">
                Home <FaChevronDown size="0.7em" />
              </Link>
            </li>
            <li>
              <Link to="../componets/about2" className="nav-link">
                About <FaChevronDown size="0.7em" /> </Link>
            </li>
            <Link to="/nosotros">Nosotros</Link>
            <li>
              <Link to="/technologies" className="nav-link">
                Technologies <FaChevronDown size="0.7em" />
              </Link>
            </li>
           <li><a href="contacto.html">Contact-html</a></li>
           <li><a href="servicios.html">Services-html</a></li>
           <li><a href="about.html">About-html</a></li>
            
            <li>
              <Link to="/nosotros.html" className="nav-link">
                Industries <FaChevronDown size="0.7em" />
              </Link>
            </li>
           
            <li>
              <Link to="/servicios" className="nav-link">
                Our Work
              </Link>
            </li>
            <li
              className="nav-item-with-dropdown"
              style={{ position: 'relative' }}
            >
              <span
                className="nav-link"
                style={{ cursor: 'pointer' }}
                onClick={() => setContactOpen(!contactOpen)}
              >
                Contact <FaChevronDown size="0.7em" />
              </span>

              {contactOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    zIndex: 1000,
                    width: '300px',
                    padding: '1em',
                  }}
                >
                  <Contact />
                </div>
              )}
            </li>
          </ul>

          <br></br>

          <a href="tel:+541121912435" className="cta-button">
            Schedule a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
