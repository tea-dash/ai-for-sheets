import * as React from 'react'

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">Last updated: March 19, 2024</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We collect information you provide when using the Google Sheets add-on</li>
          <li>We access your Google Sheets data only when you actively use the add-on</li>
          <li>We process your queries and commands within the add-on</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Information</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>To provide AI assistance with your spreadsheet data</li>
          <li>To process your requests and commands</li>
          <li>To improve our service functionality</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We do not store your personal data or spreadsheet content</li>
          <li>All processing is done in real-time</li>
          <li>We use industry-standard security measures</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>We use OpenAI's API to process queries</li>
          <li>Your queries are processed according to OpenAI's privacy standards</li>
          <li>No personal data is permanently stored by third parties</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>You can revoke access to the add-on at any time</li>
          <li>You can request information about your data</li>
          <li>You can contact us for any privacy concerns</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Information</h2>
        <p className="mb-4">
          <a href="mailto:info@palocal.co" className="text-primary hover:text-primary-dark">
            info@palocal.co
          </a>
        </p>
      </div>
    </div>
  )
}

export default PrivacyPage 