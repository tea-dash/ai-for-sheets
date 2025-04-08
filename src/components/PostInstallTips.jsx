import React from 'react';
import { Link } from 'react-router-dom';
import './PostInstallTips.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PostInstallTips = () => {
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
        
        <section className="video-tutorial">
          <h2>Video Tutorial</h2>
          <div className="responsive-video-container">
            <iframe 
              src="https://www.youtube.com/embed/4Fqvx6V5Yyg" 
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