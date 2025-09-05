import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Heart, Star, Zap, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700", name: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/919788752611", color: "hover:bg-green-600", name: "WhatsApp" },
  ];

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gold-finance', label: 'Gold Finance' },
    { id: 'property-valuation', label: 'Property Valuation' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' }
  ];

  const contactDetails = [
    { icon: Phone, label: "Call Us", value: "+91 9788752611 / +91 8838766508 / +91 8838768756", color: "text-green-400" },
    { icon: Mail, label: "Email Us", value: "info@goldfinance.com", color: "text-blue-400" },
    { icon: MapPin, label: "Visit Us", value: "Plot No:2 Jain Shanthi Villa, Tamil Nadu 627005", color: "text-purple-400" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Enhanced Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">GF</span>
                </div>
                <div className="absolute -top-1 -right-1">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-spin" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Gold Finance & Property
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>Your Trusted Financial Partner</span>
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              With over <span className="text-yellow-400 font-semibold">15 years of experience</span>, we provide 
              <span className="text-blue-400 font-semibold"> secure gold financing solutions</span> and 
              <span className="text-purple-400 font-semibold"> accurate property valuations</span>, combining 
              traditional expertise with modern technology.
            </p>
            
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-xl sm:rounded-2xl flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl group`}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group py-1 sm:py-2 text-sm sm:text-base"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {contactDetails.map((contact, idx) => (
                <div key={idx} className="flex items-start space-x-2 sm:space-x-3 group">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                    <contact.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-yellow-400 transition-colors text-sm sm:text-base">
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mt-8 sm:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
                © 2024 Gold Finance & Property. All rights reserved.
              </p>
              <div className="hidden sm:flex items-center space-x-1">
                <span className="text-gray-500">Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span className="text-gray-500">for our customers</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 sm:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, idx) => (
                <a 
                  key={idx}
                  href="#" 
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-300 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span>Instant Processing</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                <span>5-Star Rated Service</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                <span className="hidden sm:inline">Customer Satisfaction Guaranteed</span>
                <span className="sm:hidden">Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};