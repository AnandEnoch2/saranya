import React, { useState, useEffect } from 'react';
import { Coins, Calculator, Shield, TrendingUp, FileText, Award, CheckCircle, Zap, Star, Phone, Mail, Clock, Users, Target, ArrowRight, Sparkles, CreditCard, Banknote, PiggyBank, DollarSign, Wallet } from 'lucide-react';

export const GoldFinance = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [goldWeight, setGoldWeight] = useState(50);
  const [goldPurity, setGoldPurity] = useState('22k');
  const [isVisible, setIsVisible] = useState(false);
  const [activeScheme, setActiveScheme] = useState(0);
  const [activeBankIndex, setActiveBankIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScheme((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bankInterval = setInterval(() => {
      setActiveBankIndex((prev) => (prev + 1) % 8);
    }, 2500);
    return () => clearInterval(bankInterval);
  }, []);

  const getEstimatedLoan = () => {
    const goldRates = { '24k': 6500, '22k': 5900, '18k': 4800 };
    const rate = goldRates[goldPurity as keyof typeof goldRates];
    const maxLoan = (goldWeight * rate * 0.75);
    return Math.min(loanAmount, maxLoan).toLocaleString();
  };

  const goldLoanFeesAllIndia = [
    { particular: "Service charges on Fresh loan", charge: "Rs 50 per loan account" },
    { particular: "Service charges on Fresh loan under MEI scheme", charge: "0.60% of the loan amount" },
    { particular: "SMS charges", charge: "Rs 5 per quarter at the time of loan closure or renewal" },
    { particular: "Safe Custody Charges", charge: "Rs 5/per gram per month, payable at the time of loan closure or renewal" },
    { particular: "Loan @ Home Charges", charge: "Up to Rs 500 for loan offered at home services" }
  ];

  const goldLoanFeesSouthIndia = [
    { particular: "Service charges on Fresh loan", charge: "0.15% of the loan amount (Minimum Rs.100; Maximum Rs.1,000)" },
    { particular: "Notice Charges", charge: "Rs.30/each on first 3 ordinary notice and Rs 100 for 4th notice" },
    { 
      particular: "CAC (Credit Appraisal Charges) – If total exposure is above Rs 3 lakhs", 
      charge: "For loans:\nAbove Rs 3 lakhs to Rs 5 lakhs: Rs 25\nAbove Rs 5 lakhs to Rs 15 lakh: Rs 40\nAbove Rs 15 lakh to Rs 50 lakh: Rs 50\nAbove Rs 50 lakh: Rs 75" 
    },
    { particular: "Door to Door collection charges (Follow up for interest or loan recovery)", charge: "Rs.150 per customer for recovery made through customer follow up visit" }
  ];

  const bankGoldLoanRates = [
    { lender: "Manappuram", rate: "15.19% p.a.", amount: "Up to Rs. 1.5 crore", color: "from-red-500 to-pink-500" },
    { lender: "SBI Bank", rate: "7.30% onwards", amount: "Rs. 20,000 to Rs. 50 lakh", color: "from-blue-500 to-cyan-500" },
    { lender: "Axis Bank", rate: "13% onwards", amount: "Rs. 25,001 to Rs. 25 Lakh", color: "from-purple-500 to-pink-500" },
    { lender: "SBI", rate: "7.50% onwards", amount: "Rs. 20,000 to Rs. 50 Lakh", color: "from-green-500 to-emerald-500" },
    { lender: "Muthoot Fincorp", rate: "11.99% onwards", amount: "Rs. 1,500 to Unlimited", color: "from-yellow-500 to-orange-500" },
    { lender: "ICICI Bank", rate: "10% onwards", amount: "Rs. 10,000 to Rs. 1 crore", color: "from-indigo-500 to-purple-500" },
    { lender: "Canara Bank", rate: "7.65% p.a.", amount: "Rs. 5,000 to Rs. 20 lakh", color: "from-teal-500 to-cyan-500" },
    { lender: "HDFC Bank", rate: "9.90% onwards", amount: "Rs. 25,000 to Unlimited", color: "from-orange-500 to-red-500" }
  ];

  const gokulamSchemes = [
    {
      scheme: "GL- PR Scheme",
      tenure: ["0-30 Days", "31-60 Days", "61-90 Days"],
      slab: ["12%", "25%", "28%"],
      annualizedRate: "22.03%",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      scheme: "GL – RSM Scheme",
      tenure: ["0-30 Days", "31-60 Days", "61-90 Days"],
      slab: ["18.50", "25.00", "28.00"],
      annualizedRate: "24.30",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      scheme: "GL-RHS",
      tenure: ["0-30 Days", "31-60 Days", "61-90 Days"],
      slab: ["20.50", "27.5", "29.00"],
      annualizedRate: "26.21",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      scheme: "Express Gold Loan",
      tenure: ["0-30 Days", "31-60 Days", "61-90 Days"],
      slab: ["26.00", "27.50", "29.00"],
      annualizedRate: "29.94",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      scheme: "GL – HRSS",
      tenure: ["0-30 Days", "31-60 Days", "61-90 Days"],
      slab: ["26.00", "27.00", "28.00"],
      annualizedRate: "30.32",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Processing",
      description: "Get your gold loan approved and disbursed within 30 minutes with minimal documentation and hassle-free procedures.",
      gradient: "from-yellow-400 to-orange-500",
      delay: "delay-100"
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your gold is stored in bank-grade security vaults with comprehensive insurance coverage and 24/7 monitoring.",
      gradient: "from-blue-400 to-purple-500",
      delay: "delay-200"
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Enjoy some of the most competitive interest rates in the market with transparent pricing and no hidden charges.",
      gradient: "from-green-400 to-emerald-500",
      delay: "delay-300"
    },
    {
      icon: FileText,
      title: "Flexible Repayment",
      description: "Choose from multiple repayment options including monthly EMI, bullet payment, or partial prepayment facilities.",
      gradient: "from-purple-400 to-pink-500",
      delay: "delay-400"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "No Income Proof Required", color: "text-green-500" },
    { icon: CheckCircle, text: "Instant Loan Approval", color: "text-blue-500" },
    { icon: CheckCircle, text: "Competitive Interest Rates", color: "text-purple-500" },
    { icon: CheckCircle, text: "Flexible Tenure Options", color: "text-orange-500" },
    { icon: CheckCircle, text: "Safe & Secure Storage", color: "text-red-500" },
    { icon: CheckCircle, text: "Transparent Pricing", color: "text-indigo-500" },
    { icon: CheckCircle, text: "Quick Documentation", color: "text-pink-500" },
    { icon: CheckCircle, text: "Doorstep Service Available", color: "text-teal-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-3xl mb-6 shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <Coins className="w-10 h-10 text-white" />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-6 h-6 text-yellow-300 animate-spin" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              Gold Finance Solutions
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">Unlock Your Gold's Value</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8">
              Get <span className="text-yellow-600 font-bold">instant loans against your gold</span> with competitive rates, 
              <span className="text-orange-600 font-bold"> minimal documentation</span>, and 
              <span className="text-red-600 font-bold">same-day disbursement</span>. Serving all strata of life across Tamil Nadu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white rounded-2xl font-bold text-lg hover:from-red-500 hover:to-yellow-500 transition-all duration-500 transform hover:scale-105 shadow-2xl">
                <span className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Call +91 9788752611</span>
                </span>
              </button>
              <button className="group px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span>Calculate Loan</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Gold Loan Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-orange-200 mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium mb-6 shadow-lg">
                <Star className="w-5 h-5" />
                <span>About Gold Loan</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Understanding Gold Loans
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="text-yellow-600 font-bold">Gold loan</span> is a secured loan that is offered by the banks and NBFCs against applicant's self-owned gold to be kept as a collateral or security with the lender. Financial institutions offer gold loans by keeping applicant's self-owned <span className="text-orange-600 font-semibold">gold jewellery, coins or ornaments</span> as a collateral or security, which is returned back to the borrower upon timely repayment of loan and in full.
                </p>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Usually, a loan secured with gold ornaments is offered for <span className="text-red-600 font-semibold">short- to medium-term duration</span>. At Paisabazaar, individuals have an option of accessing Gold loan EMI Calculator to calculate the EMIs in lieu of the loan, that shall further help in <span className="text-purple-600 font-semibold">efficient loan planning and monthly budgeting</span>.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Secured Loan</h4>
                    <p className="text-sm text-gray-600">Your gold acts as collateral, ensuring lower interest rates</p>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Short-Medium Term</h4>
                    <p className="text-sm text-gray-600">Flexible tenure options to suit your needs</p>
                  </div>
                  
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">EMI Calculator</h4>
                    <p className="text-sm text-gray-600">Plan your budget with our easy EMI calculator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Loan Calculator */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Services List */}
            <div className="space-y-8">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
                Our Gold Finance Services
              </h3>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 transform transition-all duration-700 ${feature.delay} ${
                      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition-colors cursor-pointer">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Calculator */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-orange-200 relative overflow-hidden sticky top-24">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 opacity-50" />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                      Gold Loan Calculator
                    </h3>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Gold Weight (grams)</label>
                      <input
                        type="range"
                        min="10"
                        max="500"
                        value={goldWeight}
                        onChange={(e) => setGoldWeight(Number(e.target.value))}
                        className="w-full h-3 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>10g</span>
                        <span className="font-bold text-xl text-orange-600">{goldWeight}g</span>
                        <span>500g</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Gold Purity</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['24k', '22k', '18k'].map((purity) => (
                          <button
                            key={purity}
                            onClick={() => setGoldPurity(purity)}
                            className={`py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                              goldPurity === purity
                                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {purity}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-4">Desired Loan Amount</label>
                      <input
                        type="range"
                        min="10000"
                        max="1000000"
                        step="10000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full h-3 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>₹10K</span>
                        <span className="font-bold text-xl text-orange-600">₹{(loanAmount/1000).toFixed(0)}K</span>
                        <span>₹10L</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-orange-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Maximum Eligible Loan Amount</p>
                        <p className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                          ₹{getEstimatedLoan()}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">*Based on 75% of gold value. Final amount subject to verification.</p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-red-500 hover:to-yellow-500 transition-all duration-500 transform hover:scale-105 shadow-2xl relative overflow-hidden group">
                      <span className="relative z-10">Apply for Gold Loan Now</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Highlights of Gold Loan Section */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-yellow-200 mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium mb-6 shadow-lg">
                <Star className="w-5 h-5" />
                <span>Gold Loan Highlights</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Highlights of Gold Loan
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Eligibility</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        To apply for this loan with major banks in India, an individual must own gold and should be above 18 years of age and maximum up to 70 years
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Interest Rate</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Most banks and NBFCs in India offer Gold loan interest rate at competitive interest rates with affordable EMIs and flexible repayment options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Turn Your Gold Ornaments Section */}
          <div className={`bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl mb-16 transform transition-all duration-1000 delay-250 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6 shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span>Golden Opportunities</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Turn Your Gold Ornaments into Golden Opportunities
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-300">
                  Why let your gold jewelry stay idle when it can work for you?
                </h3>
                <p className="text-base sm:text-lg leading-relaxed opacity-90">
                  With <span className="text-yellow-300 font-bold">Gokulam Gold Loan</span>, you can unlock instant funds for your personal or business needs — whether it's for 
                  <span className="text-white font-semibold"> medical emergencies</span>, 
                  <span className="text-white font-semibold"> higher studies</span>, 
                  <span className="text-white font-semibold"> business expansion</span>, or 
                  <span className="text-white font-semibold"> agricultural needs</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Gold Loan Eligibility Criteria Section */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-blue-200 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium mb-6 shadow-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Eligibility Criteria</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Gold Loan Eligibility Criteria
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 border border-blue-100 mb-6">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="text-blue-600 font-bold">Gokulam Bank</span> offers gold loan to applicants between the age of 
                  <span className="text-purple-600 font-bold"> 18-70 years</span>. While the lender has not disclosed the eligibility criteria of its gold loan applicants in detail, the lender may also consider the 
                  <span className="text-pink-600 font-bold">weight and purity of gold</span> pledged by the applicant while evaluating the gold loan eligibility of its applicants, just like other lenders do.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">Purity & Quantity</h4>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="text-yellow-600 font-semibold">Purity and weight of gold articles</span> also affect the loan amount offered to you. The bank appraises your gold articles and extends loans against the appraised value. Do note that the 
                      <span className="text-orange-600 font-semibold">value of gold articles appraised by the bank might be different from its actual value</span>. This also has an impact on the 
                      <span className="text-red-600 font-semibold">interest rate offered to you</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why is Gold Loan preferred Section */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-yellow-200 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-medium mb-6 shadow-lg">
                <Star className="w-5 h-5" />
                <span>Why Choose Gold Loan?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Why is Gold Loan preferred?
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-6 sm:p-8 border border-orange-100 mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 text-center">
                  To meet the <span className="text-yellow-600 font-bold">immediate financial requirements</span>, gold loan is a 
                  <span className="text-orange-600 font-bold"> preferred choice of individuals</span> for several reasons. 
                  Some of those reasons include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Low Interest Rates",
                      description: "As compared to other lending products, such as personal loan, business loan, MSME loan, etc.",
                      gradient: "from-green-400 to-emerald-500"
                    },
                    {
                      icon: Clock,
                      title: "Flexible Repayment Tenure",
                      description: "That varies from few days to several months",
                      gradient: "from-blue-400 to-cyan-500"
                    },
                    {
                      icon: CreditCard,
                      title: "No Pre-payment Charges",
                      description: "Many financial institutions do not levy pre-payment charges on gold loans",
                      gradient: "from-purple-400 to-pink-500"
                    },
                    {
                      icon: FileText,
                      title: "Minimal Documentation",
                      description: "With hassle-free process",
                      gradient: "from-orange-400 to-red-500"
                    },
                    {
                      icon: Zap,
                      title: "Instant Loan Disbursals",
                      description: "Quick processing and immediate fund transfer",
                      gradient: "from-yellow-400 to-orange-500"
                    }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <div className={`w-12 h-12 bg-gradient-to-r ${reason.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <reason.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{reason.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Why Choose Our Gold Finance?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience the best-in-class gold loan services with unmatched benefits
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 text-center group">
                <benefit.icon className={`w-8 h-8 ${benefit.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Loan Fees & Charges - All Over India */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-orange-200 mb-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Gold Loan Fees & Other Charges
            </h3>
            
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Fees & Other Charges - All over India
              </h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Particulars</th>
                      <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goldLoanFeesAllIndia.map((fee, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                        <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">{fee.particular}</td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700">{fee.charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Fees & Other Charges - South Indian Branches
              </h4>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Particulars</th>
                      <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {goldLoanFeesSouthIndia.map((fee, idx) => (
                      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-green-50 transition-colors`}>
                        <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800">{fee.particular}</td>
                        <td className="border border-gray-300 px-6 py-4 text-gray-700 whitespace-pre-line">{fee.charge}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison Table */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-blue-200 mb-12 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Gold Loan Interest Rates Comparison
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Lender</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Gold Loan Interest Rate</th>
                    <th className="border border-gray-300 px-6 py-4 text-left font-bold text-lg">Loan Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bankGoldLoanRates.map((bank, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors ${
                      activeBankIndex === idx ? 'bg-gradient-to-r from-blue-50 to-purple-50 ring-2 ring-blue-200' : ''
                    }`}>
                      <td className="border border-gray-300 px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${bank.color} rounded-lg flex items-center justify-center shadow-lg`}>
                            <Banknote className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-bold text-gray-800">{bank.lender}</span>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-6 py-4 font-bold text-green-600">{bank.rate}</td>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-700">{bank.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 italic">
                You can compare the interest rate charged by other banks on gold loans here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gokulam Gold Loan Schemes */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6 shadow-lg">
                <Star className="w-5 h-5" />
                <span>Gokulam Exclusive Schemes</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Gokulam Type of Gold Loan Fees & Charges
              </h3>
              <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
                Choose from our specially designed gold loan schemes with competitive rates and flexible tenure options
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-white/30 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm">
                <thead>
                  <tr className="bg-white/20 backdrop-blur-sm">
                    <th className="border border-white/30 px-6 py-4 text-left font-bold text-lg text-white">Scheme Loan</th>
                    <th className="border border-white/30 px-6 py-4 text-left font-bold text-lg text-white">Loan Tenure</th>
                    <th className="border border-white/30 px-6 py-4 text-left font-bold text-lg text-white">Slab</th>
                    <th className="border border-white/30 px-6 py-4 text-left font-bold text-lg text-white">Annualized Interest Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {gokulamSchemes.map((scheme, schemeIdx) => (
                    <React.Fragment key={schemeIdx}>
                      {scheme.tenure.map((tenure, tenureIdx) => (
                        <tr key={`${schemeIdx}-${tenureIdx}`} className={`hover:bg-white/10 transition-colors ${
                          activeScheme === schemeIdx ? 'bg-white/15 ring-2 ring-white/30' : ''
                        }`}>
                          {tenureIdx === 0 && (
                            <td 
                              className="border border-white/30 px-6 py-4 font-bold text-white bg-white/10" 
                              rowSpan={scheme.tenure.length}
                            >
                              <div className="flex items-center space-x-2">
                                <div className={`w-6 h-6 bg-gradient-to-r ${scheme.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                                  <Coins className="w-4 h-4 text-white" />
                                </div>
                                <span>{scheme.scheme}</span>
                              </div>
                            </td>
                          )}
                          <td className="border border-white/30 px-6 py-4 text-white font-medium">{tenure}</td>
                          <td className="border border-white/30 px-6 py-4 text-yellow-300 font-bold">{scheme.slab[tenureIdx]}</td>
                          {tenureIdx === 0 && (
                            <td 
                              className="border border-white/30 px-6 py-4 font-bold text-yellow-300 bg-white/10 text-center" 
                              rowSpan={scheme.tenure.length}
                            >
                              {scheme.annualizedRate}
                            </td>
                          )}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-white/90 text-sm">
                * Interest rates are subject to change based on market conditions and RBI guidelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get your gold loan in just 4 easy steps with minimal documentation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Bring Your Gold", desc: "Visit our branch with your gold jewelry or ornaments", icon: Coins, color: "from-yellow-400 to-orange-500" },
              { step: "02", title: "Gold Assessment", desc: "Our experts evaluate purity and weight using advanced testing", icon: Calculator, color: "from-blue-400 to-purple-500" },
              { step: "03", title: "Loan Approval", desc: "Get instant approval with competitive interest rates", icon: CheckCircle, color: "from-green-400 to-emerald-500" },
              { step: "04", title: "Cash Disbursement", desc: "Receive cash immediately or direct bank transfer", icon: CreditCard, color: "from-purple-400 to-pink-500" }
            ].map((process, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-800">{process.step}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {process.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl text-center transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Your Gold Loan?
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us for their gold financing needs. 
              Get instant approval with the best rates in the market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call +91 9788752611</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email Consultation</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold">30 Minutes</p>
                  <p className="text-sm opacity-80">Quick Processing</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-green-300" />
                  <p className="font-bold">100% Safe</p>
                  <p className="text-sm opacity-80">Secure Storage</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-300" />
                  <p className="font-bold">Best Rates</p>
                  <p className="text-sm opacity-80">Competitive Interest</p>
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
          background: linear-gradient(45deg, #f59e0b, #ea580c);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
          transition: all 0.3s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
        }
      `}</style>
    </div>
  );
};