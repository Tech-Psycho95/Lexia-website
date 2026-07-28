import Link from 'next/link'
import { Container } from '@/components/ui'

const footerLinks = {
  product: [
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/get-started', label: 'Get Started' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }, // Future implementation
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark-600 border-t border-dark-200">
      <Container size="xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link 
                href="/" 
                className="flex items-center space-x-2 text-xl font-bold text-white hover:text-primary-400 transition-colors mb-4"
              >
                <img src="/lexia-logo.jpg" alt="Lexia.AI Logo" className="h-8 w-auto" />
                <span>Lexia.AI</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                A voice-native developer experience agent that enables developers to interact with their codebase through spoken questions and receive real-time spoken answers.
              </p>
              <p className="text-xs text-gray-500">
                Currently in development. Join our waitlist for early access.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-8 border-t border-dark-400 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Lexia.AI. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2 md:mt-0">
              Built for developers, by developers.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}