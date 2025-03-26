import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Does AI for Sheetsus work with all spreadsheet software?',
      answer: 'AI for Sheetsus works with Google Sheets, Microsoft Excel (online and desktop), and CSV files. We\'re constantly adding support for more formats.'
    },
    {
      id: 2,
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption for all data transfers. Your data is never stored on our servers longer than needed for processing, and we never share it with third parties.'
    },
    {
      id: 3,
      question: 'Do I need to know coding to use AI for Sheetsus?',
      answer: 'Not at all! AI for Sheetsus is designed for anyone who works with spreadsheets, regardless of technical skill. You can interact with the AI using plain language.'
    },
    {
      id: 4,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no questions asked. You\'ll retain access until the end of your billing period.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got answers</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={faq.id}
            >
              <div className="question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="toggle">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div className="answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 