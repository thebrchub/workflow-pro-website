export default function FeatureGrid({ featureDeck, visibleSections }) {
  return (
    <section 
      id="features" 
      data-section 
      className={`py-24 px-6 lg:px-8 relative z-10 transition-opacity duration-1000 ${visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- Section Header (Matches the "Our Workflow" divider in image) --- */}
        <div className="flex flex-col items-center text-center mb-16">
          
          {/* The "Pill" with lines on side */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 uppercase tracking-wider shadow-inner">
              Our workflow
            </div>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            How our platform <br className="hidden md:block" />
            makes your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">workflow easier</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl font-light">
             Eliminate manual bottlenecks with autonomous agents that handle the heavy lifting, keeping your data audit-ready.
          </p>
        </div>

        {/* --- The Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureDeck.map((item, i) => (
            <div 
              key={i} 
              className="group relative bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white/90 group-hover:text-purple-300 transition-colors" size={24} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}