import { useState, useEffect } from "react"
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring } from "framer-motion"
import type { PanInfo } from "framer-motion"
import type { ReactNode } from "react"

interface InfiniteMarqueeProps {
  children: ReactNode
  speed?: number
  className?: string
  pauseOnHover?: boolean
  direction?: 1 | -1
}

// Custom wrap function to ensure compatibility
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export function InfiniteMarquee({
  children,
  speed = 1,
  className = "",
  pauseOnHover = true,
  direction = 1,
}: InfiniteMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  
  const baseX = useMotionValue(0)
  
  // We use a spring for smooth speed transitions (e.g. pause/resume)
  const speedSpring = useSpring(speed, { damping: 40, stiffness: 400 })
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`)

  useEffect(() => {
    // If user is dragging or hovering, we slow down or stop
    if (isDragging) {
      speedSpring.set(0)
    } else if (isHovered && pauseOnHover) {
      speedSpring.set(0)
    } else {
      speedSpring.set(speed)
    }
  }, [isHovered, isDragging, speed, pauseOnHover, speedSpring])

  useAnimationFrame((_, delta) => {
    // Prevent huge jumps when delta is large (e.g. tab was inactive)
    const normalizedDelta = Math.min(delta, 20)
    
    // We adjust the moveBy amount. A value of 0.05 * speed is a good base velocity.
    const moveBy = direction * speedSpring.get() * (normalizedDelta * 0.05)
    
    if (moveBy !== 0) {
      baseX.set(baseX.get() - moveBy)
    }
  })

  // Handle Dragging manually to adjust baseX
  const handleDrag = (_: any, info: PanInfo) => {
    // Determine the container width roughly to translate pixel drag to percentage
    const dragAmount = info.delta.x * 0.1 // adjust sensitivity
    baseX.set(baseX.get() + dragAmount)
  }

  return (
    <div 
      className={`overflow-hidden flex w-full relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsDragging(false)
      }}
    >
      <motion.div
        className="flex gap-8 min-w-max cursor-grab active:cursor-grabbing w-max px-3"
        style={{ x }}
        drag="x"
        dragElastic={0}
        dragConstraints={{ left: 0, right: 0 }}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        onDrag={handleDrag}
      >
        {/* We double the children to create the infinite effect */}
        <div className="flex gap-8 items-stretch">{children}</div>
        <div className="flex gap-8 items-stretch">{children}</div>
      </motion.div>
    </div>
  )
}

