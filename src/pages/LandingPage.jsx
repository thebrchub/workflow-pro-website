import { useState, useEffect, useRef } from 'react';
import { 
  Zap, Shield, BarChart3, Users, Clock, Globe, 
  Menu, X, ChevronRight, ArrowRight, Check, 
  CreditCard, TrendingUp, Activity, CheckCircle, Star,
  Mail, Phone, MapPin, Twitter, Linkedin, Github
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* GLOBAL STYLES (For Animation)               */
/* -------------------------------------------------------------------------- */

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    font-family: 'Inter', sans-serif;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
  }

  @keyframes infinite-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .animate-infinite-scroll {
    animation: infinite-scroll 30s linear infinite;
  }
`;

/* -------------------------------------------------------------------------- */
/* COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

/* --- NEW: Canvas Starfield Component --- */
function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const numStars = 150;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // init

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2,
        alpha: Math.random(),
        speed: Math.random() * 0.2 + 0.05
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw stars
      stars.forEach(star => {
        star.y -= star.speed; // Move up slowly
        // Reset if off screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.5})`; // Subtle opacity
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
}

/* --- Background Effects (Updated to include Canvas) --- */
function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* The Canvas Starfield */}
      <Starfield />

      {/* Top Left "Spotlight" Beam */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-purple-900/20 blur-[120px] mix-blend-screen" />
      {/* Pink Accent Glow (Top Left) */}
      <div className="absolute top-[5%] left-[10%] w-[20vw] h-[20vw] rounded-full bg-pink-600/20 blur-[100px]" />
      {/* Center/Bottom Glow for the "Arc" area */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50vw] h-[30vw] bg-fuchsia-900/10 blur-[100px] rounded-full" />
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </div>
  );
}

/* --- Navigation --- */
function Nav({ mobileOpen, setMobileOpen, scrolled, onNavClick }) {
  const links = [
    { name: 'Features', id: 'features' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div 
  className="flex items-center cursor-pointer"
  onClick={() => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <img 
    src="/logo/logo1.svg"
    alt="Quantacel Logo"
    className="h-10 w-auto object-contain"
  />
</div>


        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <button 
              key={link.name}
              onClick={(e) => onNavClick(e, link.id)} 
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Free Trial
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0A0118] border-b border-white/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {links.map(link => (
            <button 
              key={link.name}
              onClick={(e) => onNavClick(e, link.id)} 
              className="text-left text-gray-300 hover:text-white py-2"
            >
              {link.name}
            </button>
          ))}
          <button className="bg-white text-black w-full py-3 rounded-lg font-bold mt-2">
            Start Free Trial
          </button>
        </div>
      )}
    </nav>
  );
}

