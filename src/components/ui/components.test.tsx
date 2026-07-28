import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './button'
import { Card, CardHeader, CardTitle, CardContent } from './card'
import { Container } from './container'
import { Section } from './section'

describe('UI Components', () => {
  describe('Button', () => {
    it('renders with primary variant by default', () => {
      render(<Button>Click me</Button>)
      const button = screen.getByRole('button', { name: /click me/i })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('bg-primary-600')
    })

    it('applies electric blue hover effects for primary variant', () => {
      render(<Button variant="primary">Primary Button</Button>)
      const button = screen.getByRole('button', { name: /primary button/i })
      expect(button).toHaveClass('hover:bg-primary-500', 'hover:shadow-primary-500/25')
    })

    it('applies violet accent for secondary variant', () => {
      render(<Button variant="secondary">Secondary Button</Button>)
      const button = screen.getByRole('button', { name: /secondary button/i })
      expect(button).toHaveClass('hover:border-accent-500', 'hover:shadow-accent-500/20')
    })

    it('supports different sizes', () => {
      render(<Button size="lg">Large Button</Button>)
      const button = screen.getByRole('button', { name: /large button/i })
      expect(button).toHaveClass('px-8', 'py-4', 'text-lg')
    })
  })

  describe('Card', () => {
    it('renders card with default styling', () => {
      render(
        <Card data-testid="test-card">
          <CardContent>Card content</CardContent>
        </Card>
      )
      const card = screen.getByTestId('test-card')
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass('bg-dark-400', 'border-dark-200', 'rounded-xl')
    })

    it('applies hover effects by default', () => {
      render(<Card data-testid="test-card">Content</Card>)
      const card = screen.getByTestId('test-card')
      expect(card).toHaveClass('hover:shadow-xl', 'hover:border-primary-500')
    })

    it('supports feature variant', () => {
      render(<Card variant="feature" data-testid="feature-card">Content</Card>)
      const card = screen.getByTestId('feature-card')
      expect(card).toHaveClass('bg-dark-300', 'border-dark-100')
    })

    it('renders card header and title correctly', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
          </CardHeader>
        </Card>
      )
      const title = screen.getByRole('heading', { name: /test title/i })
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass('text-xl', 'font-semibold', 'text-white')
    })
  })

  describe('Container', () => {
    it('renders with responsive padding', () => {
      render(<Container data-testid="test-container">Content</Container>)
      const container = screen.getByTestId('test-container')
      expect(container).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
    })

    it('applies max-width based on size prop', () => {
      render(<Container size="xl" data-testid="xl-container">Content</Container>)
      const container = screen.getByTestId('xl-container')
      expect(container).toHaveClass('max-w-7xl')
    })

    it('centers content by default', () => {
      render(<Container data-testid="centered-container">Content</Container>)
      const container = screen.getByTestId('centered-container')
      expect(container).toHaveClass('mx-auto')
    })
  })

  describe('Section', () => {
    it('renders as section element by default', () => {
      render(<Section data-testid="test-section">Content</Section>)
      const section = screen.getByTestId('test-section')
      expect(section.tagName).toBe('SECTION')
    })

    it('applies spacing based on spacing prop', () => {
      render(<Section spacing="xl" data-testid="xl-section">Content</Section>)
      const section = screen.getByTestId('xl-section')
      expect(section).toHaveClass('py-20', 'md:py-24')
    })

    it('applies background variants', () => {
      render(<Section background="darker" data-testid="dark-section">Content</Section>)
      const section = screen.getByTestId('dark-section')
      expect(section).toHaveClass('bg-dark-600')
    })

    it('renders as different HTML elements', () => {
      render(<Section as="main" data-testid="main-section">Content</Section>)
      const section = screen.getByTestId('main-section')
      expect(section.tagName).toBe('MAIN')
    })
  })
})