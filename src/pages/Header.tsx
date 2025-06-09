import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { Button } from '@/components/ui/button'; // Assuming your Button component path
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/20 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center mr-3 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/25">
                <span className="text-white font-bold text-lg">M</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-20"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                MedLink
              </span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Healthcare Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1"> 
            <Link 
              to="/" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/80 group"
            >
              Home
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </Link>
            <Link 
              to="/services" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/80 group"
            >
              Services
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </Link>
            <Link 
              to="/about" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/80 group"
            >
              About
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </Link>
            <Link 
              to="/contact" 
              className="relative px-4 py-2 text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/80 group"
            >
              Contact
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/login">
              <Button 
                variant="ghost" 
                className="text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 font-medium px-6 py-2 transition-all duration-300 rounded-xl"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl transform hover:scale-105">
                Get Started
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/20 shadow-lg">
            <div className="px-4 py-6 space-y-3">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-lg font-medium transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center text-gray-700 hover:text-blue-700 hover:bg-blue-50/80 font-medium py-3 rounded-lg"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full justify-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 shadow-lg rounded-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;