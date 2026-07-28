"use client"

import { useState, FormEvent } from "react"
import { PageLayout } from "@/components/layout"
import { Section, Container, Button } from "@/components/ui"
import { FadeIn } from "@/components/animations/fade-in"
import { CheckCircle2 } from "lucide-react"

export default function GetStartedPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Log to console as per requirements (no backend yet)
    console.log("Waitlist submission:", {
      email,
      timestamp: new Date().toISOString(),
      source: "get-started"
    })

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  return (
    <PageLayout>
      <Section spacing="xl">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Join the Waitlist
              </h1>
              <p className="text-xl text-gray-300">
                Be among the first developers to talk to your codebase
              </p>
            </div>
          </FadeIn>

          {!isSubmitted ? (
            <FadeIn delay={0.2}>
              <div className="max-w-md mx-auto">
                <div className="bg-dark-400 rounded-xl p-8 border border-dark-200">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">What you'll get:</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary-400 mr-2 flex-shrink-0 mt-0.5" size={20} />
                        <span>Early access to Lexia.AI when we launch</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary-400 mr-2 flex-shrink-0 mt-0.5" size={20} />
                        <span>Updates on development progress</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="text-primary-400 mr-2 flex-shrink-0 mt-0.5" size={20} />
                        <span>Opportunity to shape the product with feedback</span>
                      </li>
                    </ul>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-dark-500 border border-dark-200 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        disabled={isSubmitting}
                      />
                      {error && (
                        <p className="mt-2 text-sm text-red-400">{error}</p>
                      )}
                    </div>

                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>

                  <p className="mt-4 text-sm text-gray-500 text-center">
                    No spam. We'll only email you about Lexia.AI.
                  </p>
                </div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn delay={0.2}>
              <div className="max-w-md mx-auto text-center">
                <div className="bg-dark-400 rounded-xl p-12 border border-primary-500/30">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-primary-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    You're on the list!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thanks for your interest in Lexia.AI. We'll reach out to <span className="text-primary-400 font-mono">{email}</span> when we're ready to launch.
                  </p>
                  <p className="text-sm text-gray-400">
                    Check your email for a confirmation.
                  </p>
                </div>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Why Lexia.AI?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div>
                  <h4 className="font-semibold text-white mb-2">Stay in Flow</h4>
                  <p className="text-sm text-gray-400">
                    No context switching. Ask questions without leaving your editor or terminal.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Your Code, Your Context</h4>
                  <p className="text-sm text-gray-400">
                    Answers based on your actual codebase, not generic documentation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Voice-First</h4>
                  <p className="text-sm text-gray-400">
                    Hands-free interaction. Perfect for pair programming and teaching.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageLayout>
  )
}