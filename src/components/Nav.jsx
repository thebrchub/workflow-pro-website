import { Menu, X } from 'lucide-react';
export default function Nav({ mobileOpen, setMobileOpen, scrolled, onNavClick }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-sm glass' : 'glass'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg" style={{ background: 'linear-gradient(135deg,var(--primary),var(--primary-2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="font-bold text-sm text-white">Q</span>
            </div>
            <span className="font-semibold text-white">Quantacel</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Features','Pricing','Contact'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} onClick={(e)=>onNavClick(e, i.toLowerCase())} className="text-gray-400 hover:text-white font-medium text-sm transition">{i}</a>
            ))}
            <button className="btn-gradient text-white px-5 py-2 rounded-lg font-medium hover:opacity-95 transition">Start Free Trial</button>
          </div>

          <button className="md:hidden text-gray-400" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black/20 border-t border-white/5">
          <div className="px-6 py-4 space-y-3">
            {['Features','Pricing','Contact'].map(i => (
              <a key={i} href={`#${i.toLowerCase()}`} onClick={(e)=>onNavClick(e, i.toLowerCase())} className="block text-gray-400 hover:text-white font-medium">{i}</a>
            ))}
            <button className="btn-gradient text-white px-6 py-2 rounded-lg font-medium">Start Free Trial</button>
          </div>
        </div>
      )}
    </nav>
  );
}
