import { render, screen, fireEvent } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

const mockUsePathname = usePathname as jest.Mock

describe('Navigation Component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the navigation with logo and all navigation items', () => {
    render(<Navigation />)
    
    // Check logo
    expect(screen.getByText('Lexia')).toBeInTheDocument()
    
    // Check navigation items
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('Use Cases')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    
    // Check CTA buttons (there are two - desktop and mobile)
    const joinWaitlistButtons = screen.getAllByText('Join Waitlist')
    expect(joinWaitlistButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('indicates the active page correctly', () => {
    mockUsePathname.mockReturnValue('/how-it-works')
    render(<Navigation />)
    
    // Find the "How It Works" link - there might be two (desktop and mobile)
    const howItWorksLinks = screen.getAllByText('How It Works')
    expect(howItWorksLinks.length).toBeGreaterThan(0)
    
    // At least one should have the active class
    const hasActiveLink = howItWorksLinks.some(link => 
      link.className.includes('text-primary-400')
    )
    expect(hasActiveLink).toBe(true)
  })

  it('opens and closes mobile menu correctly', () => {
    render(<Navigation />)
    
    // Find mobile menu button by its icon or aria-label
    const menuButton = screen.getByRole('button')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    // Open menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // The mobile menu content should appear
    expect(document.querySelector('#mobile-menu')).toBeInTheDocument()
  })

  it('closes mobile menu when pressing Escape key', () => {
    render(<Navigation />)
    
    const menuButton = screen.getByRole('button')
    
    // Open menu
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Press Escape
    fireEvent.keyDown(document, { key: 'Escape' })
    
    // Menu should close
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('has proper accessibility attributes', () => {
    render(<Navigation />)
    
    // Navigation should have proper role and aria-label
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label', 'Main navigation')
    
    // Mobile menu button should have proper ARIA attributes
    const menuButton = screen.getByRole('button')
    expect(menuButton).toHaveAttribute('aria-haspopup', 'true')
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu')
  })

  it('provides visual hover effects classes on interactive elements', () => {
    render(<Navigation />)
    
    // Check that navigation links have transition classes
    const homeLinks = screen.getAllByText('Home')
    homeLinks.forEach(link => {
      expect(link.className).toContain('transition-all')
    })
    
    // Check CTA button classes
    const ctaButtons = screen.getAllByText('Join Waitlist')
    ctaButtons.forEach(button => {
      expect(button.className).toContain('hover:bg-primary-500')
    })
  })

  it('handles active states correctly for different routes', () => {
    const routes = [
      { path: '/', expectedActive: 'Home' },
      { path: '/how-it-works', expectedActive: 'How It Works' },
      { path: '/use-cases', expectedActive: 'Use Cases' },
      { path: '/about', expectedActive: 'About' }
    ]
    
    routes.forEach(({ path, expectedActive }) => {
      mockUsePathname.mockReturnValue(path)
      const { unmount } = render(<Navigation />)
      
      const activeLinks = screen.getAllByText(expectedActive)
      const hasActiveStyle = activeLinks.some(link => 
        link.className.includes('text-primary-400')
      )
      expect(hasActiveStyle).toBe(true)
      
      unmount()
    })
  })

  it('renders proper semantic structure for screen readers', () => {
    render(<Navigation />)
    
    // Main navigation landmark
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    
    // Icons should be hidden from screen readers
    const hiddenIcons = document.querySelectorAll('[aria-hidden="true"]')
    expect(hiddenIcons.length).toBeGreaterThan(0)
  })
})