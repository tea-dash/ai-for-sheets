import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <div className="logo">AI for Sheets</div>
            <p>AI-powered spreadsheet assistant that makes data analysis easy.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/post-install-tips">Post Install Tips</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AI for Sheets. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms-of-service">Terms</Link>
            <Link to="/support">Support</Link>
            <Link to="/post-install-tips">Tips</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
