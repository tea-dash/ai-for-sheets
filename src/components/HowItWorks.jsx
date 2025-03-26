import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Connect Your Sheets',
      description: 'Easily connect to Google Sheets, Excel, or any CSV file. No complicated setup required.'
    },
    {
      id: 2,
      title: 'Ask Questions',
      description: 'Ask questions about your data in plain language. Our AI understands what you need.'
    },
    {
      id: 3,
      title: 'Get Results',
      description: 'Receive instant insights, visualizations, or automated workflows based on your requests.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>AI for Sheets integrates seamlessly with your existing spreadsheet tools</p>
        </div>
        <div className="steps">
          {steps.map(step => (
            <div className="step" key={step.id}>
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
