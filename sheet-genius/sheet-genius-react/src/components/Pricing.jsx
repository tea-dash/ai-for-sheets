import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '0',
      period: '/month',
      features: [
        'Connect 1 spreadsheet',
        'Basic AI analysis',
        'Limited data processing',
        'Email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-secondary',
      featured: false
    },
    {
      id: 2,
      name: 'Pro',
      price: '29',
      period: '/month',
      features: [
        'Connect unlimited spreadsheets',
        'Advanced AI analysis',
        'Up to 100,000 cells processing',
        'Priority support',
        'Custom automation workflows'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-primary',
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: ' pricing',
      features: [
        'Unlimited everything',
        'Advanced security features',
        'API access',
        'Dedicated account manager',
        'Custom integrations'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-secondary',
      featured: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose a plan that works for you</p>
        </div>
        <div className="pricing-grid">
          {plans.map(plan => (
            <div 
              className={`pricing-card ${plan.featured ? 'featured' : ''}`} 
              key={plan.id}
            >
              {plan.featured && <div className="popular-tag">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                ${plan.price}<span>{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="#" className={`btn ${plan.buttonClass}`}>{plan.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 