import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSearch,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import '../styles/header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  // Toggle mobile nav
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Toggle search bar
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  // Listen to scroll to add "scrolled" class for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple search form handler (placeholder logic)
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`Search query: ${searchQuery}`);
    // Example: navigate to a Search Results page (if implemented)
    navigate(`/search?query=${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <>
      {/* Skip link for keyboard/screen reader users */}
      <a href="#main-content" className="skip-to-content">
        Skip to Main Content
      </a>

      {/* Top Bar with Contact Info + Social Icons + Extras */}
      <div className="header__top-bar">
        <div className="header__top-bar-content">
          <div className="header__top-bar-left">
            <span className="header__top-bar-item">
              <FaPhoneAlt className="header__top-bar-icon" />
              <a href="tel:1234567890">123-456-7890</a>
            </span>
            <span className="header__top-bar-item">
              <FaEnvelope className="header__top-bar-icon" />
              <a href="mailto:info@lilflowers.edu">info@lilflowers.edu</a>
            </span>
            {/* New: Directions Link */}
            <span className="header__top-bar-item">
              <FaMapMarkerAlt className="header__top-bar-icon" />
              <a
                href="https://goo.gl/maps/..."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </span>
          </div>

          <div className="header__top-bar-right">
            {/* Social Icons */}
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* New: Simple Language Switcher */}
            <div className="header__language-switcher">
              <select aria-label="Select Language">
                <option value="en">English</option>
                <option value="gu">Gujarati</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Sticky) */}
      <header
        className={`header ${scrolled ? 'header--scrolled' : ''}`}
        aria-label="Site Header"
      >
        <div className="header__container">
          {/* Logo Section */}
          <div className="header__logo">
            <NavLink
              to="/"
              className="header__logo-link"
              onClick={closeMobileMenu}
              aria-label="Go to homepage"
            >
              <img
                src="/images/logo.png"
                alt="Little Flowers Primary School Logo"
                className="header__logo-image"
              />
              {/* Using an <h1> or <h2> for SEO can vary by page design */}
              <h1 className="header__title">Little Flowers Primary School</h1>
            </NavLink>
          </div>

          {/* Search Icon (Desktop) */}
          <div
            className="header__search-icon"
            onClick={toggleSearch}
            aria-label="Toggle Search Bar"
            tabIndex={0}
            role="button"
            onKeyPress={(e) => e.key === 'Enter' && toggleSearch()}
          >
            <FaSearch />
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            className={`header__mobile-toggle ${
              isMobileMenuOpen ? 'header__mobile-toggle--active' : ''
            }`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
            onClick={toggleMobileMenu}
          >
            <span className="header__hamburger"></span>
          </button>

          {/* Navigation */}
          <nav
            className={`header__nav ${
              isMobileMenuOpen ? 'header__nav--active' : ''
            }`}
            aria-label="Main Navigation"
          >
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <NavLink to="/" end className="header__nav-link" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/about" className="header__nav-link" onClick={closeMobileMenu}>
                  About Us
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/academics" className="header__nav-link" onClick={closeMobileMenu}>
                  Academics
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/news-events"
                  className="header__nav-link"
                  onClick={closeMobileMenu}
                >
                  News &amp; Events
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/gallery" className="header__nav-link" onClick={closeMobileMenu}>
                  Gallery
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink
                  to="/student-life"
                  className="header__nav-link"
                  onClick={closeMobileMenu}
                >
                  Student Life
                </NavLink>
              </li>
              {/* New: Portal Link */}
              <li className="header__nav-item">
                <NavLink
                  to="/portal"
                  className="header__nav-link"
                  onClick={closeMobileMenu}
                >
                  Portal
                </NavLink>
              </li>
              <li className="header__nav-item">
                <NavLink to="/contact" className="header__nav-link" onClick={closeMobileMenu}>
                  Contact
                </NavLink>
              </li>

              {/* Highlighted Call-to-Action */}
              <li className="header__nav-item header__nav-item--cta">
                <NavLink
                  to="/admissions"
                  className="header__nav-link header__nav-link--cta"
                  onClick={closeMobileMenu}
                >
                  Enroll Now
                </NavLink>
              </li>
            </ul>

            {/* Search Form (Appears when icon is clicked) */}
            {showSearch && (
              <form className="header__search-form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Go</button>
              </form>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
