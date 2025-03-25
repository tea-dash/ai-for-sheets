import * as React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          AI for Sheets
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/privacy" className="text-gray-700 hover:text-primary font-medium">
            Privacy
          </Link>
          <Link to="/terms" className="text-gray-700 hover:text-primary font-medium">
            Terms
          </Link>
          <a 
            href="#" 
            className="btn btn-primary"
          >
            Get Started
          </a>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 md:hidden flex flex-col space-y-4 z-50">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/privacy" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Terms
            </Link>
            <a 
              href="#" 
              className="btn btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 