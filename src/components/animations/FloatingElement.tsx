import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  yOffset?: number
  duration?: number
  className?: string
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  yOffset = 8, 
  duration = 4,
  className 
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

