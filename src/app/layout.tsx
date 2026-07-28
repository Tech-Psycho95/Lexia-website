import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Lexia - Talk to your codebase',
  description: 'A voice-native developer experience agent that enables developers to interact with their codebase through spoken questions and receive real-time spoken answers.',
  keywords: ['developer tools', 'voice interface', 'codebase navigation', 'AI assistant'],
  authors: [{ name: 'Lexia Team' }],
  openGraph: {
    title: 'Lexia - Talk to your codebase',
    description: 'A voice-native developer experience agent for modern developers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark-500 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}