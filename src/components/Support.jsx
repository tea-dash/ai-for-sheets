import React from 'react';
import { Link } from 'react-router-dom';
import './Support.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Support = () => {
  return (
    <div className="support-page">
      <Navbar />
      
      <div className="support-container">
        <div className="support-header">
          <h1>Support</h1>
          <p>We're here to help you get the most out of AI for Sheets</p>
        </div>
        
        <div className="support-content">
          <div className="support-section contact-info">
            <h2>Contact Information</h2>
            <p>Have questions or need assistance? Reach out to us!</p>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>Email: <a href="mailto:info@palolocal.co">info@palolocal.co</a></span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Support Hours: Monday-Friday, 9AM-5PM PST</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-hourglass-half"></i>
              <span>Response Time: Within 24-48 hours</span>
            </div>
          </div>
          
          <div className="support-section faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>How do I get started with AI for Sheets?</h3>
              <p>To get started, simply visit our homepage and follow the instructions to connect AI for Sheets with your spreadsheet application. Our step-by-step guide will help you through the process.</p>
            </div>
            
            <div className="faq-item">
              <h3>What spreadsheet platforms are supported?</h3>
              <p>Currently, AI for Sheets works with Google Sheets and Microsoft Excel. We're continuously working to expand our compatibility with other platforms.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is my data secure?</h3>
              <p>Yes! We take data security very seriously. Your data is encrypted in transit and at rest. We do not store your spreadsheet data permanently - it's only used temporarily during the processing of your specific requests.</p>
            </div>
            
            <div className="faq-item">
              <h3>What features are currently available?</h3>
              <p>We currently offer data analysis, visualization, and formula generation. Our automation and data cleaning features are coming soon.</p>
            </div>
            
            <Link to="/" className="back-link">
              <i className="fas fa-arrow-left"></i> Back to Homepage
            </Link>
          </div>
          
          <div className="support-section help-form">
            <h2>Need Further Assistance?</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email address" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Please describe your issue or question in detail" required></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support; 