import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '25 queries per month',
        'Basic formula suggestions',
        'Export to CSV',
        'Community support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 2,
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Unlimited queries',
        'Advanced formula creation',
        'Data visualization',
        'Priority support',
        'Team collaboration'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'per organization',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated account manager',
        'SOC 2 compliance',
        'Advanced security features'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>Choose the plan that fits your needs</p>
        </div>
        
        <div className="pricing-plans">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`pricing-plan ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
