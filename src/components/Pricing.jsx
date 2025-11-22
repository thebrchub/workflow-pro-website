import { Check } from 'lucide-react';

export default function Pricing({ pricingPlans, pricingToggle, setPricingToggle, employeeCount, setEmployeeCount, calculateSavings, visibleSections }) {
  return (
    <section 
      id="pricing" 
      data-section 
      className={`py-24 px-6 lg:px-8 relative z-10 transition-opacity duration-1000 ${visibleSections.has('pricing') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header & Toggle --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Pay for automation, not just headcount.
          </p>

          {/* Glass Toggle Pill */}
          <div className="relative p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md flex items-center">
             {/* Sliding Background (Optional simple implementation via active classes) */}
            <button 
              onClick={() => setPricingToggle('monthly')} 
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pricingToggle === 'monthly' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setPricingToggle('annual')} 
              className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pricingToggle === 'annual' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white'}`}
            >
              Annual <span className="text-fuchsia-500 ml-1 text-xs font-bold">-20%</span>
            </button>
          </div>
        </div>

        {/* --- ROI Calculator (Restyled as a "Command Center" panel) --- */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <label className="flex items-center justify-between text-sm font-medium text-gray-300 mb-4">
                  <span>Employee Count</span>
                  <span className="bg-white/10 px-3 py-1 rounded-lg text-white">{employeeCount}</span>
                </label>
                
                {/* Custom Range Slider Styling */}
                <input 
                  type="range" 
                  min="50" 
                  max="1000" 
                  step="10" 
                  value={employeeCount} 
                  onChange={(e) => setEmployeeCount(parseInt(e.target.value, 10))} 
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-fuchsia-500 hover:accent-fuchsia-400 transition-all"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>50</span>
                  <span>1000+</span>
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400 mb-1">Estimated Monthly Savings</p>
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-200">
                  ₹{calculateSavings().toLocaleString()}
                </p>
                <p className="text-xs text-fuchsia-400 mt-2 flex items-center justify-center md:justify-start gap-1">
                   Based on 1.2hrs saved/employee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Pricing Cards --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative group flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white/[0.08] border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] scale-105 z-10' 
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full text-xs font-bold text-white uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white tracking-tight">
                    {typeof plan[pricingToggle] === 'number' ? `₹${plan[pricingToggle]}` : plan.monthly}
                  </span>
                  {typeof plan[pricingToggle] === 'number' && (
                    <span className="text-gray-500 text-sm">/user/mo</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-fuchsia-500/20 text-fuchsia-400' : 'bg-white/10 text-gray-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="leading-tight">{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'border border-white/20 text-white hover:bg-white hover:text-black'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}