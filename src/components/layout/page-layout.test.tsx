import { render, screen } from '@testing-library/react'
import { PageLayout } from './page-layout'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('PageLayout', () => {
  it('renders children content', () => {
    render(
      <PageLayout>
        <div>Test Content</div>
      </PageLayout>
    )
    
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('renders navigation with Lexia.AI logo', () => {
    render(
      <PageLayout>
        <div>Test Content</div>
      </PageLayout>
    )
    
    // Check for logo in navigation (should appear multiple times due to footer)
    const lexiaElements = screen.getAllByText('Lexia.AI')
    expect(lexiaElements.length).toBeGreaterThan(0)
  })

  it('renders all navigation items in header', () => {
    render(
      <PageLayout>
        <div>Test Content</div>
      </PageLayout>
    )
    
    // Check that navigation exists by looking for the nav element
    const navigation = screen.getByRole('navigation')
    expect(navigation).toBeInTheDocument()
    
    // Check that links appear (they may be duplicated in footer, so use getAllBy)
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('How It Works').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Use Cases').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Get Started').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('About').length).toBeGreaterThanOrEqual(1)
  })

  it('renders footer with company description', () => {
    render(
      <PageLayout>
        <div>Test Content</div>
      </PageLayout>
    )
    
    expect(screen.getByText(/voice-native developer experience agent/i)).toBeInTheDocument()
  })

  it('renders join waitlist buttons', () => {
    render(
      <PageLayout>
        <div>Test Content</div>
      </PageLayout>
    )
    
    const joinButtons = screen.getAllByText('Join Waitlist')
    expect(joinButtons.length).toBeGreaterThan(0)
  })

  it('has proper layout structure', () => {
    render(
      <PageLayout>
        <div data-testid="test-content">Test Content</div>
      </PageLayout>
    )
    
    // Check that main structural elements exist
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // footer
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })

  describe('Responsive Design & Accessibility (Requirements 1.2, 2.5)', () => {
    it('has consistent flex layout structure', () => {
      const { container } = render(
        <PageLayout>
          <div>Test Content</div>
        </PageLayout>
      )
      
      // Check the main container has flex layout classes
      const mainContainer = container.firstChild as HTMLElement
      expect(mainContainer).toHaveClass('min-h-screen', 'flex', 'flex-col', 'bg-dark-500')
    })

    it('main content area has proper responsive classes', () => {
      render(
        <PageLayout>
          <div data-testid="test-content">Test Content</div>
        </PageLayout>
      )
      
      const mainElement = screen.getByRole('main')
      
      // Check for responsive and layout classes
      expect(mainElement).toHaveClass('flex-1', 'relative', 'w-full')
      expect(mainElement).toHaveAttribute('tabIndex', '-1')
      expect(mainElement).toHaveAttribute('id', 'main-content')
    })

    it('includes skip to content link for accessibility', () => {
      render(
        <PageLayout>
          <div>Test Content</div>
        </PageLayout>
      )
      
      const skipLink = screen.getByText('Skip to main content')
      expect(skipLink).toBeInTheDocument()
      expect(skipLink).toHaveAttribute('href', '#main-content')
    })

    it('supports custom skipToContentId prop', () => {
      render(
        <PageLayout skipToContentId="custom-main">
          <div>Test Content</div>
        </PageLayout>
      )
      
      const skipLink = screen.getByText('Skip to main content')
      const mainElement = screen.getByRole('main')
      
      expect(skipLink).toHaveAttribute('href', '#custom-main')
      expect(mainElement).toHaveAttribute('id', 'custom-main')
    })

    it('supports custom className on main content', () => {
      render(
        <PageLayout className="custom-class">
          <div>Test Content</div>
        </PageLayout>
      )
      
      const mainElement = screen.getByRole('main')
      expect(mainElement).toHaveClass('custom-class')
    })
  })
})