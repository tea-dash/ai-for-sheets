import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="section-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: {currentDate}</p>
        </div>
        
        <div className="policy-content">
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to AI for Sheets ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Google Workspace application. Please read this Privacy Policy carefully. By using the application, you consent to the data practices described in this policy.
            </p>
          </section>
          
          <section>
            <h2>Information We Collect</h2>
            <h3>Information You Provide to Us</h3>
            <p>
              We may collect information that you provide directly to us when using our application, including:
            </p>
            <ul>
              <li>Account information (name, email address)</li>
              <li>Content you create, upload, or share through our application</li>
              <li>Communications you have with us</li>
            </ul>
            
            <h3>Information Collected Automatically</h3>
            <p>
              When you access our application, we may automatically collect:
            </p>
            <ul>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Device information (hardware model, operating system)</li>
              <li>Usage information (features used, actions taken)</li>
            </ul>
            
            <h3>Information from Google Workspace</h3>
            <p>
              With your permission, we access the following from your Google Workspace account:
            </p>
            <ul>
              <li>Spreadsheet content for processing tasks</li>
              <li>Drive access to save and retrieve files</li>
            </ul>
            <p>
              We explicitly affirm that we do not use Google Workspace APIs to develop, improve, or train generalized AI and/or ML models. Any data accessed through Google Workspace APIs is used solely for the purpose of providing our application's core functionality and is not retained for AI/ML model development purposes.
            </p>
          </section>
          
          <section>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li>To provide, maintain, and improve our application</li>
              <li>To respond to your requests and communications</li>
              <li>To protect against fraud and unauthorized access</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2>Sharing Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>As required by law or to protect rights and safety</li>
              <li>With your consent</li>
            </ul>
            <p>
              We do not sell your personal information.
            </p>
          </section>
          
          <section>
            <h2>Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your data at any time.
            </p>
          </section>
          
          <section>
            <h2>Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information, including:
            </p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>
          </section>
          
          <section>
            <h2>Children's Privacy</h2>
            <p>
              Our application is not intended for children under 13, and we do not knowingly collect information from children under 13.
            </p>
          </section>
          
          <section>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
          </section>
          
          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: info@palocal.co
            </p>
          </section>
        </div>
        
        <div className="back-to-home">
          <a href="/" className="btn btn-outline">Back to Home</a>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 