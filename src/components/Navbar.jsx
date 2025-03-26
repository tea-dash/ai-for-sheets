import { useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ mobileMenuOpen, toggleMobileMenu }) => {
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navEl = document.querySelector('nav');
      const menuToggle = document.querySelector('.menu-toggle');
      
      if (
        mobileMenuOpen && 
        navEl && 
        !navEl.contains(event.target) && 
        menuToggle && 
        !menuToggle.contains(event.target)
      ) {
        toggleMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen, toggleMobileMenu]);

  return (
    <nav>
      <div className="container">
        <div className="logo">AI for Sheets</div>
        
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
        </ul>
        
        <button 
          className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
