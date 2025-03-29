import './CTA.css';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to supercharge your spreadsheets?</h2>
          <p>
            Join thousands of professionals who are saving time and getting more insights from their data with AI for Sheets.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary">Get Started Free</a>
            <Link to="/post-install-tips" className="btn btn-secondary">View Post-Install Tips</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
