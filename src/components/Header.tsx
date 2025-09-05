import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Sparkles, MapPin } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gold-finance', label: 'Gold Finance' },
    { path: '/property-valuation', label: 'Property Valuation' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-gradient-to-r from-slate-900/30 via-blue-900/30 to-indigo-900/30 backdrop-blur-md'
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-between items-center py-2 sm:py-2.5 lg:py-3">
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-base">GF</span>
                <div className="absolute -top-0.5 -right-0.5">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-300 animate-pulse" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg sm:rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ${
                isScrolled ? '' : 'text-white'
              } group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300`}>
                <span className="hidden lg:inline">Gold Finance & Property</span>
                <span className="lg:hidden">GF & Property</span>
              </h1>
              <p className={`text-xs sm:text-sm font-medium ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              } group-hover:text-orange-400 transition-colors duration-300`}>
                <span className="hidden xl:inline">Your Trusted Financial Partner</span>
                <span className="xl:hidden">Trusted Partner</span>
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`relative px-1 xl:px-2 py-2 font-semibold text-xs xl:text-sm transition-all duration-300 group whitespace-nowrap ${
                  isActivePath(item.path)
                    ? isScrolled 
                      ? 'text-purple-600' 
                      : 'text-yellow-400'
                    : isScrolled 
                      ? 'text-gray-800 hover:text-purple-600' 
                      : 'text-white hover:text-yellow-400'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full ${
                  isActivePath(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-4 2xl:space-x-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-green-400/20">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9788752611</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-400/20">
              <Mail className="w-3.5 h-3.5" />
              <span>info@goldfinance.com</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-400/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>Tamil Nadu</span>
            </div>
          </div>

          <button
            className={`lg:hidden p-2 sm:p-3 rounded-xl transition-all duration-300 ${
              isScrolled ? 'text-gray-900 hover:bg-purple-100' : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl shadow-xl rounded-xl sm:rounded-2xl mt-2 py-3 sm:py-6 mx-2 sm:mx-4 border border-gray-200/50 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2 sm:space-y-4 px-3 sm:px-6">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left font-semibold text-sm sm:text-base py-2 px-3 sm:px-4 rounded-lg transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 shadow-md'
                      : 'text-gray-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-md'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-2 sm:pt-4 border-t border-gray-200 space-y-1.5 sm:space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-xs sm:text-sm">+91 9788752611</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-xs sm:text-sm">info@goldfinance.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span className="font-medium text-xs sm:text-sm">Tamil Nadu 627005</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};