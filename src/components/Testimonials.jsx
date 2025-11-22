export default function Testimonials({ testimonials, activeTestimonial, setActiveTestimonial }) {
  return (
    <section className="py-12 px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-xl p-8 card-shadow border border-white/5">
          <div className="text-center mb-6"><h3 className="text-2xl font-bold text-white">Trusted by Indian HR Teams</h3></div>
          <div className="relative min-h-28">
            {testimonials.map((t,i)=>(
              <div key={i} className={`transition-opacity duration-500 ${activeTestimonial===i ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'}`}>
                <p className="text-lg" style={{ color:'var(--muted)' }}>"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm" style={{ color:'var(--muted)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_,i)=>(
              <button key={i} onClick={()=>setActiveTestimonial(i)} aria-label={`Show ${i+1}`} className={`h-2 rounded-full transition-all ${activeTestimonial===i ? 'bg-[var(--primary)] w-8' : 'bg-white/10 w-2'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
