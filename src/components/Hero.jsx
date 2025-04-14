import './Hero.css';
import heroImage from '../assets/hero-image.svg';

const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <h1>Transform Your Spreadsheets with AI</h1>
          <p>AI for Sheets brings the power of artificial intelligence to your spreadsheets. Automate tasks, analyze data, and gain insights faster than ever before.</p>
          <div className="hero-cta">
            <a href="https://workspace.google.com/marketplace/app/ai_assistance_for_sheets/489083850967" className="btn btn-primary btn-large">Try for Free</a>
            <a href="#" className="btn btn-secondary btn-large">Watch Demo</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="AI for Sheets in action" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
