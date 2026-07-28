import Link from "next/link"
import { PageLayout } from "@/components/layout"
import { Section, Container, Button } from "@/components/ui"
import { FadeIn } from "@/components/animations/fade-in"
import { Github, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <PageLayout>
      <Section spacing="xl">
        <Container size="md">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                About Lexia.AI
              </h1>
              <p className="text-xl text-gray-300">
                Building the future of developer-code interaction
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.2}>
              <div className="prose prose-invert max-w-none">
                <div className="bg-dark-400 rounded-xl p-8 border border-dark-200">
                  <h2 className="text-2xl font-bold text-white mb-4">Solo founder, early stage</h2>
                  <p className="text-gray-300 mb-4">
                    Lexia.AI is being built by <span className="text-white font-semibold">Shivam</span>, 
                    a solo developer with a background in AI/ML and a passion for improving developer experience. 
                    The product is currently pre-launch with no users yet—this is an honest, ambitious project 
                    in its early stages.
                  </p>
                  <p className="text-gray-300">
                    The goal is simple: let developers interact with their codebase through voice, 
                    making it faster to understand errors, navigate unfamiliar code, and retrieve documentation 
                    without breaking flow.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-accent-500/10 rounded-xl p-8 border border-accent-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">Looking for a technical co-founder</h3>
                <p className="text-gray-300 mb-6">
                  Building Lexia.AI alone has been rewarding, but there's more to do than one person can handle. 
                  I'm actively looking for a technical co-founder who:
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-accent-400 mr-2">•</span>
                    <span>Has experience with voice interfaces, embeddings, or developer tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-400 mr-2">•</span>
                    <span>Can contribute to backend, infrastructure, or AI/ML components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-400 mr-2">•</span>
                    <span>Shares the vision of voice-first developer experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-400 mr-2">•</span>
                    <span>Wants to build a product developers actually use and love</span>
                  </li>
                </ul>
                <p className="text-gray-300 mb-6">
                  If that sounds like you, let's talk. Early stage means equity, ownership, and 
                  real impact on the product direction.
                </p>
                <Button variant="primary" size="lg" asChild>
                  <Link href="/get-started">Get in Touch</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-dark-400 rounded-xl p-8 border border-dark-200">
                <h3 className="text-2xl font-bold text-white mb-4">Current status</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Pre-launch</h4>
                    <p>Lexia.AI is not publicly available yet. The core technology is being built and tested.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">No users</h4>
                    <p>This is an honest, early-stage project. There are no inflated user counts or fake testimonials.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tech stack</h4>
                    <p>
                      Voice interface (Vapi), vector search (Qdrant), embeddings (OpenAI), 
                      backend (Express with TypeScript). The architecture is proven, the product is in development.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Timeline</h4>
                    <p>
                      Aiming for a private beta in the coming months. Join the waitlist to be 
                      among the first to try it.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" asChild>
                    <a href="https://github.com/Tech-Psycho95/LEXIA" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github className="mr-2" size={20} />
                      GitHub
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://dev.to/shastraa_430" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Dev.to
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </PageLayout>
  )
}