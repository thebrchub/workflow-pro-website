export default function CTAContact({ formData, setFormData, handleSubmit }) {
  return (
    <section id="contact" className="py-12 px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-xl p-8 card-shadow">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to automate HR ops?</h2>
            <p style={{ color:'var(--muted)' }} className="mt-2">Join 200+ teams running autonomous workflows.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="btn-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-95 transition">Start Free Trial</button>
            <button className="border border-white/10 text-gray-300 px-6 py-3 rounded-lg hover:border-white/20 transition">Schedule Demo</button>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* form inputs */}
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input value={formData.firstName} onChange={(e)=>setFormData({...formData, firstName: e.target.value})} placeholder="First name" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white placeholder-gray-500" />
              <input value={formData.lastName} onChange={(e)=>setFormData({...formData, lastName: e.target.value})} placeholder="Last name" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white placeholder-gray-500" />
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} placeholder="Work email" type="email" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white placeholder-gray-500" />
              <input value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} placeholder="Phone (optional)" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white placeholder-gray-500" />
            </div>
            <textarea value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} placeholder="Tell us your priority..." className="w-full p-3 rounded-lg bg-black/40 border border-white/5 text-white placeholder-gray-500 mb-4" rows={4} />
            <div className="flex justify-center">
              <button onClick={handleSubmit} className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-2)] transition">Get a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
