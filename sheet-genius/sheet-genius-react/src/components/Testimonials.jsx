import './Testimonials.css';
import user1 from '../assets/user1.svg';
import user2 from '../assets/user2.svg';
import user3 from '../assets/user3.svg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AI for Sheetsus has completely changed how I work with data. What used to take hours now takes minutes!",
      name: "Sarah Johnson",
      role: "Financial Analyst",
      avatar: user1
    },
    {
      id: 2,
      quote: "As a small business owner, I don't have time to learn complex data analysis. AI for Sheetsus makes it intuitive.",
      name: "Michael Chen",
      role: "Small Business Owner",
      avatar: user2
    },
    {
      id: 3,
      quote: "Our marketing team has increased productivity by 40% since we started using AI for Sheetsus for campaign analysis.",
      name: "Jessica Miller",
      role: "Marketing Director",
      avatar: user3
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Join thousands of professionals who transformed their workflow</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="quote">"{testimonial.quote}"</div>
              <div className="author">
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div className="author-info">
                  <div className="name">{testimonial.name}</div>
                  <div className="role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 