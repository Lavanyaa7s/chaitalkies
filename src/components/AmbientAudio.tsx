import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // High-quality ambient cafe/restaurant sound placeholder
    // We use a safe, royalty-free ambient loop from a public CDN or a placeholder.
    // Replace src with actual audio file later.
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2021/09/06/audio_9bc5c0a325.mp3?filename=cafe-ambience-1-9709.mp3")
    audio.loop = true
    audio.volume = 0.3 // Keep it subtle
    audioRef.current = audio

    // Wait for the audio to be ready enough
    const handleCanPlay = () => {
      // Intentionally left empty as we removed the strict isLoaded check
    }
    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("loadeddata", handleCanPlay)

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("loadeddata", handleCanPlay)
      audio.pause()
      audio.src = ""
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      // Force play even if technically not fully loaded according to events, 
      // the browser will buffer and play when ready.
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(err => {
        console.error("Audio playback failed:", err)
        // If the pixabay link is 403ing, we can fallback to a very safe test URL
        if (audioRef.current) {
           audioRef.current.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
           audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error(e))
        }
      })
    }
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 3.5 }} // Fade in slightly after intro
      onClick={toggleAudio}
      className={`fixed bottom-6 left-6 z-[60] flex items-center gap-3 px-4 py-2.5 rounded-full backdrop-blur-md border transition-all duration-500 overflow-hidden group
        ${isPlaying 
          ? "bg-navy-card/80 border-gold/30 shadow-[0_0_20px_rgba(242,196,26,0.15)]" 
          : "bg-navy-card/50 border-gold/10 hover:border-gold/30 hover:bg-navy-card/80"
        }`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center text-gold">
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="text-gold/50 group-hover:text-gold transition-colors"
            >
              <VolumeX size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-0.5 h-3">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-[2px] rounded-full ${isPlaying ? 'bg-gold' : 'bg-gold/30'}`}
            animate={
              isPlaying 
                ? { height: ["20%", "100%", "40%", "80%", "20%"] } 
                : { height: "20%" }
            }
            transition={
              isPlaying 
                ? { 
                    duration: 1.2, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: i * 0.15,
                    repeatType: "mirror"
                  } 
                : { duration: 0.3 }
            }
            style={{ minHeight: "4px" }}
          />
        ))}
      </div>
    </motion.button>
  )
}
