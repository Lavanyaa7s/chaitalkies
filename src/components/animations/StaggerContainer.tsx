import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  delayChildren?: number
  staggerChildren?: number
  className?: string
  once?: boolean
}

export function StaggerContainer({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.1, 
  className,
  once = true
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

