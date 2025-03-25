import React from 'react'

const PrivacyPage = () => {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to AI for Sheets ("we," "our," or "us"). We are committed to protecting your privacy and handling your data with transparency and care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p className="mt-4">
                By accessing or using our service, you agree to this Privacy Policy. If you do not agree, please do not access or use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you provide directly to us, such as:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Payment information</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">2.2 Spreadsheet Data</h3>
              <p>
                When you use our service, we process the data contained in your spreadsheets to provide AI-powered features. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Numerical data and formulas</li>
                <li>Text entries</li>
                <li>Metadata about your spreadsheet structure</li>
                <li>Any other information contained in your spreadsheets</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">2.3 Usage Information</h3>
              <p>
                We automatically collect certain information when you use our service, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information</li>
                <li>Usage patterns and preferences</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Providing, maintaining, and improving our service</li>
                <li>Processing transactions</li>
                <li>Sending service-related communications</li>
                <li>Responding to your requests and inquiries</li>
                <li>Understanding user behavior and preferences</li>
                <li>Detecting and preventing fraud and security incidents</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>With service providers who perform services on our behalf</li>
                <li>In connection with a business transaction (e.g., merger or acquisition)</li>
                <li>When required by law or to protect rights and safety</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information or spreadsheet data to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Accessing, correcting, or deleting your information</li>
                <li>Withdrawing consent</li>
                <li>Restricting or objecting to processing</li>
                <li>Data portability</li>
                <li>Lodging a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Children's Privacy</h2>
              <p>
                Our service is not directed to children under 16, and we do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us to have it removed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> privacy@aiforsheets.com<br />
                <strong>Address:</strong> 123 AI Street, San Francisco, CA 94103
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage 