import { motion } from "framer-motion"
import { FadeUp } from "./animations/FadeUp"
import { FadeIn } from "./animations/FadeIn"
import { FloatingElement } from "./animations/FloatingElement"
import { ParallaxWrapper } from "./animations/ParallaxWrapper"

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-start overflow-hidden bg-navy pt-20 md:pt-[100px] pb-16">
      {/* Background Glows */}
      <FadeIn duration={2} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none transform -translate-x-1/4 translate-y-1/4" />
      </FadeIn>
      <div className="absolute inset-0 grain-dots opacity-20 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-4 pb-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 3.5, ease: [0.76, 0, 0.24, 1] }}
        >
          
          {/* Text Content */}
          <div className="text-left relative z-20 md:pr-10">
            <FadeUp delay={3.5 + 0.2} once>
              <div className="flex items-center gap-3">
                <span className="bg-gold/10 border border-gold/30 text-gold text-[10px] md:text-xs px-4 py-1.5 rounded-full uppercase tracking-[0.2em] font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(242,196,26,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                  Authentic South Indian
                </span>
              </div>
            </FadeUp>

            <motion.h1 
              className="font-script text-cream text-[50px] sm:text-6xl md:text-[76px] leading-[1.1] tracking-tight mt-6 mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 + 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Taste the Best that<br />Surprise You
            </motion.h1>
            
            <FadeUp delay={3.5 + 0.6}>
              <p className="font-sans text-cream/70 text-sm md:text-lg leading-relaxed mb-10 max-w-lg">
                An immersive culinary experience that gives an accurate picture of what our Authentic South Indian Kitchen is all about.
              </p>
            </FadeUp>

            <FadeUp delay={3.5 + 0.8}>
              <div className="flex items-end gap-4 mb-10">
                <div className="flex gap-1 text-gold text-2xl md:text-3xl">
                  {/* Staggered Stars */}
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.5 + 1 + (i * 0.1), type: "spring" }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <span className="text-cream/90 text-sm md:text-base font-medium ml-2">4.6 Rating</span>
              </div>
            </FadeUp>

            <FadeUp delay={3.5 + 1.2}>
              <div className="flex flex-wrap items-center gap-5">
                <a href="#reserve" className="group relative overflow-hidden bg-gradient-to-r from-gold to-[#f0d463] text-navy rounded-full px-8 py-3.5 font-semibold text-sm md:text-base shadow-[0_8px_20px_rgba(245,197,66,0.25)] hover:shadow-[0_12px_30px_rgba(245,197,66,0.5)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95">
                  <span className="relative z-10">Book a Table</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </a>
                <a href="#menu" className="border-2 border-cream/20 text-cream rounded-full px-8 py-3.5 font-semibold text-sm md:text-base bg-transparent hover:bg-cream/10 transition-all duration-300 active:scale-95">
                  See Menu
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Image & Floating Spices */}
          <FadeIn delay={3.5 + 0.4} duration={1.5} className="relative h-[450px] md:h-[550px] flex items-center justify-center group z-10 w-full">
            <ParallaxWrapper speed={0.05} className="relative w-full md:w-[115%] max-w-none z-20 flex justify-center items-center">
              
              {/* Soft Golden Glow behind the plate */}
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full transform scale-75 pointer-events-none z-0" />

              {/* Steam Effect */}
              <div className="absolute inset-0 -top-20 z-10 pointer-events-none flex justify-center opacity-30">
                <motion.div
                  animate={{ y: [0, -100], opacity: [0, 1, 0], scale: [1, 1.5], filter: ["blur(10px)", "blur(20px)"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-white/30 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, -120], opacity: [0, 0.8, 0], scale: [1, 2], filter: ["blur(15px)", "blur(25px)"] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2, ease: "linear" }}
                  className="w-24 h-24 bg-white/20 rounded-full ml-10"
                />
              </div>

              <motion.img 
                src="images/setmeals.png" 
                alt="Signature Thali" 
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-20"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              />
            </ParallaxWrapper>
            
            <FloatingElement delay={3.5 + 0} yOffset={25} duration={5} className="absolute top-[10%] right-[0%] z-30 w-16 md:w-24">
              <ParallaxWrapper speed={0.1}>
                <motion.img whileHover={{ rotate: 90 }} src="images/spice_star_anise_1784383227241.png" className="w-full object-contain blur-[1px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform rotate-12" alt="Star Anise" />
              </ParallaxWrapper>
            </FloatingElement>
            
            <FloatingElement delay={3.5 + 1} yOffset={35} duration={6} className="absolute bottom-[20%] right-[5%] z-30 w-20 md:w-32">
              <ParallaxWrapper speed={0.15}>
                <motion.img whileHover={{ rotate: 45 }} src="images/spice_chili_1784383218022.png" className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform rotate-45" alt="Chili" />
              </ParallaxWrapper>
            </FloatingElement>
            
            <FloatingElement delay={3.5 + 0.5} yOffset={20} duration={4.5} className="absolute top-[35%] left-[-5%] z-30 w-12 md:w-20">
              <ParallaxWrapper speed={0.08}>
                <motion.img whileHover={{ rotate: -90 }} src="images/spice_cardamom_1784384378093.png" className="w-full object-contain blur-[1px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] transform -rotate-12" alt="Cardamom" />
              </ParallaxWrapper>
            </FloatingElement>
            
            <FloatingElement delay={3.5 + 1.5} yOffset={30} duration={5.5} className="absolute bottom-[10%] left-[5%] z-30 w-24 md:w-36">
              <ParallaxWrapper speed={0.12}>
                <motion.img whileHover={{ rotate: 180 }} src="images/spice_curry_leaf_1784383245455.png" className="w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform rotate-[70deg]" alt="Curry Leaves" />
              </ParallaxWrapper>
            </FloatingElement>
            
            <FloatingElement delay={3.5 + 0.8} yOffset={25} duration={4.8} className="absolute top-[15%] left-[10%] z-30 w-16 md:w-28">
              <ParallaxWrapper speed={0.1}>
                <motion.img whileHover={{ rotate: 90 }} src="images/spice_cinnamon_1784383237128.png" className="w-full object-contain blur-[2px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transform rotate-45" alt="Cinnamon" />
              </ParallaxWrapper>
            </FloatingElement>
          </FadeIn>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-gold font-medium">Scroll</span>
        <motion.div 
          className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: [0, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
