import { motion, useReducedMotion } from "framer-motion"

export function BrandIntro() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1120] overflow-hidden"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { 
          duration: 1.0, 
          ease: [0.76, 0, 0.24, 1] // Snappy spring-like ease for curtain effect
        } 
      }}
      onAnimationComplete={() => {}}
    >
      {/* 0.0s Subtle Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0B1120_100%)] opacity-80" />
      
      {/* 0.0s Faint Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
      />

      {/* 0.5s Floating Golden Dust Particles */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[...Array(15)].map((_, i) => {
            const size = Math.random() * 3 + 2; // larger particles
            const blur = Math.random() * 2 + 1; // blurred for depth
            return (
              <motion.div
                key={i}
                className="absolute bg-gold rounded-full"
                style={{
                  width: size,
                  height: size,
                  filter: `blur(${blur}px)`,
                  left: `${Math.random() * 100}vw`,
                  bottom: `${Math.random() * 20 - 10}vh`,
                }}
                animate={{ 
                  y: ["0vh", "-120vh"],
                  x: [`${Math.random() * 20 - 10}vw`, `${Math.random() * 20 - 10}vw`],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ 
                  duration: Math.random() * 10 + 15, // Extremely slow drifting
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
              />
            )
          })}
        </motion.div>
      )}

      {/* 1.0s Soft Warm Radial Golden Glow */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-gold/10 blur-[100px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1.0, ease: "easeOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Steam / Logo Container */}
        <div className="relative flex justify-center items-center mb-8 h-48 w-48 md:h-64 md:w-64">
          
          {/* 1.3s Steam Effect */}
          {!prefersReducedMotion && (
            <motion.div 
              className="absolute inset-0 -top-12 flex justify-center opacity-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 1.3 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-10 w-8 h-24 bg-white/10 rounded-[100%] blur-[12px]"
                  animate={{
                    y: [0, -60, -100],
                    x: [0, i % 2 === 0 ? 15 : -15, i % 2 === 0 ? -10 : 10],
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* 1.5s Logo Reveal (30% larger, scaled from 0.9 to 1) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.2, 
              delay: 1.5, 
              type: "spring", 
              stiffness: 40, 
              damping: 12 
            }}
            className="absolute z-10"
          >
            <img 
              src="images/logo_transparent.png" 
              alt="Chai Talkies Logo" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-[0_0_20px_rgba(242,196,26,0.2)]"
            />
          </motion.div>
        </div>

        {/* 1.5s Thin Gold Line Divider */}
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent mb-6"
          initial={{ width: "0px", opacity: 0 }}
          animate={{ width: ["0px", "80px", "0px"], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 1.5 }}
        />

        {/* 2.2s Taglines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-gold text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] uppercase font-semibold text-center px-4">
            Authentic Malaysian & South Indian Cuisine
          </h2>
          <p className="text-cream/60 font-serif italic text-sm md:text-base tracking-wide text-center">
            Every Meal Starts A Conversation.
          </p>
        </motion.div>

      </div>
    </motion.div>
  )
}

