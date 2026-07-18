import { FadeUp } from "./animations/FadeUp"

export function Contact() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold text-xs uppercase font-semibold mb-3 tracking-[0.2em]">Come talk over chai</p>
          <h2 className="font-script text-gold text-5xl md:text-6xl mb-4">Location & Contact</h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <FadeUp y={0} delay={0.2} className="relative">
            <div className="border border-gold/10 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(242,196,26,0.1)] bg-navy-card rounded-2xl p-8 flex flex-col justify-between h-full transition-all duration-300">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="text-gold shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/></svg>
                  <div>
                    <p className="font-semibold text-cream">Address</p>
                    <p className="text-cream/60 text-sm mt-1">105-G, Jln Pusat Komersial Saujana 3,<br />Seremban 2 Height, 70390 Seremban,<br />Negeri Sembilan</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="text-gold shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                  <div>
                    <p className="font-semibold text-cream">Hours</p>
                    <p className="text-cream/60 text-sm mt-1">Wednesday - Monday: 8:00 am – 10:00 pm<br />Tuesday: Closed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="text-gold shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2c-8.5 0-15-6.5-15-15a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                  <div>
                    <p className="font-semibold text-cream">Phone</p>
                    <p className="text-cream/60 text-sm mt-1">012-516 2441</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a href="https://wa.me/60125162441" target="_blank" rel="noopener noreferrer" className="bg-gold text-navy rounded-full px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(242,196,26,0.3)] hover:-translate-y-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.6-1.2-1.4-1.4-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.2.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
                  WhatsApp Us
                </a>
                <a href="#" className="border-2 border-gold/30 text-gold rounded-full px-6 py-3 text-sm font-semibold text-center hover:bg-gold/10 transition-all duration-300 hover:-translate-y-0.5">
                  Get Directions
                </a>
              </div>
            </div>
          </FadeUp>

          <FadeUp y={40} delay={0.4}>
            <div className="border border-gold/10 bg-navy-card rounded-2xl overflow-hidden min-h-[320px] h-full">
              <iframe
                title="Chai Talkies Kitchen location map"
                className="w-full h-full min-h-[320px] grayscale-[0.3] contrast-[1.05]"
                style={{ filter: "invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
                src="https://maps.google.com/maps?q=105-G,%20Jln%20Pusat%20Komersial%20Saujana%203,%20Seremban&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
