import * as React from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
  /**
   * Skip navigation for better accessibility when navigating between pages
   */
  skipToContentId?: string
}

/**
 * PageLayout provides consistent structure across all pages with header, main content, and footer.
 * Implements responsive design patterns and proper spacing as per Requirements 1.2 and 2.5.
 * 
 * Features:
 * - Consistent navigation and footer across all pages
 * - Responsive flex layout that adapts to all screen sizes  
 * - Proper semantic HTML structure for accessibility
 * - Focus management for keyboard navigation
 * - Customizable main content area with proper spacing
 */
export function PageLayout({ children, className, skipToContentId = "main-content" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      {/* Skip to main content link for accessibility */}
      <a
        href={`#${skipToContentId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      
      {/* Header Navigation */}
      <Navigation />
      
      {/* Main Content Area */}
      <main 
        id={skipToContentId}
        className={cn(
          // Flex and layout
          "flex-1 relative",
          // Responsive width and spacing
          "w-full",
          // Ensure proper spacing from sticky navigation
          "pt-0",
          // Accessibility
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500",
          // Custom styles
          className
        )}
        role="main"
        tabIndex={-1}
      >
        {children}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}