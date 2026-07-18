import { useRef } from "react"
import { motion, useReducedMotion, useMotionTemplate, useMotionValue } from "framer-motion"
import { FadeUp } from "./animations/FadeUp"
import { InfiniteMarquee } from "./animations/InfiniteMarquee"


const REVIEWS_ROW_1 = [
  { rating: 5, text: "The idly served in a coconut shell was such a lovely surprise — tasted even better because of how it was presented. Felt like a proper occasion for a Tuesday breakfast.", initials: "PR", name: "Priya R.", date: "Breakfast · 2 weeks ago", avatar: "", color: "bg-emerald-500" },
  { rating: 5, text: "The chai and murukku combo is worth the visit alone. Strong, well-spiced chai and the murukku was fresh and crunchy — reminded me exactly of my grandmother's kitchen.", initials: "AK", name: "Arjun K.", date: "Snack · 1 month ago", avatar: "", color: "bg-orange-500" },
  { rating: 5, text: "Went for dinner and the parotta with kurma was excellent, but honestly the filter kaapi at the end sealed it. Already planning our next breakfast trip.", initials: "SM", name: "Siti M.", date: "Dinner · 2 months ago", avatar: "", color: "bg-sky-500" },
  { rating: 5, text: "Absolutely stunning presentation and authentic taste. The podi tosai has the perfect crunch and the sambar is flavorful without being overwhelmingly spicy.", initials: "JD", name: "Jason D.", date: "Lunch · 3 months ago", avatar: "", color: "bg-rose-500" }
]

const REVIEWS_ROW_2 = [
  { rating: 5, text: "Hidden gem! The atmosphere is incredibly premium and the food lives up to it. The attention to detail in every dish is just phenomenal.", initials: "NL", name: "Nadia L.", date: "Dinner · 3 months ago", avatar: "", color: "bg-purple-500" },
  { rating: 5, text: "Brought my parents here and they were blown away. The traditional recipes taste exactly like home, but served in such a beautiful, elegant setting.", initials: "VJ", name: "Vikram J.", date: "Lunch · 4 months ago", avatar: "", color: "bg-teal-500" },
  { rating: 5, text: "Three years searching for good South Indian food in this area, and Chai Talkies is by far the best. The coconut chutney is incredibly fresh.", initials: "HL", name: "Hui Ling", date: "Breakfast · 5 months ago", avatar: "", color: "bg-blue-500" },
  { rating: 5, text: "Had a Sunday evening emergency craving for biryani. Called in and they had it ready. The care and professionalism are second to none.", initials: "AT", name: "Amelia T.", date: "Dinner · 6 months ago", avatar: "", color: "bg-cyan-500" }
]

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const ReviewCard = ({ review }: { review: any }) => {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="relative group flex-none w-[380px] md:w-[420px] cursor-pointer"
    >
      {/* Gold glow beneath the active card */}
      <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="w-full bg-navy-card/60 backdrop-blur-md border border-gold/10 group-hover:border-gold/40 group-hover:bg-navy-card/90 transition-colors duration-500 shadow-lg group-hover:shadow-[0_20px_50px_rgba(242,196,26,0.15)] flex flex-col h-full rounded-3xl overflow-hidden relative z-10">
        <div className="p-7 flex flex-col h-[280px]">
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, j) => (
              <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F2C41A">
                <path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.5 7.2L12 18l-6.5 3.7 1.5-7.2-5.3-5 7.2-.9z"/>
              </svg>
            ))}
          </div>

          <p className="text-cream/80 text-[15px] leading-relaxed flex-1 font-light whitespace-normal">
            "{review.text}"
          </p>

          <div className="flex justify-between items-end mt-4 pt-4 border-t border-gold/5">
            <div className="flex items-center gap-3">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${review.color} text-white shadow-inner font-semibold text-sm`}>
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="h-full w-full rounded-full object-cover" />
                ) : (
                  <span>{review.initials}</span>
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-cream leading-none mb-1.5">{review.name}</p>
                <p className="text-cream/40 text-[11px] leading-none">{review.date}</p>
              </div>
            </div>
            <GoogleLogo />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(242,196,26,0.06), transparent 80%)`

  return (
    <section 
      id="reviews" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden group/section"
    >
      {/* Subtle radial spotlight following mouse */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/section:opacity-100 transition-opacity duration-700" 
        style={{ background }}
      />
      
      {/* Faint noise texture */}
      <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <FadeUp className="text-left max-w-2xl">
          <h2 className="font-script text-cream text-5xl md:text-6xl leading-tight">
            Loved By <span className="text-gold">Thousands.</span>
          </h2>
        </FadeUp>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-navy-card/80 backdrop-blur-md border border-gold/20 rounded-2xl p-5 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-center gap-6">
            <div>
              <p className="text-4xl font-bold text-cream leading-none mb-1">4.6</p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={j < 4 ? "#F2C41A" : "url(#halfStar)"}>
                    {j === 4 && (
                      <defs>
                        <linearGradient id="halfStar" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="60%" stopColor="#F2C41A" />
                          <stop offset="60%" stopColor="#4B5563" />
                        </linearGradient>
                      </defs>
                    )}
                    <path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.5 7.2L12 18l-6.5 3.7 1.5-7.2-5.3-5 7.2-.9z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-gold/20" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-cream">905 Reviews</p>
              <p className="text-xs text-cream/50 mt-0.5 flex items-center gap-1.5">
                on <GoogleLogo />
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full overflow-visible flex flex-col gap-6">
        {/* Center Brightness Enhancement overlay */}
        <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-1/3 bg-gold/5 blur-3xl rounded-full z-0 pointer-events-none mix-blend-color-dodge" />
        
        {/* Edge Fade Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#0B1120] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#0B1120] to-transparent z-20 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10"
        >
          <InfiniteMarquee speed={0.05} pauseOnHover={true} direction={1}>
            {REVIEWS_ROW_1.map((review, i) => (
              <ReviewCard key={`r1-${i}`} review={review} />
            ))}
          </InfiniteMarquee>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <InfiniteMarquee speed={0.05} pauseOnHover={true} direction={-1}>
            {REVIEWS_ROW_2.map((review, i) => (
              <ReviewCard key={`r2-${i}`} review={review} />
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>
    </section>
  )
}
