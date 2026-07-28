import * as React from "react"
import { cn } from "@/lib/utils"
import { Container, ContainerProps } from "./container"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'dark' | 'darker'
  containerProps?: ContainerProps
  as?: 'section' | 'div' | 'article' | 'main'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    spacing = 'lg', 
    background = 'default',
    containerProps,
    as: Component = 'section',
    children, 
    ...props 
  }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(
          "relative",
          {
            'py-8': spacing === 'sm',
            'py-12 md:py-16': spacing === 'md',
            'py-16 md:py-20': spacing === 'lg',
            'py-20 md:py-24': spacing === 'xl',
            'bg-dark-500': background === 'default',
            'bg-dark-400': background === 'dark',
            'bg-dark-600': background === 'darker',
          },
          className
        )}
        {...props}
      >
        <Container {...containerProps}>
          {children}
        </Container>
      </Component>
    )
  }
)
Section.displayName = "Section"

export { Section }