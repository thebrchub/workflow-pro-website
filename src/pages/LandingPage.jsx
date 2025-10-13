import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle, Users, Clock, FileText, TrendingUp, Shield, Zap, ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('[data-animate]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const features = [
    {
      icon: Clock,
      title: 'Smart Attendance Tracking',
      description: 'Real-time attendance with multiple check-in methods including biometric, GPS, and facial recognition'
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive employee profiles, hierarchies, and organizational structure management'
    },
    {
      icon: FileText,
      title: 'Automated Payroll',
      description: 'Generate accurate payslips with automated calculations, deductions, and tax compliance'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reports',
      description: 'Powerful insights with customizable reports and real-time dashboards for better decisions'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with complete data encryption and compliance with labor regulations'
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and systems via our robust API'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '₹0',
      period: '/month',
      description: 'Perfect for startups testing the waters',
      features: [
        'Up to 10 employees',
        'Basic attendance tracking',
        'Monthly reports',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      description: 'Great for small businesses',
      features: [
        'Up to 50 employees',
        'Advanced attendance & leave management',
        'Payroll processing',
        'Weekly reports',
        'Priority email support',
        'Mobile app access',
        'Custom branding'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '₹2,999',
      period: '/month',
      description: 'For growing companies',
      features: [
        'Up to 200 employees',
        'All Basic features',
        'Advanced analytics & dashboards',
        'Custom workflows',
        'API access',
        'Phone & email support',
        'Dedicated account manager',
        'Multi-location support'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited employees',
        'All Pro features',
        'Custom integrations',
        'On-premise deployment option',
        'White-label solution',
        '24/7 premium support',
        'Dedicated infrastructure',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade {
          animation: fadeIn 1s ease-out forwards;
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl' : 'bg-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                WorkFlow Pro
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" onClick={(e) => smoothScroll(e, 'features')} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Features</a>
              <a href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Pricing</a>
              <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="text-gray-200 hover:text-blue-400 transition-colors font-medium">Contact</a>
              <button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" onClick={(e) => smoothScroll(e, 'features')} className="block text-gray-200 hover:text-blue-400 py-2 font-medium">Features</a>
              <a href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="block text-gray-200 hover:text-blue-400 py-2 font-medium">Pricing</a>
              <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="block text-gray-200 hover:text-blue-400 py-2 font-medium">About</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="block text-gray-200 hover:text-blue-400 py-2 font-medium">Contact</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl float-animation" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm animate-fade border border-white/20 shadow-xl">
              🚀 Revolutionize Your HR Management
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-in drop-shadow-2xl">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Workforce Management
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto animate-in" style={{animationDelay: '0.2s'}}>
              Complete HRMS solution from attendance to payslips. Streamline your HR operations and empower your team with WorkFlow Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in" style={{animationDelay: '0.4s'}}>
              <button className="group bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-10 py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-xl">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl">
                Watch Demo
              </button>
            </div>
            <p className="mt-8 text-gray-300 animate-in" style={{animationDelay: '0.6s'}}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 animate-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto border border-white/20">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 aspect-video flex items-center justify-center relative overflow-hidden border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform">
                    <Users className="text-white" size={48} />
                  </div>
                  <p className="text-white text-xl font-semibold">Interactive Dashboard</p>
                  <p className="text-gray-300 mt-2">Real-time workforce analytics at your fingertips</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" data-animate className={`py-24 relative overflow-hidden transition-opacity duration-1000 ${visibleSections.has('features') ? 'animate-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm border border-white/20 shadow-xl">
              ✨ Features
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Everything You Need to Manage Your Team
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Powerful features designed to simplify HR operations and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:bg-white/15"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" data-animate className={`py-24 relative overflow-hidden transition-opacity duration-1000 ${visibleSections.has('pricing') ? 'animate-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm border border-white/20 shadow-xl">
              💰 Pricing
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Flexible pricing for businesses of all sizes. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`group bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-white/20 hover:bg-white/15 ${
                  plan.highlighted ? 'ring-4 ring-blue-500 scale-105 bg-white/15' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white text-center py-3 text-sm font-bold tracking-wide">
                    ⭐ MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-gray-300 mb-6 h-12 text-sm">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-gray-300 text-lg">{plan.period}</span>
                  </div>
                  <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-xl hover:shadow-2xl' 
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                  }`}>
                    {plan.cta}
                  </button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <CheckCircle className="text-green-400 mr-3 flex-shrink-0 mt-0.5" size={22} />
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-200 mb-6 text-lg">Not sure which plan is right for you?</p>
            <button className="bg-white/10 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              Contact Us for Custom Pricing
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" data-animate className={`py-24 relative overflow-hidden transition-opacity duration-1000 ${visibleSections.has('about') ? 'animate-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm border border-white/20 shadow-xl">
                🏢 About Us
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
                Powered by Innovation
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20">
              <p className="text-xl text-white mb-6 leading-relaxed">
                WorkFlow Pro is developed and maintained by <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Orvexa Softech Pvt Ltd</span>, 
                a joint venture between Blazing Render Creation Hub LLP and LVC Legalvala Consultancy Services LLP.
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver HRMS solutions that truly understand 
                your business needs. Our mission is to make workforce management effortless, allowing you to focus on what matters most - growing your business.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:bg-white/15 border border-white/20">
                  <Shield className="text-blue-400 mx-auto mb-3" size={40} />
                  <h4 className="font-bold text-white text-lg mb-2">Trusted & Secure</h4>
                  <p className="text-gray-300 text-sm">Bank-grade security</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:bg-white/15 border border-white/20">
                  <Users className="text-indigo-400 mx-auto mb-3" size={40} />
                  <h4 className="font-bold text-white text-lg mb-2">10,000+ Users</h4>
                  <p className="text-gray-300 text-sm">Happy customers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:bg-white/15 border border-white/20">
                  <TrendingUp className="text-purple-400 mx-auto mb-3" size={40} />
                  <h4 className="font-bold text-white text-lg mb-2">99.9% Uptime</h4>
                  <p className="text-gray-300 text-sm">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" data-animate className={`py-24 relative overflow-hidden transition-opacity duration-1000 ${visibleSections.has('contact') ? 'animate-in' : 'opacity-0'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-sm border border-white/20">
              📞 Get In Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Join thousands of companies already using WorkFlow Pro to streamline their workforce management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition backdrop-blur-sm"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition backdrop-blur-sm"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none backdrop-blur-sm"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-indigo-300" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-white">Visit Us</h4>
                      <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-300" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-white">Email Us</h4>
                      <p className="text-gray-300">contact@workflowpro.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Why Choose WorkFlow Pro?</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>14-day free trial, no credit card required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Implementation support included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Dedicated account manager for Pro+ plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 border border-white/30 hover:bg-white/30">
                  Start Your Free Trial
                  <ArrowRight size={20} />
                </button>
                <p className="mt-4 text-gray-300 text-sm">Get started in less than 2 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/50 backdrop-blur-lg text-gray-300 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">W</span>
                </div>
                <span className="text-2xl font-bold text-white">WorkFlow Pro</span>
              </div>
              <p className="text-sm leading-relaxed">Streamline your workforce management with cutting-edge HRMS solutions.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#features" onClick={(e) => smoothScroll(e, 'features')} className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')} className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Demo</a></li>
                <li><a href="#" className="hover:text-white transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-white transition">About</a></li>
                <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-sm">© 2024 Orvexa Softech Pvt Ltd. All rights reserved.</p>
              <p className="mt-2 text-gray-500 text-xs">A joint venture of Blazing Render Creation Hub LLP & LVC Legalvala Consultancy Services LLP</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}