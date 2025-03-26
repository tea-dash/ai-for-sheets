import './TermsOfService.css';

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="terms-of-service">
      <div className="container">
        <div className="section-header">
          <h1>Terms of Service</h1>
          <p>Last Updated: {currentDate}</p>
        </div>
        
        <div className="terms-content">
          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using AI for Sheets ("Application"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Application.
            </p>
          </section>
          
          <section>
            <h2>Description of Service</h2>
            <p>
              AI for Sheets is a Google Workspace application that provides AI-powered assistant tools for analyzing and working with spreadsheet data.
            </p>
          </section>
          
          <section>
            <h2>User Accounts</h2>
            <p>
              To use our Application, you must have a Google Workspace account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
          </section>
          
          <section>
            <h2>User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the Application for any illegal purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Interfere with or disrupt the Application or servers</li>
              <li>Attempt to gain unauthorized access to any part of the Application</li>
              <li>Use the Application to transmit harmful code or material</li>
              <li>Infringe the intellectual property rights of others</li>
            </ul>
          </section>
          
          <section>
            <h2>Intellectual Property</h2>
            <p>
              The Application, including all content, features, and functionality, is owned by us and is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>
          
          <section>
            <h2>User Content</h2>
            <p>
              You retain ownership of any content you submit through the Application. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display the content for the purpose of operating and improving the Application.
            </p>
          </section>
          
          <section>
            <h2>Third-Party Services</h2>
            <p>
              Our Application may integrate with third-party services. Your use of such services is subject to their respective terms and policies.
            </p>
          </section>
          
          <section>
            <h2>Disclaimer of Warranties</h2>
            <p>
              THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APPLICATION WILL BE UNINTERRUPTED OR ERROR-FREE.
            </p>
          </section>
          
          <section>
            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE APPLICATION.
            </p>
          </section>
          
          <section>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, damages, liabilities, and expenses arising out of your use of the Application or violation of these Terms.
            </p>
          </section>
          
          <section>
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to the Application at any time, without prior notice, for any reason.
            </p>
          </section>
          
          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of California, without regard to its conflict of law provisions.
            </p>
          </section>
          
          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Your continued use of the Application after any changes indicates your acceptance of the modified Terms.
            </p>
          </section>
          
          <section>
            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </section>
          
          <section>
            <h2>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and us regarding the Application.
            </p>
          </section>
          
          <section>
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
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

export default TermsOfService; 