/* --- Hero Section --- */
function Hero({ calculateSavings, onCTAClick }) {
  // Logos configuration
  const logoFiles = [7, 8, 9, 10, 11, 12];
  const scrollingLogos = [...logoFiles, ...logoFiles, ...logoFiles]; 

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow (The Pink Arch) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* --- Top Badge with Soft Animated Border Shine --- */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group inline-block">
            {/* Subtle Outer Glow */}
            <div className="absolute inset-0 bg-fuchsia-600/20 blur-lg rounded-full opacity-30 group-hover:opacity-50 transition-opacity" />
            
            {/* Animated Border Wrapper */}
            <div className="relative rounded-full p-[1px] overflow-hidden">
              {/* Soft Spinning Conic Gradient (Reduced opacity for "not harsh" look) */}
              <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(217,70,239,0.7)_50%,transparent_100%)] opacity-70" />
              
              {/* Badge Content */}
              <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0118] border border-white/5 text-sm text-gray-300 backdrop-blur-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></span>
                <span className="tracking-wide">Simplify your HR workflow</span>
              </div>
            </div>
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
          Enhance your <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">financial control</span>
          <br /> with AI-Driven HR
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Streamline your business's financial management with our intuitive, 
          scalable SaaS platform. Designed for Indian enterprises to automate 70% of admin.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <button 
            onClick={onCTAClick}
            className="bg-white text-black hover:bg-gray-200 transition-all px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get started <ArrowRight size={18} />
          </button>
          <p className="text-xs text-gray-500">No credit card required • 14-day free trial</p>
        </div>

        {/* The "Glass" Dashboard Visual */}
        <div className="relative max-w-4xl mx-auto mt-12 perspective-1000">
          
          {/* Left Floating Card */}
          <div className="hidden md:block absolute top-10 -left-12 z-20 animate-[bounce_6s_infinite]">
            <div className="bg-black/60 border border-white/10 backdrop-blur-xl p-4 rounded-[32px] shadow-2xl w-64">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-white/5 rounded-xl"><CreditCard size={20} className="text-pink-500" /></div>
                <span className="text-xs text-gray-400">Virtual Card</span>
              </div>
              <div className="text-left">
                <div className="text-gray-400 text-xs mb-1">Monthly Savings</div>
                <div className="text-xl font-bold text-white">₹{calculateSavings().toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* Right Floating Card */}
          <div className="hidden md:block absolute top-20 -right-12 z-20 animate-[bounce_7s_infinite]">
             <div className="bg-black/60 border border-white/10 backdrop-blur-xl p-4 rounded-[32px] shadow-2xl w-64">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-white">Cashflow</span>
                </div>
                <ArrowRight size={14} className="text-gray-500" />
              </div>
              <div className="text-2xl font-bold text-white text-left mt-2">₹15,70,090.00</div>
              <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 w-[70%] h-full rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Center Main Dashboard */}
          <div className="relative z-10 bg-gradient-to-b from-white/10 to-black/40 border border-white/10 p-2 rounded-[40px] backdrop-blur-2xl shadow-2xl">
            <div className="bg-black rounded-[32px] overflow-hidden border border-white/5 relative aspect-[16/10] md:aspect-[2/1]">
              {/* Header of App */}
              <div className="absolute top-0 left-0 right-0 h-16 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center"><Activity size={16} /></div>
                   <div className="text-sm font-medium text-white">Total Balance</div>
                </div>
                <ArrowRight size={16} className="text-gray-500"/>
              </div>
              {/* Body of App */}
              <div className="p-8 pt-24 text-left">
                <div className="text-sm text-gray-400 mb-2">Available Balance</div>
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">₹1,40,90,090.00</div>
                <div className="inline-flex items-center gap-1 mt-4 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                  <TrendingUp size={12} /> +12.5% this month
                </div>
                <div className="mt-12 space-y-3">
                   {[1,2].map((i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-[20px] bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-white/10"></div>
                           <div className="space-y-1">
                             <div className="w-24 h-2 bg-white/20 rounded"></div>
                             <div className="w-16 h-2 bg-white/10 rounded"></div>
                           </div>
                        </div>
                        <div className="text-white font-medium">₹5,200.00</div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow Under Dashboard */}
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-fuchsia-500/30 blur-[60px] rounded-full mx-10"></div>
        </div>

        {/* --- Infinite Moving Logos Section --- */}
        {/* --- Infinite Moving Logos Section (UPDATED) --- */}
        <div className="mt-32 flex flex-col items-center gap-8 w-full overflow-hidden">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 backdrop-blur-sm z-10 relative">
            Trusted over 2k+ companies
          </div>
          
          {/* Marquee Container */}
          <div className="relative flex overflow-x-hidden w-full max-w-6xl mask-linear-fade">
            {/* Gradient Masks for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-20"></div>

            <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap py-4">
              {scrollingLogos.map((logoNum, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-black/20 hover:bg-white/5 transition-colors min-w-max"
                >
                   <img 
                      src={`/logo/logos/${logoNum}.png`} 
                      alt={`Partner ${logoNum}`} 
                      className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity" 
                      onError={(e) => {
                        // Helps debug if the path is still wrong, logs to console instead of breaking layout
                        console.error(`Could not load image: ${e.target.src}`);
                        // e.target.style.display = 'none'; // Optional: hide broken images
                      }} 
                   />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Feature Grid --- */
function FeatureGrid({ featureDeck, visibleSections }) {
  return (
    <section 
      id="features" 
      data-section 
      className={`py-2 px-6 lg:px-8 relative z-10 transition-all duration-1000 ${visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 uppercase tracking-wider shadow-inner">
              Our workflow
            </div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            How our platform <br className="hidden md:block" />
            makes your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">workflow easier</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl font-light">
             Eliminate manual bottlenecks with autonomous agents that handle the heavy lifting, keeping your data audit-ready.
          </p>
        </div>

        {/* Grid with Soft Spinning Border on Hover */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureDeck.map((item, i) => (
            <div 
              key={i} 
              className="group relative rounded-[32px] p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Spinning Gradient Background (Revealed on Hover, Softened) */}
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(217,70,239,0.5)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] blur-[2px]" />
              
              {/* Card Content */}
              <div className="relative h-full bg-[#0e0d0f] rounded-[31px] p-8 border border-white/10 group-hover:border-transparent transition-colors duration-300 flex flex-col">
                
                {/* Inner Content Glow Effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white/90 group-hover:text-purple-300 transition-colors" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Testimonials --- */
function Testimonials({ testimonials, activeTestimonial, setActiveTestimonial }) {
  return (
    <section id="testimonials" data-section className="py-24 px-6 relative z-10">
       <div className="max-w-5xl mx-auto">
          <div className="bg-white/[0.02] border border-white/5 rounded-[40px] p-10 md:p-16 text-center relative backdrop-blur-sm">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#0A0118] border border-white/10 rounded-full flex items-center justify-center text-fuchsia-500 shadow-xl shadow-fuchsia-900/20">
                <Star fill="currentColor" size={24} />
             </div>
             
             <div className="min-h-[200px] flex flex-col justify-center items-center">
                <p className="text-2xl md:text-4xl font-medium text-white mb-8 leading-snug">
                   "{testimonials[activeTestimonial].text}"
                </p>
                <div>
                   <h4 className="text-lg font-semibold text-white">{testimonials[activeTestimonial].name}</h4>
                   <p className="text-fuchsia-400 text-sm">{testimonials[activeTestimonial].role}</p>
                </div>
             </div>

             {/* Dots */}
             <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                   <button 
                     key={i}
                     onClick={() => setActiveTestimonial(i)}
                     className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? 'w-8 bg-fuchsia-500' : 'w-2 bg-white/10'}`}
                   />
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}

/* --- Pricing --- */
function Pricing({ pricingPlans, pricingToggle, setPricingToggle, employeeCount, setEmployeeCount, calculateSavings, visibleSections }) {
  return (
    <section 
      id="pricing" 
      data-section 
      className={`py-24 px-6 lg:px-8 relative z-10 transition-all duration-1000 ${visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-lg text-gray-400 mb-8">Pay for automation, not just headcount.</p>
          
          <div className="relative p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center">
            <button onClick={() => setPricingToggle('monthly')} className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pricingToggle === 'monthly' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
            <button onClick={() => setPricingToggle('annual')} className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pricingToggle === 'annual' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}>Annual <span className="text-fuchsia-500 ml-1 text-xs font-bold">-20%</span></button>
          </div>
        </div>

        {/* ROI Panel */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-[32px] p-8 md:p-10 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <label className="flex items-center justify-between text-sm font-medium text-gray-300 mb-4">
                  <span>Employee Count</span>
                  <span className="bg-white/10 px-3 py-1 rounded-lg text-white">{employeeCount}</span>
                </label>
                <input type="range" min="50" max="1000" step="10" value={employeeCount} onChange={(e) => setEmployeeCount(parseInt(e.target.value, 10))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 hover:accent-fuchsia-400 transition-all" />
                <div className="flex justify-between text-xs text-gray-500 mt-2"><span>50</span><span>1000+</span></div>
              </div>
              <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400 mb-1">Estimated Monthly Savings</p>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200">₹{calculateSavings().toLocaleString()}</p>
                <p className="text-xs text-fuchsia-400 mt-2">Based on 1.2hrs saved/employee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div key={i} className={`relative group flex flex-col p-8 rounded-3xl border transition-all duration-300 ${plan.popular ? 'bg-white/[0.08] border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] scale-105 z-10' : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-lg">Most Popular</div>}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">{typeof plan[pricingToggle] === 'number' ? `₹${plan[pricingToggle]}` : plan.monthly}</span>
                  {typeof plan[pricingToggle] === 'number' && <span className="text-gray-500 text-sm">/user/mo</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-white/10 text-gray-400'}`}><Check size={12} strokeWidth={3} /></div>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'border border-white/20 text-white hover:bg-white hover:text-black'}`}>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- CTA / Contact --- */
function CTAContact({ formData, setFormData, handleSubmit }) {
   return (
     <section id="contact" data-section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
           <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0A0118]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/20 to-purple-900/20"></div>
              <div className="grid md:grid-cols-2 relative z-10">
                 <div className="p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to modernize your HR?</h2>
                    <p className="text-gray-400 mb-8">Join 2,000+ companies automating their workforce management.</p>
                    <div className="space-y-4">
                       <div className="flex items-center gap-4 text-gray-300"><Mail size={20} className="text-fuchsia-500"/> <span>hello@quantacel.ai</span></div>
                       <div className="flex items-center gap-4 text-gray-300"><Phone size={20} className="text-fuchsia-500"/> <span>+1 (555) 123-4567</span></div>
                       <div className="flex items-center gap-4 text-gray-300"><MapPin size={20} className="text-fuchsia-500"/> <span>San Francisco, CA</span></div>
                    </div>
                 </div>
                 
                 <div className="p-10 md:p-16 bg-white/5 backdrop-blur-sm border-l border-white/10">
                    <div className="space-y-4">
                       <div className="grid grid-cols-2 gap-4">
                          <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 transition-colors" value={formData.firstName} onChange={e=>setFormData({...formData, firstName:e.target.value})} />
                          <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 transition-colors" value={formData.lastName} onChange={e=>setFormData({...formData, lastName:e.target.value})} />
                       </div>
                       <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fuchsia-500 transition-colors" value={formData.email} onChange={e=>setFormData({...formData, email:e.target.value})} />
                       <button onClick={handleSubmit} className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">Request Demo</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
   );
}

/* --- Footer --- */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
          <div className="flex items-center">
            <img 
              src="/logo/logo1.svg"
              alt="Quantacel Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          
        </div>

        <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
          Quantacel is AI driven HRMS software made by <strong>Orvexa Softtech Private Limited</strong>, 
          which is a joint venture company with collaboration of 
          <a 
            href="https://www.thebrchub.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold"
          >
            {" "}Blazing Render Creation Hub LLP
          </a> 
          {" "}and{" "}
          <a 
            href="https://www.legalvala.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-fuchsia-300 font-semibold"
          >
            LVCLegalVala Consultancy LLP
          </a>.
        </p>

        <p className="text-gray-600 text-xs">
          © 2025 Orvexa Softech Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function LandingPage() {
  // State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [pricingToggle, setPricingToggle] = useState('monthly');
  const [employeeCount, setEmployeeCount] = useState(200);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  // Inject styles for animation
 // Inject global fonts + animation styles
useEffect(() => {
  // 1) Preconnect to speed up font loading
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';

  // 2) Load Google Fonts stylesheet
  const fontSheet = document.createElement('link');
  fontSheet.rel = 'stylesheet';
  fontSheet.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';

  // 3) Add your global styles (without @import)
  const styleSheet = document.createElement('style');
  styleSheet.innerText = `
    :root {
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    html, body {
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      margin: 0;
    }
    @keyframes infinite-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    .animate-infinite-scroll {
      animation: infinite-scroll 30s linear infinite;
    }
  `;

  // Append everything
  document.head.appendChild(preconnect1);
  document.head.appendChild(preconnect2);
  document.head.appendChild(fontSheet);
  document.head.appendChild(styleSheet);

  // Cleanup when component unmounts
  return () => {
    preconnect1.remove();
    preconnect2.remove();
    fontSheet.remove();
    styleSheet.remove();
  };
}, []);

  // Scroll handler for navbar and animations
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial auto-rotation
  useEffect(() => {
    const interval = setInterval(() => setActiveTestimonial(prev => (prev + 1) % 3), 6000);
    return () => clearInterval(interval);
  }, []);

  // Calculators & Handlers
  const calculateSavings = () => {
    const hrsSavedPerEmployee = 1.2;
    const avgHRCostPerHour = 500;
    return Math.round(Number(employeeCount) * hrsSavedPerEmployee * avgHRCostPerHour);
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.email) {
      alert('Thanks — demo request received');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }
  };

  const onNavClick = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // --- DATA OBJECTS ---

  const featureDeck = [
    { icon: Zap, title: "Instant Payroll", desc: "Process thousands of payments in seconds with zero errors." },
    { icon: Shield, title: "Compliance Guard", desc: "AI monitors local laws and updates policies automatically." },
    { icon: BarChart3, title: "Smart Analytics", desc: "Predict turnover and engagement trends before they happen." },
    { icon: Users, title: "Auto-Onboarding", desc: "Generate contracts and setup accounts without lifting a finger." },
    { icon: Clock, title: "Time Tracking", desc: "Geo-fenced attendance with biometric verification support." },
    { icon: Globe, title: "Global Hiring", desc: "Hire anyone, anywhere. We handle the taxes and entities." }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", role: "VP of HR, TechFlow", text: "We reduced our admin workload by 85% in just two weeks. It's incredible." },
    { name: "Michael Chen", role: "Founder, StartScale", text: "The AI candidate shortlisting is better than our manual reviews. Highly recommend." },
    { name: "Amara Patel", role: "COO, GlobalDynamics", text: "Compliance used to be a nightmare. Now it's completely automated and stress-free." }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      monthly: 299,
      annual: 239,
      features: ['Payroll for up to 50 employees', 'Basic Compliance', 'Email Support', '1 Admin User'],
      popular: false
    },
    {
      name: 'Growth',
      monthly: 599,
      annual: 479,
      features: ['Unlimited Employees', 'AI Recruitment', 'Advanced Analytics', '24/7 Priority Support', 'Dedicated Account Manager'],
      popular: true
    },
    {
      name: 'Enterprise',
      monthly: 'Custom',
      annual: 'Custom',
      features: ['Custom AI Models', 'SLA Guarantee', 'On-premise Options', 'White Labeling', 'API Access'],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505] text-[#F7F6FB] selection:bg-pink-500 selection:text-white font-sans">
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="relative z-10">
        <Nav mobileOpen={mobileMenuOpen} setMobileOpen={setMobileMenuOpen} scrolled={scrolled} onNavClick={onNavClick} />
        
        <main className="flex flex-col gap-0 md:gap-0">
          <Hero calculateSavings={calculateSavings} onCTAClick={() => document.getElementById('pricing').scrollIntoView({behavior:'smooth'})} />
          
          <div className="flex flex-col gap-0 md:gap-0 w-full">
             <FeatureGrid featureDeck={featureDeck} visibleSections={visibleSections} />
             
             <Testimonials testimonials={testimonials} activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
             
             <Pricing 
               pricingPlans={pricingPlans} 
               pricingToggle={pricingToggle} 
               setPricingToggle={setPricingToggle} 
               employeeCount={employeeCount} 
               setEmployeeCount={setEmployeeCount} 
               calculateSavings={calculateSavings} 
               visibleSections={visibleSections} 
             />
             
             <CTAContact formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}