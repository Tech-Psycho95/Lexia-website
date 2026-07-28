'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  once = true
}: FadeInProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2, margin: "0px 0px -100px 0px" })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 }
      case 'down':
        return { y: -distance, opacity: 0 }
      case 'left':
        return { x: distance, opacity: 0 }
      case 'right':
        return { x: -distance, opacity: 0 }
      case 'none':
        return { opacity: 0 }
      default:
        return { y: distance, opacity: 0 }
    }
  }

  const getAnimateTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 }
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 }
      case 'none':
        return { opacity: 1 }
      default:
        return { y: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitialTransform()}
      animate={isInView ? getAnimateTransform() : getInitialTransform()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggeredFadeInProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  childDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export function StaggeredFadeIn({
  children,
  className,
  staggerDelay = 0.1,
  childDelay = 0,
  direction = 'up',
  once = true
}: StaggeredFadeInProps) {
  return (
    <div className={cn(className)}>
      {React.Children.map(children, (child, index) => (
        <FadeIn
          key={index}
          delay={childDelay + index * staggerDelay}
          direction={direction}
          once={once}
        >
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

interface ScaleInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  scale?: number
  once?: boolean
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  scale = 0.8,
  once = true
}: ScaleInProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ scale, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  )
}