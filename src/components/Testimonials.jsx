import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Financial Analyst',
      company: 'Global Finance',
      image: '/avatar-1.png',
      content: 'AI for Sheetsus has revolutionized how I analyze financial data. The AI suggestions have saved me countless hours on complex formulas.'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Marketing Director',
      company: 'TechBrand',
      image: '/avatar-2.png',
      content: 'As someone who isn\'t a spreadsheet expert, AI for Sheetsus has been a game-changer. I can now get insights from my marketing data without needing to learn complex formulas.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Data Scientist',
      company: 'DataCorp',
      image: '/avatar-3.png',
      content: 'The natural language processing in AI for Sheetsus is impressive. I can simply ask questions about my data and get accurate answers instantly.'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Success stories from professionals using AI for Sheetsus</p>
        </div>
        
        <div className="testimonials-container">
          <button className="testimonial-arrow prev" onClick={prevTestimonial}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="testimonial-arrow next" onClick={nextTestimonial}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
