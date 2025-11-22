import { ArrowRight, CheckCircle2, Sparkles, CreditCard, TrendingUp, Activity } from 'lucide-react';

export default function Hero({ calculateSavings, onCTAClick }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* --- Background Glow (The Pink Arch) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* --- Top Badge: "Simplify your workflow" --- */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 blur-sm group-hover:opacity-50 transition-opacity" />
            <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-sm text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></span>
              <span className="tracking-wide">Simplify your HR workflow</span>
            </div>
            {/* Decorative lines on sides */}
            <div className="absolute top-1/2 right-full w-12 h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
            <div className="absolute top-1/2 left-full w-12 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>
        </div>

        {/* --- Main Headings --- */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
          Enhance your <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">financial control</span>
          <br /> with AI-Driven HR
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Streamline your business's financial management with our intuitive, 
          scalable SaaS platform. Designed for U.S. enterprises to automate 70% of admin.
        </p>

        {/* --- CTA Button --- */}
        <div className="flex flex-col items-center gap-4 mb-20">
          <button 
            onClick={onCTAClick}
            className="bg-white text-black hover:bg-gray-200 transition-all px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get started <ArrowRight size={18} />
          </button>
          <p className="text-xs text-gray-500">No credit card required • 14-day free trial</p>
        </div>

        {/* --- The "Glass" Dashboard Visual --- */}
        <div className="relative max-w-4xl mx-auto mt-12 perspective-1000">
          
          {/* 1. Left Floating Card (Credit Card style) */}
          <div className="hidden md:block absolute top-10 -left-12 z-20 animate-float-slow">
            <div className="bg-black/60 border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl w-64">
              <div className="flex justify-between items-center mb-4">
                <div className="p-2 bg-white/5 rounded-lg"><CreditCard size={20} className="text-pink-500" /></div>
                <span className="text-xs text-gray-400">Virtual Card</span>
              </div>
              <div className="text-left">
                <div className="text-gray-400 text-xs mb-1">Monthly Savings</div>
                <div className="text-xl font-bold text-white">₹{calculateSavings().toLocaleString()}</div>
              </div>
            </div>
          </div>

          {/* 2. Right Floating Card (Cashflow) */}
          <div className="hidden md:block absolute top-20 -right-12 z-20 animate-float-delayed">
             <div className="bg-black/60 border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl w-64">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-white">Cashflow</span>
                </div>
                <ArrowRight size={14} className="text-gray-500" />
              </div>
              <div className="text-2xl font-bold text-white text-left mt-2">$1,570,090.00</div>
              <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-green-500 w-[70%] h-full rounded-full"></div>
              </div>
            </div>
          </div>

          {/* 3. Center Main Dashboard (Phone/App View) */}
          <div className="relative z-10 bg-gradient-to-b from-white/10 to-black/40 border border-white/10 p-2 rounded-[32px] backdrop-blur-2xl shadow-2xl">
            <div className="bg-black rounded-[24px] overflow-hidden border border-white/5 relative aspect-[16/10] md:aspect-[2/1]">
              
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
                <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">$14,090,090.00</div>
                <div className="inline-flex items-center gap-1 mt-4 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-medium">
                  <TrendingUp size={12} /> +12.5% this month
                </div>

                {/* Fake List Items inside app */}
                <div className="mt-12 space-y-3">
                   {[1,2].map((i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-white/10"></div>
                           <div className="space-y-1">
                             <div className="w-24 h-2 bg-white/20 rounded"></div>
                             <div className="w-16 h-2 bg-white/10 rounded"></div>
                           </div>
                        </div>
                        <div className="text-white font-medium">$5,200.00</div>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          {/* Glow Under Dashboard */}
          <div className="absolute -bottom-10 left-0 right-0 h-20 bg-fuchsia-500/30 blur-[60px] rounded-full mx-10"></div>
        </div>

        {/* --- Logos Section --- */}
        <div className="mt-32 flex flex-col items-center gap-6">
          <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 backdrop-blur-sm">
            Trusted over 2k+ companies
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 opacity-80">
             {/* Simple Pill Logos */}
             {['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'].map((logo, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-black/20 hover:bg-white/5 transition-colors">
                   <div className="w-4 h-4 rounded-full bg-white/20"></div>
                   <span className="text-sm font-medium text-white/70">{logo}</span>
                </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}