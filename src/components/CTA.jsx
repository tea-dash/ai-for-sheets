import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to supercharge your spreadsheets?</h2>
          <p>
            Join thousands of professionals who are saving time and getting more insights from their data with AI for Sheetsus.
          </p>
          <div className="cta-buttons">
            <a href="#pricing" className="btn btn-primary">Get Started Free</a>
            <a href="#how-it-works" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
