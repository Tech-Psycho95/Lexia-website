'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui'

interface NavigationItem {
  href: string
  label: string
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/get-started', label: 'Get Started' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1)
  const navRef = React.useRef<HTMLElement>(null)
  const mobileMenuRef = React.useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setFocusedIndex(-1)
  }

  // Enhanced keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isMobileMenuOpen) return

      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>

      if (!focusableElements || focusableElements.length === 0) return

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          closeMobileMenu()
          // Return focus to menu button
          const menuButton = navRef.current?.querySelector('[aria-label*="menu"]') as HTMLElement
          menuButton?.focus()
          break
        case 'ArrowDown':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const nextIndex = prev < focusableElements.length - 1 ? prev + 1 : 0
            focusableElements[nextIndex]?.focus()
            return nextIndex
          })
          break
        case 'ArrowUp':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const prevIndex = prev > 0 ? prev - 1 : focusableElements.length - 1
            focusableElements[prevIndex]?.focus()
            return prevIndex
          })
          break
        case 'Home':
          event.preventDefault()
          setFocusedIndex(0)
          focusableElements[0]?.focus()
          break
        case 'End':
          event.preventDefault()
          const lastIndex = focusableElements.length - 1
          setFocusedIndex(lastIndex)
          focusableElements[lastIndex]?.focus()
          break
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  return (
    <nav 
      ref={navRef}
      className="sticky top-0 z-50 bg-dark-500/90 backdrop-blur-md border-b border-dark-200"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-white hover:text-primary-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 rounded-md"
            onClick={closeMobileMenu}
            aria-label="Lexia home"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-mono text-sm font-bold">L</span>
            </div>
            <span>Lexia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={cn(
                  "text-sm font-medium transition-all duration-200 hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 rounded-md px-3 py-2 relative",
                  "before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 before:bg-primary-400 before:transition-all before:duration-300 hover:before:w-full",
                  pathname === item.href
                    ? "text-primary-400 bg-dark-400/50 before:w-full"
                    : "text-gray-300"
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/get-started"
              className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0"
              aria-label="Join waitlist"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 rounded-md transition-colors duration-200"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            ref={mobileMenuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-dark-500 border-b border-dark-200 shadow-lg animate-slide-up"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 relative",
                    "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary-400 before:transition-all before:duration-300 hover:before:h-full focus:before:h-full",
                    pathname === item.href
                      ? "text-primary-400 bg-dark-400/50 before:h-full"
                      : "text-gray-300 hover:text-white hover:bg-dark-400/30"
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link 
                  href="/get-started" 
                  onClick={closeMobileMenu}
                  role="menuitem"
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-500 bg-primary-600 hover:bg-primary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transform hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0"
                  aria-label="Join waitlist"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}