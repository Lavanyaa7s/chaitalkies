import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { FadeUp } from "./animations/FadeUp"

function Counter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(from)
  const springCount = useSpring(count, { duration: duration * 1000, bounce: 0 })
  const display = useTransform(springCount, (latest) => Math.round(latest) + suffix)

  useEffect(() => {
    if (isInView) {
      count.set(to)
    }
  }, [isInView, count, to])

  return <motion.span ref={ref}>{display}</motion.span>
}

export function OurStory() {
  return (
    <section id="about" className="py-24 md:py-32 bg-navy-card/40 border-y border-gold/10 relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <FadeUp delay={0.2}>
            <p className="text-gold text-xs uppercase font-semibold mb-3 tracking-[0.2em]">Our Story</p>
            <h2 className="font-script text-gold text-5xl md:text-6xl mb-6">Every cup starts a conversation</h2>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <p className="text-cream/70 leading-relaxed mb-5">
              Chai Talkies Kitchen began with a simple idea: the best stories in a South Indian home are told over chai and murukku, not after a meal, but woven through it. We built a kitchen around that habit — steaming idly the traditional way, then serving it somewhere it feels a little more like home and a little more like an occasion, in a coconut shell instead of a plate.
            </p>
            <p className="text-cream/70 leading-relaxed mb-8">
              From filter kaapi brewed the slow way to dosas rolled to order, everything here follows recipes carried across generations. We just changed how they arrive at your table — with a little more warmth, and a little more theatre.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.6}>
            <div className="flex gap-10">
              <div>
                <p className="font-script text-4xl text-gold">
                  <Counter from={0} to={15} suffix="+" />
                </p>
                <p className="text-cream/50 text-xs uppercase tracking-widest mt-1">Signature recipes</p>
              </div>
              <div>
                <p className="font-script text-4xl text-gold">
                  <Counter from={0} to={3} />
                </p>
                <p className="text-cream/50 text-xs uppercase tracking-widest mt-1">Generations</p>
              </div>
              <div>
                <p className="font-script text-4xl text-gold">
                  <Counter from={0} to={100} suffix="%" />
                </p>
                <p className="text-cream/50 text-xs uppercase tracking-widest mt-1">Authentic Spices</p>
              </div>
            </div>
          </FadeUp>
        </div>

        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border border-gold/25 flex items-center justify-center relative p-2 group">
            <div className="w-full h-full rounded-full overflow-hidden border border-dashed border-gold/30 relative">
              <motion.img 
                src="images/setmeals.png" 
                alt="Our Story" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
