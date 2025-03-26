import { useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen, toggleMobileMenu]);

  return (
    <div className="container">
      <nav>
        <div className="logo">
          <span>AI for Sheetsus</span>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="cta-buttons">
          <a href="#" className="btn btn-secondary">Log in</a>
          <a href="#" className="btn btn-primary">Get Started</a>
        </div>
        <div className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 