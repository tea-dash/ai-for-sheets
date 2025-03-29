import React from 'react';
import { Link } from 'react-router-dom';
import './PostInstallTips.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PostInstallTips = () => {
  const tips = [
    {
      id: 'start',
      title: 'Getting Started',
      description: 'Welcome to AI for Sheets! Follow these simple steps to get the most out of your new AI-powered spreadsheet assistant.',
      steps: [
        'Open your Google Sheets or Excel document',
        'Click on the Extensions menu and select "AI for Sheets"',
        'Sign in with the same account you used during registration',
        'Grant the necessary permissions when prompted'
      ],
      icon: 'fa-rocket'
    },
    {
      id: 'commands',
      title: 'Essential Commands',
      description: 'These commands will help you perform common tasks quickly:',
      steps: [
        '/analyze - Analyze your selected data',
        '/visualize - Create a visualization from selected data',
        '/formula - Generate a formula based on your description',
        '/help - Get a list of all available commands'
      ],
      icon: 'fa-terminal'
    },
    {
      id: 'data',
      title: 'Data Preparation',
      description: 'Follow these best practices to get the most accurate results:',
      steps: [
        'Use headers for your columns',
        'Avoid merged cells when possible',
        'Clean up empty rows and columns',
        'Use consistent formatting for dates and numbers'
      ],
      icon: 'fa-table'
    },
    {
      id: 'shortcuts',
      title: 'Keyboard Shortcuts',
      description: 'Save time with these keyboard shortcuts:',
      steps: [
        'Ctrl+Alt+A (Cmd+Option+A on Mac) - Analyze selection',
        'Ctrl+Alt+V (Cmd+Option+V on Mac) - Visualize selection',
        'Ctrl+Alt+F (Cmd+Option+F on Mac) - Generate formula',
        'Ctrl+Alt+H (Cmd+Option+H on Mac) - Show help'
      ],
      icon: 'fa-keyboard'
    }
  ];

  const faqs = [
    {
      question: 'Why does AI for Sheets need permission to access my spreadsheets?',
      answer: 'AI for Sheets needs access to read your spreadsheet data in order to analyze it and provide insights. We only access the data you explicitly request us to analyze, and we never store your data permanently.'
    },
    {
      question: 'How do I update AI for Sheets?',
      answer: 'AI for Sheets updates automatically in most cases. If you need to manually update, you can do so by refreshing the add-on in your spreadsheet application or reinstalling from the marketplace.'
    },
    {
      question: 'Can I use AI for Sheets offline?',
      answer: 'AI for Sheets requires an internet connection to function as it processes your requests using our cloud-based AI. However, any results and formulas generated will continue to work offline once applied to your spreadsheet.'
    },
    {
      question: 'Is there a limit to how much data I can analyze?',
      answer: 'Free accounts can analyze up to 5,000 cells at once and have a monthly quota. Pro accounts can analyze up to 100,000 cells at once with higher monthly quotas. Enterprise accounts have customizable limits.'
    }
  ];

  return (
    <div className="post-install-page">
      <Navbar />
      
      <div className="post-install-container">
        <div className="post-install-header">
          <h1>Post-Installation Tips</h1>
          <p>Get up and running quickly with these helpful tips and tricks</p>
        </div>
        
        <section className="quick-setup">
          <h2>Quick Setup Guide</h2>
          <div className="progress-bar">
            <div className="progress-step">
              <div className="step-icon">
                <i className="fas fa-download"></i>
              </div>
              <div className="step-label">Install</div>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className="step-icon active">
                <i className="fas fa-cog"></i>
              </div>
              <div className="step-label">Configure</div>
            </div>
            <div className="progress-line"></div>
            <div className="progress-step">
              <div className="step-icon">
                <i className="fas fa-check"></i>
              </div>
              <div className="step-label">Complete</div>
            </div>
          </div>
        </section>
        
        <div className="tips-grid">
          {tips.map(tip => (
            <div className="tip-card" key={tip.id}>
              <div className="tip-icon">
                <i className={`fas ${tip.icon}`}></i>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
              <ul className="tip-steps">
                {tip.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <section className="video-tutorial">
          <h2>Video Tutorial</h2>
          <div className="responsive-video-container">
            <iframe 
              src="https://www.youtube.com/embed/TR6UiwKppb4" 
              title="AI for Sheets Tutorial Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <p className="video-description">
            This video tutorial walks you through the essential features of AI for Sheets and shows you how to get the most out of your spreadsheet analysis.
          </p>
        </section>
        
        <section className="common-questions">
          <h2>Common Questions</h2>
          <div className="faqs-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="next-steps">
          <h2>Next Steps</h2>
          <div className="next-steps-grid">
            <div className="next-step-card">
              <i className="fas fa-book"></i>
              <h3>Read Documentation</h3>
              <p>Explore our detailed documentation to learn more about advanced features.</p>
              <a href="#" className="btn-link">View Docs</a>
            </div>
            <div className="next-step-card">
              <i className="fas fa-users"></i>
              <h3>Join Community</h3>
              <p>Connect with other users to share tips and get help.</p>
              <a href="#" className="btn-link">Join Forum</a>
            </div>
            <div className="next-step-card">
              <i className="fas fa-graduation-cap"></i>
              <h3>Take a Tutorial</h3>
              <p>Follow step-by-step tutorials for common use cases.</p>
              <a href="#" className="btn-link">Start Learning</a>
            </div>
          </div>
        </section>
        
        <div className="navigation-buttons">
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <Link to="/support" className="support-button">
            Need Help? <i className="fas fa-headset"></i>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostInstallTips; 