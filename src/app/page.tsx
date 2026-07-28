import Link from "next/link"
import { PageLayout } from "@/components/layout"
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Section, Container } from "@/components/ui"
import { WaveformVisualization } from "@/components/animations/waveform"
import { FadeIn } from "@/components/animations/fade-in"
import { Mic, Search, BookOpen, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <Section spacing="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent" />
        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <FadeIn>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Talk to your codebase
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
                Ask spoken questions about your code and get real-time spoken answers. 
                Lexia.AI understands your codebase and explains it back to you.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-24 w-full max-w-2xl">
                <WaveformVisualization className="h-full" />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/get-started">Join the Waitlist</Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/how-it-works">
                    See How It Works <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section spacing="xl" background="dark">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Voice-native developer experience
              </h2>
              <p className="text-gray-400 text-lg">
                Three core capabilities powered by voice
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card variant="feature">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Mic className="text-primary-400" size={24} />
                  </div>
                  <CardTitle>Error Explanation</CardTitle>
                  <CardDescription>
                    Ask about errors and get explanations based on similar issues in your codebase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    "I'm getting a null pointer exception on line 42" → Lexia.AI searches your error logs, 
                    finds similar patterns, and explains the root cause.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card variant="feature">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Search className="text-accent-400" size={24} />
                  </div>
                  <CardTitle>Code Navigation</CardTitle>
                  <CardDescription>
                    Understand how different parts of your codebase connect and interact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    "How does authentication work in this app?" → Lexia.AI maps the auth flow, 
                    traces dependencies, and walks you through the implementation.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card variant="feature">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="text-primary-400" size={24} />
                  </div>
                  <CardTitle>API Documentation</CardTitle>
                  <CardDescription>
                    Retrieve and read back documentation without leaving your workflow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    "What parameters does the /users endpoint accept?" → Lexia.AI fetches the API docs 
                    and reads back the schema with examples.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Architecture Section */}
      <Section spacing="lg">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Built with modern tech
              </h2>
              <p className="text-gray-400 text-lg">
                Voice → Embedding & Retrieval → Voice Out
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-dark-400 rounded-xl border border-dark-200">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Mic className="text-primary-400" size={32} />
                </div>
                <span className="text-white font-semibold">Vapi</span>
                <span className="text-gray-400 text-sm">Voice In</span>
              </div>

              <ArrowRight className="text-gray-500 transform md:rotate-0 rotate-90" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Search className="text-accent-400" size={32} />
                </div>
                <span className="text-white font-semibold">OpenAI + Qdrant</span>
                <span className="text-gray-400 text-sm">Embedding & Search</span>
              </div>

              <ArrowRight className="text-gray-500 transform md:rotate-0 rotate-90" size={32} />

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-lg flex items-center justify-center mb-2">
                  <Mic className="text-primary-400" size={32} />
                </div>
                <span className="text-white font-semibold">Express/TS</span>
                <span className="text-gray-400 text-sm">Voice Out</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="darker">
        <Container>
          <FadeIn>
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to talk to your code?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Join the waitlist to be among the first developers to try Lexia.AI
              </p>
              <Button variant="primary" size="lg" asChild>
                <Link href="/get-started">Join the Waitlist</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageLayout>
  )
}