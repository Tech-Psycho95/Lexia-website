import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Primary: Electric blue with enhanced hover effects
            'bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 hover:-translate-y-0.5': variant === 'primary',
            // Secondary: Dark with violet accent on hover
            'bg-dark-300 hover:bg-dark-200 text-white border border-dark-100 hover:border-accent-500 hover:shadow-lg hover:shadow-accent-500/20': variant === 'secondary',
            // Outline: Primary border with smooth fill transition
            'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:shadow-primary-500/25': variant === 'outline',
            'px-3 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }