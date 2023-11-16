import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/dunadpay-removebg-preview 1.png';
import '../Styles/Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="middle">
          <ul className="menu-one">
            <li>
              <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
              <span className="company" onClick={toggleDropdown}>
                Company {isDropdownOpen ? '▲' : '▼'}
              </span>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link to="/content" className="company">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="services">
                    Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/support" className="support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="right-nav">
        <ul className="menu-two">
          <li>
            <Link to="/login">
              <h3 className="login">Login</h3>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button className="Signup">Signup</button>
            </Link>
          </li>
        </ul>
        <div className="mobile-menu-icons">
          {isMobileMenuOpen ? (
            <div className="close-icon" onClick={toggleMobileMenu}>
              ✖
            </div>
          ) : (
            <div className="reorder-icon" onClick={toggleMobileMenu}>
              ☰
            </div>
          )}
        </div>
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'show' : ''}`}>
          <div className="close-overlay-button" onClick={toggleMobileMenu}>
            ✖
          </div>
          <ul className="overlay-menu">
          


          <li>
              <Link to="/" className="mobile-menu-item">
              Home
              </Link>
            </li>

            <li>
              <Link to="/content" className="mobile-menu-item">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/products" className="mobile-menu-item">
              Services
              </Link>
              </li>
              <li>
              <Link to="/support" className="mobile-menu-item">
              Support
              </Link>
            </li>
            <li>
              <Link to="/login" className="mobile-menu-item">
              Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="mobile-menu-item">
              Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
