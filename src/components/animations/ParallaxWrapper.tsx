import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import type { ReactNode } from "react"

interface ParallaxWrapperProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxWrapper({ children, speed = 0.5, className }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed])
  const y = useSpring(rawY, { stiffness: 100, damping: 30, restDelta: 0.001 })

  if (shouldReduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

