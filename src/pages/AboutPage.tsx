import React from 'react';
import { Star } from 'lucide-react';
import { About } from '../components/About';

export const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Gokulam Legacy Hero Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium mb-8 shadow-lg">
              <Star className="w-5 h-5" />
              <span>The Gokulam Legacy ✨</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
              Building Trust for Over 12 Years
            </h1>
            
            <div className="max-w-5xl mx-auto space-y-8 text-left">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-200">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  For over <span className="text-orange-600 font-bold">12 years</span>, the Gokulam name has been respected for its 
                  <span className="text-yellow-600 font-bold"> strong values</span>, <span className="text-red-600 font-bold">integrity</span>, 
                  and <span className="text-purple-600 font-bold">commitment to society</span>. Guided by the belief in giving back to the community, 
                  the Group continues to create businesses that grow through <span className="text-blue-600 font-bold">excellence and innovation</span>, 
                  while upholding the interests of customers, employees, and society at large.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                  Over the years, the Gokulam brand has come to represent more than just financial strength. It stands for 
                  <span className="text-blue-600 font-bold"> Trust</span>, <span className="text-green-600 font-bold">Quality</span>, 
                  <span className="text-purple-600 font-bold"> Ethical Leadership</span>, and <span className="text-pink-600 font-bold">Respect</span> 
                  for every customer we serve.
                </p>
                
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Anchored in values and driven by vision, <span className="text-orange-600 font-bold">Gokulam Group</span> is building a future 
                  where <span className="text-green-600 font-bold">growth and responsibility</span> go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <About />
    </div>
  );
};