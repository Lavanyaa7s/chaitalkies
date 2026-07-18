import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useIsMobile } from "../hooks/useIsMobile"

export function CraftedFresh() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  
  // Track scroll progress within the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Smooth out the scroll progress to avoid jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Foreground (Fastest, largest)
  const fgY1 = useTransform(smoothProgress, [0, 1], ["10%", "-50%"])
  const fgY2 = useTransform(smoothProgress, [0, 1], ["30%", "-80%"])
  const fgRotate1 = useTransform(smoothProgress, [0, 1], [0, 60])
  const fgRotate2 = useTransform(smoothProgress, [0, 1], [-20, 45])

  // Midground (Medium speed, sharpest focus)
  const mgY1 = useTransform(smoothProgress, [0, 1], ["5%", "-30%"])
  const mgY2 = useTransform(smoothProgress, [0, 1], ["-5%", "-40%"])
  const mgY3 = useTransform(smoothProgress, [0, 1], ["15%", "-30%"])
  const mgRotate1 = useTransform(smoothProgress, [0, 1], [15, -15])
  const mgRotate2 = useTransform(smoothProgress, [0, 1], [45, 90])
  const mgRotate3 = useTransform(smoothProgress, [0, 1], [0, 30])

  // Background (Slowest, smallest)
  const bgY1 = useTransform(smoothProgress, [0, 1], ["-10%", "-20%"])
  const bgY2 = useTransform(smoothProgress, [0, 1], ["5%", "-10%"])
  const bgRotate1 = useTransform(smoothProgress, [0, 1], [-45, -10])

  // Text Animation (Fades in when in view, holds, then fades out)
  const textOpacity = useTransform(smoothProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])
  const textScale = useTransform(smoothProgress, [0.2, 0.8], [0.95, 1.05])
  const textY = useTransform(smoothProgress, [0.2, 0.8], ["20px", "-20px"])

  // Subtle Vignette Opacity
  const vignetteOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[250vh] md:h-[300vh] bg-[#050811] border-y border-gold/5">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Deep Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,154,14,0.05)_0%,transparent_60%)] pointer-events-none" />

        {/* Dynamic Vignette */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050811_100%)] pointer-events-none z-40"
          style={{ opacity: vignetteOpacity, willChange: 'opacity' }}
        />

        {/* Background Layer (Z-10) */}
        {!isMobile && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <motion.div style={{ y: bgY1, rotate: bgRotate1, willChange: 'transform' }} className="absolute top-[20%] left-[15%] w-10 md:w-12 opacity-30">
              <img src="images/spice_cardamom_1784384378093.png" className="w-full h-full blur-[2px]" alt="" />
            </motion.div>
            <motion.div style={{ y: bgY2, rotate: bgRotate1, willChange: 'transform' }} className="absolute bottom-[30%] right-[20%] w-12 md:w-16 opacity-20">
              <img src="images/spice_star_anise_1784383227241.png" className="w-full h-full blur-[3px]" alt="" />
            </motion.div>
          </div>
        )}

        {isMobile && (
          <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            <img src="images/spice_cardamom_1784384378093.png" className="absolute top-[10%] left-[5%] w-8 opacity-40 transform -rotate-12" alt="" />
            <img src="images/spice_star_anise_1784383227241.png" className="absolute top-[40%] right-[10%] w-10 opacity-30 transform rotate-45" alt="" />
            <img src="images/spice_chili_1784383218022.png" className="absolute bottom-[30%] left-[10%] w-12 opacity-40 transform rotate-[60deg]" alt="" />
            <img src="images/spice_curry_leaf_1784383245455.png" className="absolute bottom-[10%] right-[5%] w-16 opacity-40 transform -rotate-45" alt="" />
          </div>
        )}

        {/* Midground Layer (Z-20) */}
        {!isMobile && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            <motion.div style={{ y: mgY1, rotate: mgRotate1, willChange: 'transform' }} className="absolute top-[15%] right-[10%] md:right-[15%] w-20 md:w-32 opacity-90">
              <img src="images/spice_chili_1784383218022.png" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" alt="" />
            </motion.div>
            <motion.div style={{ y: mgY2, rotate: mgRotate2, willChange: 'transform' }} className="absolute bottom-[20%] left-[5%] md:left-[10%] w-24 md:w-48 opacity-90">
              <img src="images/spice_curry_leaf_1784383245455.png" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" alt="" />
            </motion.div>
            <motion.div style={{ y: mgY3, rotate: mgRotate3, willChange: 'transform' }} className="absolute top-[60%] right-[25%] md:right-[30%] w-16 md:w-28 opacity-80">
              <img src="images/spice_cinnamon_1784383237128.png" className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] blur-[1px]" alt="" />
            </motion.div>
          </div>
        )}

        {/* Typography (Z-30) */}
        <motion.div 
          className="relative z-30 max-w-4xl mx-auto px-6 text-center"
          style={{ opacity: textOpacity, scale: textScale, y: textY, willChange: 'transform, opacity' }}
        >
          <p className="text-gold text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 font-semibold">
            Crafted Fresh Everyday
          </p>
          <h2 className="font-script text-cream text-4xl md:text-7xl lg:text-8xl leading-[1.2] md:leading-[1.1] drop-shadow-2xl text-shadow-lg">
            Every grain of rice,<br/>
            every leaf of curry,<br/>
            <span className="text-gold">sourced with obsession.</span>
          </h2>
        </motion.div>

        {/* Foreground Layer (Z-50) */}
        {!isMobile && (
          <div className="absolute inset-0 z-50 pointer-events-none">
            <motion.div style={{ y: fgY1, rotate: fgRotate1, willChange: 'transform' }} className="absolute top-[-5%] left-[-10%] md:top-[-10%] md:left-[-5%] w-40 md:w-96 opacity-40 md:opacity-60">
              <img src="images/spice_star_anise_1784383227241.png" className="w-full h-full blur-[4px] md:blur-[12px] drop-shadow-none md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]" alt="" />
            </motion.div>
            <motion.div style={{ y: fgY2, rotate: fgRotate2, willChange: 'transform' }} className="absolute bottom-[-10%] right-[-15%] md:bottom-[-20%] md:right-[-10%] w-48 md:w-[500px] opacity-40 md:opacity-70">
              <img src="images/spice_chili_1784383218022.png" className="w-full h-full blur-[6px] md:blur-[16px] drop-shadow-none md:drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]" alt="" />
            </motion.div>
          </div>
        )}

      </div>
    </section>
  )
}
