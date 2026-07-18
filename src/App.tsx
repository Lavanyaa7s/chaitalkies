import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { SignatureDishes } from "./components/SignatureDishes"
import { OurStory } from "./components/OurStory"
import { CraftedFresh } from "./components/CraftedFresh"
import { Menu } from "./components/Menu"
import { Reviews } from "./components/Reviews"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { BrandIntro } from "./components/animations/BrandIntro"
import { AmbientAudio } from "./components/AmbientAudio"
import { useLenis } from "lenis/react"

function App() {
  const [showIntro, setShowIntro] = useState(true)

  const lenis = useLenis()

  useEffect(() => {
    // Lock scroll and stop lenis while intro is visible
    if (showIntro) {
      document.body.style.overflow = "hidden"
      lenis?.stop()
    } else {
      document.body.style.overflow = "unset"
      lenis?.start()
    }

    // Trigger the exit animation after exactly 3.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [showIntro])

  return (
    <div className="bg-navy min-h-screen font-sans text-cream selection:bg-gold/30">
      <AnimatePresence>
        {showIntro && (
          <BrandIntro />
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <OurStory />
        <Menu />
        <CraftedFresh />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <AmbientAudio />
    </div>
  )
}

export default App
