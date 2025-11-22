export default function Footer(){
  return (
    <footer className="py-10 px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto text-center" style={{ color:'var(--muted)' }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg" style={{ background: 'linear-gradient(135deg,var(--primary),var(--primary-2))', display:'flex', alignItems:'center', justifyContent:'center' }}><span className="text-white font-bold">Q</span></div>
          <div>
            <div className="text-white font-semibold">Quantacel</div>
            <div className="text-sm">Autonomous HR for modern teams</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
        <div className="text-xs">© 2025 Orvexa Softech. All rights reserved.</div>
      </div>
    </footer>
  );
}
