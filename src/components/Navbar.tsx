import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ["home", "dishes", "about", "menu", "reviews", "visit"]
      let current = "home"
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = section
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Signature", href: "#dishes" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Visit Us", href: "#visit" },
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 3.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b border-gold/10 ${
        isScrolled ? "bg-navy/85 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent border-transparent"
      }`}
    >
      <div className={`max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-16" : "h-20"}`}>
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center shrink-0 overflow-hidden bg-navy-card">
            <img src="images/logo_transparent.png" alt="Logo" className="w-8 h-8 object-contain" />
          </span>
          <span className="leading-none">
            <span className="block font-script text-3xl text-gold leading-none group-hover:text-gold/80 transition-colors">Chai Talkies</span>
            <span className="block text-[10px] tracking-[0.35em] text-cream/60 uppercase mt-0.5">Kitchen</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-medium tracking-wide text-cream/80 relative">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`relative transition-colors ${activeSection === link.href.substring(1) ? "text-gold" : "hover:text-gold"}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <a 
          href="#visit" 
          className="hidden md:inline-flex bg-gold text-navy rounded-full px-6 py-2 text-sm font-semibold hover:bg-gold/90 hover:shadow-[0_0_15px_rgba(242,196,26,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Visit Us
        </a>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gold/30 text-gold"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gold/10 bg-navy/95 overflow-hidden"
          >
            <div className="px-5 py-5 flex flex-col gap-4 text-sm font-medium">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-1 ${activeSection === link.href.substring(1) ? "text-gold" : "text-cream"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
