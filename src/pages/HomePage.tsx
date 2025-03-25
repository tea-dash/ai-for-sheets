import * as React from 'react'

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-dark">
                Transform Your Spreadsheets with <span className="text-primary">AI</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                AI for Sheets brings the power of artificial intelligence to your spreadsheets. Automate tasks, get insights, and save time with our powerful AI tools.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                  Get Started
                </a>
                <a href="#features" className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://placehold.co/600x400/4F46E5/FFFFFF?text=AI+for+Sheets" 
                alt="AI for Sheets Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-gray-600">
              Our AI-powered tools help you work smarter, not harder, with your spreadsheets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Automated Data Entry (Coming Soon)</h3>
              <p className="text-gray-600">
                Let AI handle your data entry tasks. Extract data from documents, emails, and more with just a few clicks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Analysis</h3>
              <p className="text-gray-600">
                Get insights from your data automatically. Identify trends, outliers, and patterns without complex formulas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">
                Automate your scheduling tasks. Plan projects, set reminders, and organize your workflow efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600">
              Thousands of users love AI for Sheets. Here's what some of them have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  JS
                </div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-gray-500 text-sm">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "AI for Sheets has saved me hours of work every week. The data analysis tools are incredible and have helped us make better marketing decisions."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  SL
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Lee</h4>
                  <p className="text-gray-500 text-sm">Financial Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The automated data entry features have eliminated so many errors in our financial reports. I can trust the data now and focus on analysis instead of data cleaning."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  TP
                </div>
                <div>
                  <h4 className="font-semibold">Tom Parker</h4>
                  <p className="text-gray-500 text-sm">Project Manager</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Smart scheduling has transformed how we manage our projects. We've reduced planning time by 40% and everyone on the team loves the intuitive interface."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your spreadsheets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving time and getting more insights with AI for Sheets.
          </p>
          <a href="#" className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Get Started for Free
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage 