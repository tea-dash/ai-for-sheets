import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      question: 'How does AI for Sheetsus work?',
      answer: 'AI for Sheetsus uses advanced AI to understand your spreadsheet data. Simply connect your spreadsheet, ask questions in plain English, and get instant insights and formula suggestions.'
    },
    {
      id: 2,
      question: 'Is my data secure with AI for Sheetsus?',
      answer: 'Yes, security is our top priority. We use enterprise-grade encryption, and your data is never stored permanently. We are SOC 2 compliant and regularly undergo security audits.'
    },
    {
      id: 3,
      question: 'Which spreadsheet platforms are supported?',
      answer: 'AI for Sheetsus currently supports Google Sheets, Microsoft Excel, and CSV files. We\'re actively working on adding support for more platforms.'
    },
    {
      id: 4,
      question: 'Do I need to be a spreadsheet expert to use AI for Sheetsus?',
      answer: 'Not at all! AI for Sheetsus is designed for users of all skill levels. Beginners can ask simple questions about their data, while advanced users can get help with complex formulas and analysis.'
    },
    {
      id: 5,
      question: 'Can I use AI for Sheetsus on mobile devices?',
      answer: 'Yes, AI for Sheetsus is fully responsive and works on smartphones and tablets, allowing you to analyze your spreadsheet data on the go.'
    }
  ];

  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got answers</p>
        </div>
        
        <div className="faq-container">
          {faqItems.map(item => (
            <div key={item.id} className="faq-item">
              <button 
                className={`faq-question ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                {item.question}
                <span className="faq-icon">
                  <i className={`fas fa-chevron-${activeItem === item.id ? 'up' : 'down'}`}></i>
                </span>
              </button>
              <div className={`faq-answer ${activeItem === item.id ? 'active' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-more">
          <p>Still have questions? <a href="#contact">Contact our support team</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
