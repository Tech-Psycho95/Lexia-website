'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WaveformProps {
  className?: string
  isActive?: boolean
  bars?: number
}

export function Waveform({ className, isActive = false, bars = 20 }: WaveformProps) {
  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-gradient-to-t from-primary-600 to-primary-400 rounded-full"
          style={{
            width: '3px',
          }}
          animate={{
            height: isActive ? [
              Math.random() * 20 + 10,
              Math.random() * 40 + 20,
              Math.random() * 20 + 10,
              Math.random() * 30 + 15,
              Math.random() * 25 + 12,
            ] : [8, 8, 8, 8, 8]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.05,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

interface PulseDotProps {
  className?: string
  delay?: number
}

export function PulseDot({ className, delay = 0 }: PulseDotProps) {
  return (
    <motion.div
      className={cn("w-2 h-2 bg-primary-500 rounded-full", className)}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const words = text.split(' ')
  
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay
          }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}