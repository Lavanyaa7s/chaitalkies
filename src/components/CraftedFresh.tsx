import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function CraftedFresh() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Foreground (Fastest, largest, blurred heavily)
  const fgY1 = useTransform(scrollYProgress, [0, 1], ["20%", "-100%"])
  const fgY2 = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"])
  const fgRotate1 = useTransform(scrollYProgress, [0, 1], [0, 120])
  const fgRotate2 = useTransform(scrollYProgress, [0, 1], [-45, 90])

  // Midground (Medium speed, sharpest focus)
  const mgY1 = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"])
  const mgY2 = useTransform(scrollYProgress, [0, 1], ["-10%", "-80%"])
  const mgY3 = useTransform(scrollYProgress, [0, 1], ["30%", "-60%"])
  const mgRotate1 = useTransform(scrollYProgress, [0, 1], [15, -45])
  const mgRotate2 = useTransform(scrollYProgress, [0, 1], [90, 180])
  const mgRotate3 = useTransform(scrollYProgress, [0, 1], [0, 75])

  // Background (Slowest, smallest, slightly blurred)
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["-20%", "-40%"])
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"])
  const bgRotate1 = useTransform(scrollYProgress, [0, 1], [-90, -10])

  // Text Animation (Fades in when in view, holds, then fades out)
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])
  const textScale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1.05])
  const textY = useTransform(scrollYProgress, [0.2, 0.8], ["20px", "-20px"])

  // Subtle Vignette Opacity
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#050811] border-y border-gold/5">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Deep Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,14,0.05)_0%,transparent_60%)]" />

        {/* Dynamic Vignette */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050811_100%)] pointer-events-none z-40"
          style={{ opacity: vignetteOpacity }}
        />

        {/* Background Layer (Z-10) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.img 
            src="images/spice_cardamom_1784384378093.png" 
            className="absolute top-[20%] left-[15%] w-12 opacity-40 blur-[3px]"
            style={{ y: bgY1, rotate: bgRotate1 }}
            alt=""
          />
          <motion.img 
            src="images/spice_star_anise_1784383227241.png" 
            className="absolute bottom-[30%] right-[20%] w-16 opacity-30 blur-[4px]"
            style={{ y: bgY2, rotate: bgRotate1 }}
            alt=""
          />
        </div>

        {/* Midground Layer (Z-20) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.img 
            src="images/spice_chili_1784383218022.png" 
            className="absolute top-[15%] right-[15%] w-24 md:w-32 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            style={{ y: mgY1, rotate: mgRotate1 }}
            alt=""
          />
          <motion.img 
            src="images/spice_curry_leaf_1784383245455.png" 
            className="absolute bottom-[20%] left-[10%] w-32 md:w-48 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            style={{ y: mgY2, rotate: mgRotate2 }}
            alt=""
          />
          <motion.img 
            src="images/spice_cinnamon_1784383237128.png" 
            className="absolute top-[60%] right-[30%] w-20 md:w-28 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] blur-[1px]"
            style={{ y: mgY3, rotate: mgRotate3 }}
            alt=""
          />
        </div>

        {/* Typography (Z-30) */}
        <motion.div 
          className="relative z-30 max-w-4xl mx-auto px-6 text-center"
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
        >
          <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-semibold">
            Crafted Fresh Everyday
          </p>
          <h2 className="font-script text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.1] drop-shadow-2xl text-shadow-lg">
            Every grain of rice,<br/>
            every leaf of curry,<br/>
            <span className="text-gold">sourced with obsession.</span>
          </h2>
        </motion.div>

        {/* Foreground Layer (Z-50) */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          <motion.img 
            src="images/spice_star_anise_1784383227241.png" 
            className="absolute top-[-10%] left-[-5%] w-64 md:w-96 opacity-60 blur-[12px] md:blur-[16px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
            style={{ y: fgY1, rotate: fgRotate1 }}
            alt=""
          />
          <motion.img 
            src="images/spice_chili_1784383218022.png" 
            className="absolute bottom-[-20%] right-[-10%] w-80 md:w-[500px] opacity-70 blur-[15px] md:blur-[20px] drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]"
            style={{ y: fgY2, rotate: fgRotate2 }}
            alt=""
          />
        </div>

      </div>
    </section>
  )
}
