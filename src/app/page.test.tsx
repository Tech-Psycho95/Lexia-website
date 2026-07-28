import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Talk to your codebase')
  })

  it('renders navigation links', () => {
    render(<HomePage />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Use Cases' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('renders core features section', () => {
    render(<HomePage />)
    expect(screen.getByText('Error Explanation')).toBeInTheDocument()
    expect(screen.getByText('Code Navigation')).toBeInTheDocument()
    expect(screen.getByText('API Documentation')).toBeInTheDocument()
  })
})