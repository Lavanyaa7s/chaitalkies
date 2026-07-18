import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-navy-card/40 pt-14 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <svg viewBox="0 0 1200 30" className="w-full h-4 mb-16 opacity-50" preserveAspectRatio="none">
          <path d="M0 15 Q40 -3 80 15 T160 15 T240 15 T320 15 T400 15 T480 15 T560 15 T640 15 T720 15 T800 15 T880 15 T960 15 T1040 15 T1120 15 T1200 15" fill="none" stroke="#C79A0E" strokeWidth="1"/>
        </svg>

        {/* Pre-Footer CTA */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-script text-gold text-4xl md:text-5xl mb-8">Ready for authentic South Indian cuisine?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#reserve" className="group relative overflow-hidden bg-gradient-to-r from-gold to-[#f0d463] text-navy rounded-full px-8 py-3.5 font-semibold text-sm shadow-[0_8px_20px_rgba(245,197,66,0.25)] hover:shadow-[0_12px_30px_rgba(245,197,66,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95">
              <span className="relative z-10">Reserve Table</span>
            </a>
            <a href="https://wa.me/60125162441" target="_blank" rel="noopener noreferrer" className="border-2 border-cream/20 text-cream rounded-full px-8 py-3.5 font-semibold text-sm hover:bg-cream/10 transition-all duration-300 active:scale-95 flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gold/10 mb-16" />

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <motion.span 
              whileHover={{ textShadow: "0px 0px 8px rgba(242,196,26,0.8)" }}
              className="font-script text-3xl text-gold inline-block cursor-pointer transition-shadow"
            >
              Chai Talkies
            </motion.span>
            <p className="text-cream/50 text-sm mt-3 leading-relaxed max-w-xs">
              Authentic South Indian food, served with a little more theatre — one coconut shell of idly at a time.
            </p>
          </div>
          
          <div className="text-sm">
            <p className="text-gold font-semibold mb-3 uppercase tracking-widest text-xs">Explore</p>
            <ul className="space-y-2 text-cream/60">
              {['Signature Dishes', 'Full Menu', 'Reviews', 'Location'].map(link => (
                <li key={link}>
                  <a href={`#${link.split(' ')[0].toLowerCase()}`} className="group relative inline-block transition-colors hover:text-gold">
                    {link}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-sm">
            <p className="text-gold font-semibold mb-3 uppercase tracking-widest text-xs">Say Hello</p>
            <ul className="space-y-2 text-cream/60">
              <li className="hover:text-cream transition-colors">012-516 2441</li>
              <li className="hover:text-cream transition-colors">hello@chaitalkies.kitchen</li>
              <li className="hover:text-cream transition-colors">105-G, Jln Pusat Komersial Saujana 3, Seremban</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <p>© 2026 Chai Talkies Kitchen. All rights reserved.</p>
          <p className="tracking-widest uppercase">Breakfast • Lunch • Dinner</p>
        </div>
      </div>
    </footer>
  )
}
