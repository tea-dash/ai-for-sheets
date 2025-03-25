import React from 'react'

const TermsPage = () => {
  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to AI for Sheets. These Terms of Service ("Terms") govern your access to and use of our website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. If we make changes, we will provide notice by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our Services after any modifications indicates your acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p className="mt-4">
                We reserve the right to suspend or terminate your account if any information provided is inaccurate or if you violate these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Services and Subscription</h2>
              <h3 className="text-lg font-medium mb-2">4.1 Service Description</h3>
              <p>
                AI for Sheets provides artificial intelligence tools and features for spreadsheet management and analysis. Our Services may change over time as we evolve, enhance, and improve our offerings.
              </p>
              
              <h3 className="text-lg font-medium mb-2 mt-4">4.2 Subscription Plans</h3>
              <p>
                We offer different subscription plans for our Services. The features, limitations, and pricing for each plan are described on our website. We reserve the right to modify, terminate, or otherwise amend our offered subscription plans.
              </p>
              
              <h3 className="text-lg font-medium mb-2 mt-4">4.3 Payments and Billing</h3>
              <p>
                By subscribing to a paid plan, you agree to pay all fees associated with your subscription. Unless otherwise stated:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Fees are charged at the beginning of your subscription period</li>
                <li>Subscriptions automatically renew unless cancelled prior to renewal</li>
                <li>No refunds for partial subscription periods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. User Content</h2>
              <p>
                Our Services allow you to upload, store, and process your spreadsheet data and other content ("User Content"). You retain ownership of your User Content.
              </p>
              <p className="mt-4">
                By using our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, store, transmit, and display your User Content as necessary to provide and maintain the Services.
              </p>
              <p className="mt-4">
                You are solely responsible for your User Content and represent that:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>You own or have the necessary rights to your User Content</li>
                <li>Your User Content does not violate the rights of any third party</li>
                <li>Your User Content complies with these Terms and all applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Prohibited Conduct</h2>
              <p>
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Use the Services in any way that violates any applicable law or regulation</li>
                <li>Infringe on the rights of others or engage in harassment or threatening behavior</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any part of the Services</li>
                <li>Use the Services to transmit malware, viruses, or other malicious code</li>
                <li>Reverse engineer or decompile any aspect of the Services</li>
                <li>Use the Services in a manner that exceeds reasonable usage limits</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Intellectual Property</h2>
              <p>
                The Services, including all content, features, and functionality, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                These Terms do not grant you any right, title, or interest in the Services or our content, other than the limited right to use the Services as set forth in these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
              <p className="mt-4">
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL WE, OUR AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless us, our affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">11. Termination</h2>
              <p>
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p className="mt-4">
                Upon termination, your right to use the Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">13. Dispute Resolution</h2>
              <p>
                Any dispute arising from these Terms or your use of the Services shall be resolved through binding arbitration conducted in San Francisco, California, except that you may assert claims in small claims court if your claims qualify.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">14. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> legal@aiforsheets.com<br />
                <strong>Address:</strong> 123 AI Street, San Francisco, CA 94103
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage 