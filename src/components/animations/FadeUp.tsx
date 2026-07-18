import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  y?: number
  once?: boolean
}

export function FadeUp({ children, delay = 0, duration = 0.6, className, y = 40, once = true }: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

