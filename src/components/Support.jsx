import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, this would filter the help content
    console.log('Searching for:', searchQuery);
  };
  
  const categories = [
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'features', name: 'Features & Capabilities' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'account', name: 'Account & Billing' },
  ];
  
  const helpContent = {
    'getting-started': [
      { 
        id: 'gs-1', 
        title: 'How to Install AI for Sheets', 
        description: 'Learn how to add AI for Sheets to your Google Workspace account.',
        url: '#install'
      },
      { 
        id: 'gs-2', 
        title: 'Quick Start Guide', 
        description: 'Get up and running with AI for Sheets in less than 5 minutes.',
        url: '#quickstart'
      },
      { 
        id: 'gs-3', 
        title: 'Understanding the Interface', 
        description: 'Learn about the different parts of the AI for Sheets interface.',
        url: '#interface'
      },
      { 
        id: 'gs-4', 
        title: 'Permission Settings', 
        description: 'Understand what permissions AI for Sheets needs and why.',
        url: '#permissions'
      }
    ],
    'features': [
      { 
        id: 'ft-1', 
        title: 'Data Analysis Features', 
        description: 'Discover how AI can help analyze your spreadsheet data.',
        url: '#analysis'
      },
      { 
        id: 'ft-2', 
        title: 'Visualization Tools', 
        description: 'Learn how to create powerful visualizations from your data.',
        url: '#visualization'
      },
      { 
        id: 'ft-3', 
        title: 'Formula Generation', 
        description: 'Let AI help you create complex formulas with simple language.',
        url: '#formulas'
      },
      { 
        id: 'ft-4', 
        title: 'Coming Soon: Automation', 
        description: 'Preview of upcoming automation features.',
        url: '#automation'
      }
    ],
    'troubleshooting': [
      { 
        id: 'ts-1', 
        title: 'Connection Issues', 
        description: 'Troubleshoot problems connecting AI for Sheets to your spreadsheets.',
        url: '#connection'
      },
      { 
        id: 'ts-2', 
        title: 'Performance Optimization', 
        description: 'Tips to improve performance with large spreadsheets.',
        url: '#performance'
      },
      { 
        id: 'ts-3', 
        title: 'Common Error Messages', 
        description: 'Solutions for frequently encountered error messages.',
        url: '#errors'
      }
    ],
    'integrations': [
      { 
        id: 'in-1', 
        title: 'Google Sheets Integration', 
        description: 'Detailed guide for using AI for Sheets with Google Sheets.',
        url: '#google-sheets'
      },
      { 
        id: 'in-2', 
        title: 'Microsoft Excel Integration', 
        description: 'How to use AI for Sheets with Microsoft Excel.',
        url: '#excel'
      },
      { 
        id: 'in-3', 
        title: 'Data Source Connections', 
        description: 'Connect to external data sources for analysis.',
        url: '#data-sources'
      }
    ],
    'account': [
      { 
        id: 'ac-1', 
        title: 'Account Settings', 
        description: 'Manage your AI for Sheets account settings.',
        url: '#account-settings'
      },
      { 
        id: 'ac-2', 
        title: 'Subscription Plans', 
        description: 'Information about different subscription tiers and features.',
        url: '#subscriptions'
      },
      { 
        id: 'ac-3', 
        title: 'User Management', 
        description: 'Add and manage users for team accounts.',
        url: '#users'
      }
    ]
  };
  
  return (
    <div className="support-page">
      <Navbar />
      
      <div className="help-container">
        <div className="help-header">
          <h1>Help Center</h1>
          <p>Find guides, tutorials, and solutions for AI for Sheets</p>
          
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search for help..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">Search</button>
            </div>
          </form>
        </div>
        
        <div className="help-content">
          <aside className="help-sidebar">
            <h2>Help Topics</h2>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.id} className={activeCategory === category.id ? 'active' : ''}>
                  <button 
                    onClick={() => setActiveCategory(category.id)}
                    className="category-button"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="contact-block">
              <h3>Need more help?</h3>
              <p>Our support team is here for you</p>
              <a href="mailto:info@palolocal.co" className="contact-link">
                <i className="fas fa-envelope"></i> Contact Support
              </a>
              <div className="support-hours">
                <small>Hours: Monday-Friday, 9AM-5PM PST</small>
                <small>Response Time: Within 24-48 hours</small>
              </div>
            </div>
          </aside>
          
          <main className="help-main">
            <h2>{categories.find(cat => cat.id === activeCategory).name}</h2>
            
            <div className="article-grid">
              {helpContent[activeCategory].map((article) => (
                <article key={article.id} className="help-article">
                  <h3><a href={article.url}>{article.title}</a></h3>
                  <p>{article.description}</p>
                  <a href={article.url} className="read-more">Read article <i className="fas fa-arrow-right"></i></a>
                </article>
              ))}
            </div>
            
            <div className="help-feedback">
              <h3>Was this helpful?</h3>
              <div className="feedback-buttons">
                <button className="feedback-button"><i className="fas fa-thumbs-up"></i> Yes</button>
                <button className="feedback-button"><i className="fas fa-thumbs-down"></i> No</button>
              </div>
            </div>
          </main>
        </div>
        
        <section className="popular-topics">
          <h2>Popular Topics</h2>
          <div className="topics-grid">
            <a href="#data-analysis" className="topic-card">
              <i className="fas fa-chart-line"></i>
              <h3>Data Analysis</h3>
              <p>Learn about AI-powered data analysis</p>
            </a>
            <a href="#formulas" className="topic-card">
              <i className="fas fa-calculator"></i>
              <h3>Smart Formulas</h3>
              <p>Generate complex formulas with AI</p>
            </a>
            <a href="#charts" className="topic-card">
              <i className="fas fa-chart-pie"></i>
              <h3>Data Visualization</h3>
              <p>Create beautiful charts and visualizations</p>
            </a>
            <a href="#privacy" className="topic-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Data Privacy</h3>
              <p>How we protect your spreadsheet data</p>
            </a>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Support; 