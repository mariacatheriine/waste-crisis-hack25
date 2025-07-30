import React, { useState, useEffect } from 'react';
import { 
  Recycle, 
  Users, 
  MapPin, 
  DollarSign, 
  Leaf, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Search,
  Filter,
  Award,
  Globe,
  Trash2,
  Factory,
  Home,
  ShoppingCart,
  Star,
  BarChart3
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = "transform transition-all duration-700 ease-out";
  const visibleClass = "translate-y-0 opacity-100";
  const hiddenClass = "translate-y-8 opacity-0";

  const WasteCard = ({ icon: Icon, title, description, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const StatCard = ({ number, label, icon: Icon }) => (
    <div className="text-center">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-emerald-600" />
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );

  const HowItWorksStep = ({ number, title, description, icon: Icon }) => (
    <div className="relative">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {number}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <Icon className="w-6 h-6 text-emerald-600" />
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">WasteTrade</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transform 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Waste </span>
              into 
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Wealth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Connect households with industries through our innovative platform that turns everyday waste 
              into valuable resources, promoting a circular economy and cleaner urban environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2">
                <span>Start Trading Waste</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Urban Waste Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Improper disposal of household waste has become a growing concern in urban environments, 
              contributing to pollution and poor sanitation due to limited awareness and inadequate infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <StatCard 
              number="2.01B" 
              label="Tons of waste generated annually" 
              icon={Trash2}
            />
            <StatCard 
              number="70%" 
              label="Waste that could be recycled" 
              icon={Recycle}
            />
            <StatCard 
              number="3.4B" 
              label="People lacking proper waste services" 
              icon={Users}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <WasteCard
              icon={Home}
              title="Kitchen Waste"
              description="Organic materials from households that can be composted or converted into biogas for sustainable energy production."
              color="bg-gradient-to-br from-green-500 to-emerald-600"
            />
            <WasteCard
              icon={Factory}
              title="Scrap Metal"
              description="Valuable metals from appliances and electronics that can be recycled into new products by manufacturing industries."
              color="bg-gradient-to-br from-gray-500 to-slate-600"
            />
            <WasteCard
              icon={Globe}
              title="Used Paper"
              description="Paper products that can be recycled into new paper materials, reducing the need for fresh wood pulp."
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
            />
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solution: WasteTrade Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A revolutionary platform that connects waste producers with waste consumers, 
              creating a sustainable marketplace for urban waste management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Turning Problems into Opportunities
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Decentralized Marketplace</h4>
                    <p className="text-gray-600">Connect directly with buyers and sellers in your area, eliminating middlemen and maximizing value.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Smart Matching</h4>
                    <p className="text-gray-600">AI-powered matching system based on location, waste type, and quantity requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Fair Pricing</h4>
                    <p className="text-gray-600">Dynamic pricing system that ensures fair compensation while keeping materials affordable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500T</div>
                  <div className="text-gray-600">Waste Traded</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">80%</div>
                  <div className="text-gray-600">CO2 Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How WasteTrade Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, efficient, and sustainable. Our platform makes waste trading accessible to everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* For Sellers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Home className="w-8 h-8 text-emerald-600 mr-3" />
                For Waste Producers
              </h3>
              <div className="space-y-8">
                <HowItWorksStep
                  number="1"
                  title="List Your Waste"
                  description="Upload photos and details of your waste materials. Our smart categorization helps classify your items automatically."
                  icon={ShoppingCart}
                />
                <HowItWorksStep
                  number="2"
                  title="Set Your Price"
                  description="Use our fair pricing algorithm to set competitive prices, or let buyers make offers based on market demand."
                  icon={DollarSign}
                />
                <HowItWorksStep
                  number="3"
                  title="Connect & Trade"
                  description="Get matched with nearby buyers and arrange convenient pickup times. Track your earnings and environmental impact."
                  icon={Users}
                />
              </div>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Factory className="w-8 h-8 text-teal-600 mr-3" />
                For Waste Consumers
              </h3>
              <div className="space-y-8">
                <HowItWorksStep
                  number="1"
                  title="Search & Filter"
                  description="Browse available waste materials in your area. Filter by type, quantity, quality, and price to find exactly what you need."
                  icon={Search}
                />
                <HowItWorksStep
                  number="2"
                  title="Compare & Choose"
                  description="Compare offerings from multiple sellers. Check quality ratings, reviews, and pickup options before making your decision."
                  icon={Filter}
                />
                <HowItWorksStep
                  number="3"
                  title="Purchase & Track"
                  description="Complete secure transactions and schedule pickups. Track your orders and leave reviews to build community trust."
                  icon={Award}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced features designed to make waste trading efficient, profitable, and sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MapPin}
              title="Geolocation Matching"
              description="Smart location-based matching connects you with the nearest trading partners, reducing transport costs and carbon footprint."
            />
            <FeatureCard
              icon={DollarSign}
              title="Fair Pricing System"
              description="Dynamic pricing bands ensure fair compensation for sellers while keeping materials affordable for buyers."
            />
            <FeatureCard
              icon={BarChart3}
              title="Quality Assessment"
              description="Built-in quality rating system with photo verification ensures transparency and builds trust between traders."
            />
            <FeatureCard
              icon={Award}
              title="Community Credits"
              description="Earn points for sustainable trading practices and unlock exclusive benefits and discounts."
            />
            <FeatureCard
              icon={TrendingUp}
              title="Bulk Discounts"
              description="Automatic bulk pricing incentives encourage larger transactions and reduce handling overhead."
            />
            <FeatureCard
              icon={Star}
              title="Reputation System"
              description="Build your trading reputation through verified transactions and peer reviews for better deals."
            />
          </div>
        </div>
      </section>

      {/* Pricing System */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fair Trade Pricing System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our transparent pricing model ensures economic sustainability for both waste producers and consumers.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Tier</h3>
                <p className="text-gray-600">For small household quantities</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kitchen Waste</span>
                  <span className="font-semibold">$0.05-0.15/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paper</span>
                  <span className="font-semibold">$0.10-0.30/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scrap Metal</span>
                  <span className="font-semibold">$0.50-1.50/kg</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-emerald-600 font-medium">✓ Quality Bonus: +10%</div>
                <div className="text-sm text-emerald-600 font-medium">✓ Community Credits</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-8 shadow-xl text-white relative">
              <div className="absolute top-4 right-4 bg-white/20 text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Bulk Tier</h3>
                <p className="text-emerald-100">For larger quantities (50kg+)</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-emerald-100">Kitchen Waste</span>
                  <span className="font-semibold">$0.12-0.25/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-100">Paper</span>
                  <span className="font-semibold">$0.25-0.45/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-100">Scrap Metal</span>
                  <span className="font-semibold">$1.20-2.50/kg</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-emerald-100 font-medium">✓ Quality Bonus: +20%</div>
                <div className="text-sm text-emerald-100 font-medium">✓ Bulk Discount: 15%</div>
                <div className="text-sm text-emerald-100 font-medium">✓ Priority Matching</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Tier</h3>
                <p className="text-gray-600">For commercial quantities (500kg+)</p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kitchen Waste</span>
                  <span className="font-semibold">$0.20-0.35/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paper</span>
                  <span className="font-semibold">$0.35-0.60/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Scrap Metal</span>
                  <span className="font-semibold">$2.00-4.00/kg</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-emerald-600 font-medium">✓ Quality Bonus: +30%</div>
                <div className="text-sm text-emerald-600 font-medium">✓ Bulk Discount: 25%</div>
                <div className="text-sm text-emerald-600 font-medium">✓ Dedicated Support</div>
                <div className="text-sm text-emerald-600 font-medium">✓ Custom Contracts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Urban Waste?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join thousands of users who are already making a positive impact on their communities 
            while earning from their waste. Start your sustainable journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Join as Seller</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <Factory className="w-5 h-5" />
              <span>Join as Buyer</span>
            </button>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Platform Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Secure Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">0%</div>
              <div className="opacity-90">Commission on First Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">WasteTrade</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming urban waste management through innovative technology and community collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WasteTrade. All rights reserved. Building a sustainable future, one trade at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;