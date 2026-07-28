import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-dark-200 bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left side - Logo and tagline */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-lg font-bold text-white">Lexia</span>
              </div>
              <span className="text-gray-400 text-sm">Talk to your codebase</span>
            </div>

            {/* Right side - Links and attribution */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </Link>
              <span className="text-gray-500 text-sm">Built by Shivam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}