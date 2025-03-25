import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" aria-label="Footer Navigation">
      <div className="footer__container">
        {/* Column 1: Navigation Links */}
        <nav className="footer__column" aria-label="Footer Nav Links">
          <h3 className="footer__column-title">Explore</h3>
          <ul className="footer-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/academics">Academics</Link>
            </li>
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/news-events">News &amp; Events</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/student-life">Student Life</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Column 2: Newsletter Subscription */}
        <div className="footer__column footer__subscribe">
          <h3 className="footer__column-title">Stay Updated</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscription form submitted!');
            }}
            className="footer__subscribe-form"
            aria-label="Newsletter Subscription"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              aria-label="Email Address"
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="footer__privacy-note">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer__column footer__contact">
          <h3 className="footer__column-title">Contact Us</h3>
          <p>
            <FaMapMarkerAlt />{' '}
            <a
              href="https://goo.gl/maps/..."
              target="_blank"
              rel="noopener noreferrer"
              className="footer__map-link"
            >
              123 Main Street, City, State, ZIP
            </a>
          </p>
          <p>
            <FaPhoneAlt />{' '}
            <a href="tel:1234567890" className="footer__phone-link">
              123-456-7890
            </a>
          </p>
          <div className="footer__social-media">
            <a href="#facebook" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer__bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Little Flowers Primary School. All
          rights reserved.
        </p>
        {/* New: Privacy & Terms Links */}
        <div className="footer__bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link> |{' '}
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
