import './style.css'

// Landing page content
document.querySelector('#app').innerHTML = `
  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <span>AI for Sheetsus</span>
        </div>
        <ul class="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div class="cta-buttons">
          <a href="#" class="btn btn-secondary">Log in</a>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
        <div class="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div class="hero">
        <div class="hero-content">
          <h1>Transform Your Spreadsheets with AI</h1>
          <p>AI for Sheetsus brings the power of artificial intelligence to your spreadsheets. Automate tasks, analyze data, and gain insights faster than ever before.</p>
          <div class="hero-cta">
            <a href="#" class="btn btn-primary btn-large">Try for Free</a>
            <a href="#" class="btn btn-secondary btn-large">Watch Demo</a>
          </div>
        </div>
        <div class="hero-image">
          <img src="/hero-image.png" alt="AI for Sheetsus in action">
        </div>
      </div>
    </div>
  </header>

  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Powerful AI Features</h2>
        <p>AI for Sheetsus offers a suite of AI tools designed specifically for spreadsheets</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-magic"></i>
          </div>
          <h3>Smart Formulas</h3>
          <p>Write formulas in plain English. Our AI understands what you want and creates the perfect formula.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <h3>Instant Analysis</h3>
          <p>Get insights from your data with a single click. Visualize trends and patterns instantly.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-robot"></i>
          </div>
          <h3>Automation</h3>
          <p>Automate repetitive tasks with easy-to-setup workflows. Save hours of manual work.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fas fa-table"></i>
          </div>
          <h3>Data Cleaning</h3>
          <p>Clean and transform messy data automatically. Fix errors and format inconsistencies.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="how-it-works">
    <div class="container">
      <div class="section-header">
        <h2>How It Works</h2>
        <p>AI for Sheetsus integrates seamlessly with your existing spreadsheet tools</p>
      </div>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Connect Your Sheets</h3>
          <p>Easily connect to Google Sheets, Excel, or any CSV file. No complicated setup required.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Ask Questions</h3>
          <p>Ask questions about your data in plain language. Our AI understands what you need.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Get Results</h3>
          <p>Receive instant insights, visualizations, or automated workflows based on your requests.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Simple, Transparent Pricing</h2>
        <p>Choose a plan that works for you</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Free</h3>
          <div class="price">$0<span>/month</span></div>
          <ul class="features-list">
            <li>Connect 1 spreadsheet</li>
            <li>Basic AI analysis</li>
            <li>Limited data processing</li>
            <li>Email support</li>
          </ul>
          <a href="#" class="btn btn-secondary">Get Started</a>
        </div>
        <div class="pricing-card featured">
          <div class="popular-tag">Most Popular</div>
          <h3>Pro</h3>
          <div class="price">$29<span>/month</span></div>
          <ul class="features-list">
            <li>Connect unlimited spreadsheets</li>
            <li>Advanced AI analysis</li>
            <li>Up to 100,000 cells processing</li>
            <li>Priority support</li>
            <li>Custom automation workflows</li>
          </ul>
          <a href="#" class="btn btn-primary">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">Custom<span> pricing</span></div>
          <ul class="features-list">
            <li>Unlimited everything</li>
            <li>Advanced security features</li>
            <li>API access</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations</li>
          </ul>
          <a href="#" class="btn btn-secondary">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2>What Our Users Say</h2>
        <p>Join thousands of professionals who transformed their workflow</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="quote">"AI for Sheetsus has completely changed how I work with data. What used to take hours now takes minutes!"</div>
          <div class="author">
            <img src="/user1.jpg" alt="Sarah Johnson">
            <div class="author-info">
              <div class="name">Sarah Johnson</div>
              <div class="role">Financial Analyst</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote">"As a small business owner, I don't have time to learn complex data analysis. AI for Sheetsus makes it intuitive."</div>
          <div class="author">
            <img src="/user2.jpg" alt="Michael Chen">
            <div class="author-info">
              <div class="name">Michael Chen</div>
              <div class="role">Small Business Owner</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="quote">"Our marketing team has increased productivity by 40% since we started using AI for Sheetsus for campaign analysis."</div>
          <div class="author">
            <img src="/user3.jpg" alt="Jessica Miller">
            <div class="author-info">
              <div class="name">Jessica Miller</div>
              <div class="role">Marketing Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="faq" class="faq">
    <div class="container">
      <div class="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Got questions? We've got answers</p>
      </div>
      <div class="faq-grid">
        <div class="faq-item">
          <div class="question">
            <h3>Does AI for Sheetsus work with all spreadsheet software?</h3>
            <span class="toggle">+</span>
          </div>
          <div class="answer">
            <p>AI for Sheetsus works with Google Sheets, Microsoft Excel (online and desktop), and CSV files. We're constantly adding support for more formats.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>Is my data secure?</h3>
            <span class="toggle">+</span>
          </div>
          <div class="answer">
            <p>Absolutely. We use bank-level encryption for all data transfers. Your data is never stored on our servers longer than needed for processing, and we never share it with third parties.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>Do I need to know coding to use AI for Sheetsus?</h3>
            <span class="toggle">+</span>
          </div>
          <div class="answer">
            <p>Not at all! AI for Sheetsus is designed for anyone who works with spreadsheets, regardless of technical skill. You can interact with the AI using plain language.</p>
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <h3>Can I cancel my subscription anytime?</h3>
            <span class="toggle">+</span>
          </div>
          <div class="answer">
            <p>Yes, you can cancel your subscription at any time with no questions asked. You'll retain access until the end of your billing period.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Transform Your Spreadsheet Experience?</h2>
        <p>Join thousands of professionals who have already revolutionized their workflow with AI for Sheetsus.</p>
        <a href="#" class="btn btn-primary btn-large">Get Started for Free</a>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">AI for Sheetsus</div>
          <p>Transforming spreadsheets with the power of AI.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Security</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 AI for Sheetsus. All rights reserved.</p>
      </div>
    </div>
  </footer>
`

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // FAQ toggle
  const faqQuestions = document.querySelectorAll('.question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle('active');
      
      const toggle = question.querySelector('.toggle');
      toggle.textContent = faqItem.classList.contains('active') ? '-' : '+';
    });
  });
});
