"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface WaveformProps {
  className?: string
  barCount?: number
}

export function WaveformVisualization({ className = "", barCount = 40 }: WaveformProps) {
  const shouldReduceMotion = useReducedMotion()

  const bars = Array.from({ length: barCount }, (_, i) => i)

  return (
    <div className={`flex items-end justify-center space-x-1 ${className}`}>
      {bars.map((_, index) => {
        const delay = index * 0.05
        const duration = 0.5 + Math.random() * 0.8
        const height = 20 + Math.random() * 60

        return (
          <motion.div
            key={index}
            className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-full"
            style={{
              width: '2px',
              minHeight: '8px',
            }}
            animate={
              shouldReduceMotion
                ? { height: `${height}%` }
                : {
                    height: [`${height * 0.3}%`, `${height}%`, `${height * 0.3}%`],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        )
      })}
    </div>
  )
}

export function AudioWave({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width="200"
        height="60"
        viewBox="0 0 200 60"
        className="text-primary-500"
        fill="currentColor"
      >
        {Array.from({ length: 20 }, (_, i) => (
          <motion.rect
            key={i}
            x={i * 10}
            y={20}
            width="6"
            height="20"
            rx="3"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    height: [20, 40, 20],
                    y: [20, 10, 20],
                  }
            }
            transition={
              shouldReduceMotion
                ? {}
                : {
                    duration: 0.8 + Math.random() * 0.4,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </svg>
    </div>
  )
}