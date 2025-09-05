import React, { useState, useEffect } from 'react';
import { Home, MapPin, Ruler, TrendingUp, FileText, Award, Calculator, CheckCircle, Building, Factory, Zap, Star, Users, Shield, Globe, Target, Briefcase, BookOpen, Wrench, PieChart, BarChart3, Clock, Phone, Mail, Landmark, CaseSensitive as University, Banknote, CreditCard, Wallet, DollarSign, PiggyBank } from 'lucide-react';

export const PropertyValuationPage = () => {
  const [propertyType, setPropertyType] = useState('residential');
  const [area, setArea] = useState(1200);
  const [location, setLocation] = useState('prime');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(serviceInterval);
  }, []);

  const getEstimatedValue = () => {
    const baseRates = {
      residential: { prime: 8500, good: 6500, average: 4500 },
      commercial: { prime: 12000, good: 9000, average: 6500 },
      industrial: { prime: 5500, good: 4200, average: 3000 }
    };
    
    const rate = baseRates[propertyType as keyof typeof baseRates][location as keyof typeof baseRates.residential];
    return (area * rate).toLocaleString();
  };

  const coreServices = [
    {
      icon: MapPin,
      title: "Land & Building Valuation",
      description: "Comprehensive valuation services for all types of properties including residential, commercial, and industrial assets with detailed market analysis.",
      gradient: "from-green-400 to-blue-500",
      delay: "delay-100"
    },
    {
      icon: Wrench,
      title: "Technical Assessment & Monitoring",
      description: "Professional technical evaluation and ongoing monitoring services to ensure structural integrity and compliance with building standards.",
      gradient: "from-blue-400 to-purple-500",
      delay: "delay-200"
    },
    {
      icon: PieChart,
      title: "Business Valuation",
      description: "Expert business valuation services for mergers, acquisitions, financial reporting, and strategic decision-making purposes.",
      gradient: "from-purple-400 to-pink-500",
      delay: "delay-300"
    },
    {
      icon: FileText,
      title: "Detailed Valuation Reports",
      description: "Comprehensive reports accepted by banks, NBFCs, legal authorities, insurance companies, and government agencies nationwide.",
      gradient: "from-pink-400 to-red-500",
      delay: "delay-400"
    }
  ];

  const propertyCategories = [
    {
      title: "Residential Properties",
      icon: Home,
      items: ["Luxury Apartments", "Independent Villas", "Residential Plots", "Premium Farmhouses"],
      gradient: "from-green-400 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Commercial Properties", 
      icon: Building,
      items: ["Corporate Offices", "Retail Spaces", "Shopping Malls", "Business Hotels"],
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Industrial Properties",
      icon: Factory,
      items: ["Manufacturing Units", "Industrial Warehouses", "SEZ Properties", "Technology Parks"],
      gradient: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    }
  ];

  const assetClasses = [
    { name: "Office Spaces", icon: Building, color: "text-blue-600" },
    { name: "Residential", icon: Home, color: "text-green-600" },
    { name: "Data Centres & Warehouses", icon: Factory, color: "text-purple-600" },
    { name: "Healthcare & Educational", icon: BookOpen, color: "text-pink-600" },
    { name: "Hospitality", icon: Star, color: "text-yellow-600" },
    { name: "Infrastructure & Industrial", icon: Wrench, color: "text-red-600" },
    { name: "Land Development", icon: MapPin, color: "text-indigo-600" }
  ];

  const clientTypes = [
    { type: "Banks", icon: Building, count: "15+", color: "from-blue-500 to-cyan-500" },
    { type: "NBFCs", icon: Briefcase, count: "25+", color: "from-green-500 to-emerald-500" },
    { type: "ARCs", icon: Shield, count: "10+", color: "from-purple-500 to-pink-500" },
    { type: "Developers", icon: Home, count: "50+", color: "from-yellow-500 to-orange-500" },
    { type: "Corporates", icon: Target, count: "100+", color: "from-red-500 to-pink-500" },
    { type: "Government", icon: Globe, count: "20+", color: "from-indigo-500 to-purple-500" }
  ];

  const capabilities = [
    {
      title: "Asset Valuation",
      items: [
        "Valuation of Movable/Immovable Property",
        "Rent Fixation for Apartments",
        "Bank Loan and Visa Purpose Valuations",
        "Highway Compensation Assessments"
      ],
      icon: Calculator,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Income Tax Valuations",
      items: [
        "Fair Market Value Calculations",
        "Capital Gains Tax Assessments",
        "Wealth Tax and Gift Tax Valuations",
        "Compliance with Direct Tax Laws"
      ],
      icon: FileText,
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Engineering Projects",
      items: [
        "Project Management Consultation",
        "Industrial & Commercial Projects",
        "Township & Infrastructure Development",
        "Safety and Quality Assurance"
      ],
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Property Management",
      items: [
        "Property Management & Accounting",
        "Marketing & Rent/Lease Evaluation",
        "Property Maintenance Services",
        "Techno-Economic Feasibility Studies"
      ],
      icon: Home,
      gradient: "from-yellow-500 to-red-500"
    }
  ];

  const certifications = [
    { name: "Registered Valuer Since 2013", id: "F-24800", icon: Award },
    { name: "IOV Registered Valuer Foundation", id: "IOVRVF/M/L&B/354", icon: Shield },
    { name: "American Society of Civil Engineers", id: "9372611", icon: Globe },
    { name: "Quality Council of India", id: "FM-6057/2018-2019", icon: CheckCircle },
    { name: "Indian Green Building Council", id: "IGBC-IM-01250655", icon: Star }
  ];

  const projectServices = [
    "Project Management", "Cost Management", "Building Consultancy",
    "MEP Design", "Interior Design", "Workplace Solutions",
    "Program Management Office", "Design and Build"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Home className="w-10 h-10 text-white" />
              <div className="absolute -top-2 -right-2">
                <Star className="w-6 h-6 text-blue-300 animate-spin" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Gokulam Associates
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">Property Valuation Services</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8">
              Leading property consultants in India with <span className="text-blue-600 font-bold">50+ professionals</span> and 
              <span className="text-purple-600 font-bold"> 12+ years of expertise</span> delivering accurate, transparent, 
              and reliable valuation solutions across multiple business verticals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-blue-500 transition-all duration-500 transform hover:scale-105 shadow-2xl">
                <span className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +91 9788752611</span>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-purple-500 text-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Request Quote</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Core Valuation Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive valuation and advisory solutions across multiple business verticals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Services List */}
            <div className="space-y-8">
              {coreServices.map((service, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 transform transition-all duration-700 ${service.delay} ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-300 ${
                    activeService === index ? 'animate-bounce' : ''
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Calculator */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-200 relative overflow-hidden sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Property Estimator
                    </h3>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Property Type</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['residential', 'commercial', 'industrial'].map((type) => (
                          <button
                            key={type}
                            onClick={() => setPropertyType(type)}
                            className={`py-3 px-4 rounded-xl text-sm font-bold capitalize transition-all duration-300 transform hover:scale-105 ${
                              propertyType === type
                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Area (sq ft)</label>
                      <input
                        type="range"
                        min="500"
                        max="5000"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>500 sq ft</span>
                        <span className="font-bold text-xl text-blue-600">{area.toLocaleString()} sq ft</span>
                        <span>5000 sq ft</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Location Grade</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['prime', 'good', 'average'].map((loc) => (
                          <button
                            key={loc}
                            onClick={() => setLocation(loc)}
                            className={`py-3 px-4 rounded-xl text-sm font-bold capitalize transition-all duration-300 transform hover:scale-105 ${
                              location === loc
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Estimated Property Value</p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ₹{getEstimatedValue()}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">*Rough estimate. Actual valuation may vary based on detailed assessment.</p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-blue-500 transition-all duration-500 transform hover:scale-105 shadow-2xl relative overflow-hidden group">
                      <span className="relative z-10">Get Professional Valuation</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes Coverage */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Coverage - Asset Classes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Expertise spanning across multiple asset classes with comprehensive market knowledge
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {assetClasses.map((asset, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center group">
                <asset.icon className={`w-12 h-12 ${asset.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                  {asset.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Comprehensive Capabilities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Pioneer firm in property valuation services since 2013, providing expert solutions for over 12 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {capabilities.map((capability, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <capability.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center space-x-3 group/item">
                        <div className={`w-6 h-6 bg-gradient-to-r ${capability.gradient} rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Diverse Clientele
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Serving a wide range of clients across India with professional excellence
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {clientTypes.map((client, idx) => (
              <div key={idx} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <client.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {client.type}
                </h4>
                <p className="text-2xl font-bold text-blue-600">{client.count}</p>
                <p className="text-xs text-gray-500">Clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-blue-200 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12">
              Certifications & Professional Credentials
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className="text-center group p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-mono bg-gray-100 px-3 py-1 rounded-lg">
                    {cert.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project & Development Services */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Project & Development Services
              </h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
                Our Project & Development advisors bring a long-term perspective that minimizes risk and drives value 
                throughout design and construction to ensure seamless project delivery for occupiers and investors.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {projectServices.map((service, idx) => (
                <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-sm">{service}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center">You Can Rely On Us For:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                  <h5 className="font-bold mb-2">Strategic Advice</h5>
                  <p className="text-sm opacity-90">Project goals and business strategy consultation</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-green-300" />
                  <h5 className="font-bold mb-2">Capital Optimization</h5>
                  <p className="text-sm opacity-90">Maximize ROI from capital expenditure decisions</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="w-12 h-12 mx-auto mb-3 text-blue-300" />
                  <h5 className="font-bold mb-2">Data-Driven Analytics</h5>
                  <p className="text-sm opacity-90">Predictive analytics for strategic decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notable Clients */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Trusted by leading organizations across Tamil Nadu, Kerala, and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Corporate Clients */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Corporate & Business Clients
              </h3>
              
              <div className="space-y-6">
                {[
                  { city: "Madurai", clients: ["Thangamayil Jewellers", "Vishal Promotors", "Pandiyan Hotel", "Aruna Alloys & Steels", "Asian Health & Nutri Foods Ltd", "Rajmahal", "Vishal De Mall", "Dattatreya Textiles Pvt. Ltd", "Ultra College", "Susee Automobiles Ltd", "Pothys", "Sri Sathya Steel", "Saasify Solutions Pvt. Ltd"] },
                  { city: "Chennai", clients: ["Robust Health Care", "Rajalakshmi Educational Trust", "KRR Special Gases", "Srikal Automation Pvt. Ltd", "Southern Automation & Electrical Solutions Pvt. Ltd"] },
                  { city: "Coimbatore", clients: ["Creative Jewellers", "Arem Logistics", "Sri Balaji Spinners"] },
                  { city: "Other Cities", clients: ["Mayura Textile (Tiruppur)", "Vaishnavi Metals (Ambattur)", "Hotel Le-Median (Kochi)", "Pyrologics Systech International LLP (Thiruvallur)", "Sri Ragavendra Minerals (Kanyakumari)", "Venlub Petro Products Pvt. Ltd (Kozhikode)"] }
                ].map((cityGroup, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-lg text-blue-600 mb-3">{cityGroup.city}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cityGroup.clients.map((client, clientIdx) => (
                        <div key={clientIdx} className="text-sm text-gray-700 py-1 px-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                          {client}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking Partners */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-8">
                Banking & Financial Partners
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "BSNL – Government of India", icon: Globe, color: "from-blue-500 to-indigo-500" },
                  { name: "IndusInd Bank – Tamil Nadu, Kerala, Pondicherry", icon: Landmark, color: "from-red-500 to-pink-500" },
                  { name: "HDB Financial Services", icon: CreditCard, color: "from-orange-500 to-red-500" },
                  { name: "PNB Housing Finance", icon: Home, color: "from-blue-600 to-purple-600" },
                  { name: "Bandhan Bank", icon: PiggyBank, color: "from-green-500 to-emerald-500" },
                  { name: "Repco Bank – Tamil Nadu", icon: Banknote, color: "from-teal-500 to-cyan-500" },
                  { name: "L&T Home Finance – Tamil Nadu", icon: Building, color: "from-gray-600 to-gray-800" },
                  { name: "Hiranadhini Home Finance", icon: DollarSign, color: "from-yellow-500 to-orange-500" },
                  { name: "Vastu Home Finance – Chennai", icon: Wallet, color: "from-purple-500 to-pink-500" },
                  { name: "Aditya Birla Housing Finance – Tamil Nadu", icon: Landmark, color: "from-indigo-500 to-purple-500" },
                  { name: "Tamil Nadu Grama Bank", icon: University, color: "from-green-600 to-teal-600" },
                  { name: "Repco Home Finance – Tirunelveli", icon: Home, color: "from-blue-500 to-cyan-500" },
                  { name: "Suryoday Small Finance Bank – Tamil Nadu", icon: PiggyBank, color: "from-yellow-600 to-orange-600" }
                ].map((bank, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl hover:from-green-100 hover:to-blue-100 transition-all duration-300 group">
                    <div className={`w-8 h-8 bg-gradient-to-r ${bank.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <bank.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors text-sm sm:text-base">
                      {bank.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready for Professional Property Valuation?
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Get accurate, bank-approved property valuations from certified professionals. 
              Contact us today for a free consultation and detailed quote.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call +91 9788752611</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Consultation</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold">24-48 Hours</p>
                  <p className="text-sm opacity-80">Quick Turnaround</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-300" />
                  <p className="font-bold">Bank Approved</p>
                  <p className="text-sm opacity-80">Certified Reports</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                  <p className="font-bold">12+ Years</p>
                  <p className="text-sm opacity-80">Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <a
          href="https://wa.me/919788752611"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
          title="Chat with us on WhatsApp"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </div>
  );
};