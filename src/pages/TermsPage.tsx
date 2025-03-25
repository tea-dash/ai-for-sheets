import * as React from 'react'

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">Last updated: March 19, 2024</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">By using our Google Sheets add-on, you agree to these terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>AI-powered assistance for Google Sheets</li>
          <li>Query processing and data analysis</li>
          <li>Real-time responses to user requests</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You must use the service legally and appropriately</li>
          <li>You are responsible for your content and queries</li>
          <li>You must not misuse or attempt to abuse the service</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations of Service</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Service is provided "as is"</li>
          <li>We do not guarantee 100% accuracy of AI responses</li>
          <li>Service availability may vary</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>The add-on and its original content remain our property</li>
          <li>Users retain rights to their own content</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We are not liable for any damages from use of service</li>
          <li>We are not responsible for accuracy of AI-generated content</li>
          <li>Users use the service at their own risk</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
        <p className="mb-6">We may modify these terms at any time with notice.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Information</h2>
        <p className="mb-4">
          <a href="mailto:info@palocal.co" className="text-primary hover:text-primary-dark">
            info@palocal.co
          </a>
        </p>
      </div>
    </div>
  )
}

export default TermsPage 