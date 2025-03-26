import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'magic',
      title: 'Smart Formulas',
      description: 'Write formulas in plain English. Our AI understands what you want and creates the perfect formula.',
      comingSoon: false
    },
    {
      id: 2,
      icon: 'chart-line',
      title: 'Instant Analysis',
      description: 'Get insights from your data with a single click. Visualize trends and patterns instantly.',
      comingSoon: false
    },
    {
      id: 3,
      icon: 'robot',
      title: 'Automation',
      description: 'Automate repetitive tasks with easy-to-setup workflows. Save hours of manual work.',
      comingSoon: true
    },
    {
      id: 4,
      icon: 'table',
      title: 'Data Cleaning',
      description: 'Clean and transform messy data automatically. Fix errors and format inconsistencies.',
      comingSoon: true
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful AI Features</h2>
          <p>AI for Sheets offers a suite of AI tools designed specifically for spreadsheets</p>
        </div>
        <div className="feature-grid">
          {features.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>
                {feature.title}
                {feature.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
