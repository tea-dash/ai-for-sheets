import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Support from './components/Support'
import PostInstallTips from './components/PostInstallTips'

function App() {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/support" element={<Support />} />
        <Route path="/post-install-tips" element={<PostInstallTips />} />
        <Route path="/" element={
          <div className="App">
            <header>
              <Navbar mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
              <Hero />
            </header>
            
            <main>
              <Features />
              <HowItWorks />
              <CTA />
            </main>
            
            <Footer />
          </div>
        } />
      </Routes>
      <Analytics />
    </Router>
  )
}

export default App
