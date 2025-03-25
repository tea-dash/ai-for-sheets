import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-white">
              AI for Sheets
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transform your spreadsheets with the power of artificial intelligence. Automate tasks, get insights, and save time with AI for Sheets.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:support@aiforsheets.com" className="hover:text-white transition-colors">
                  support@aiforsheets.com
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AI for Sheets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 