import { PageLayout } from "@/components/layout"
import { Section, Container, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui"
import { FadeIn } from "@/components/animations/fade-in"
import { Bug, Compass, Code } from "lucide-react"

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Debugging on the fly",
      icon: Bug,
      problem: "You're deep in a debugging session and hit an unfamiliar error",
      solution: "Instead of context-switching to search docs or Stack Overflow, just ask Lexia.AI",
      example: {
        question: "Why is this throwing a CORS error?",
        response: "This CORS error occurs because your API doesn't include the Access-Control-Allow-Origin header. Check your Express middleware in server.ts line 23."
      },
      codeSnippet: `// Before: manual searching
// 1. Copy error message
// 2. Open browser
// 3. Search Stack Overflow
// 4. Read through answers
// 5. Return to code

// With Lexia.AI: just ask
"Why is this throwing a CORS error?"
// Instant answer while you stay in flow`
    },
    {
      title: "Onboarding to an unfamiliar codebase",
      icon: Compass,
      problem: "Joining a new project or team means hours of reading docs and exploring code",
      solution: "Lexia.AI helps you navigate the codebase through conversation, explaining architecture and patterns",
      example: {
        question: "How does authentication work in this app?",
        response: "Authentication uses JWT tokens. The flow starts in AuthController.ts, validates tokens in middleware/auth.ts, and stores sessions in Redis. Want me to walk through the login flow?"
      },
      codeSnippet: `// Traditional onboarding
// - Read README (if it exists)
// - Grep for patterns
// - Ask teammates (interrupt their flow)
// - Trace through code manually

// With Lexia.AI
"How does authentication work?"
"Where are API routes defined?"
"Show me the database schema"
// Get answers immediately`
    },
    {
      title: "Hands-free API lookups while pairing",
      icon: Code,
      problem: "During pair programming or screen sharing, stopping to look up API docs breaks the flow",
      solution: "Ask Lexia.AI to read back API signatures, parameters, and examples without leaving the session",
      example: {
        question: "What parameters does the /users endpoint accept?",
        response: "The /users endpoint accepts: userId (required, string), includeDeleted (optional, boolean), and limit (optional, number, default 50). Returns an array of User objects."
      },
      codeSnippet: `// During pairing session
// ❌ "Hold on, let me check the docs..."
//    (loses momentum, breaks focus)

// ✅ "Lexia.AI, what params does /users take?"
//    (instant answer, stay in flow)

// Especially useful when:
// - Screen sharing
// - Live coding interviews  
// - Teaching/mentoring
// - Driving while navigating code`
    }
  ]

  return (
    <PageLayout>
      <Section spacing="xl">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Use Cases
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real developer workflows where voice-first interaction makes a difference
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <FadeIn key={useCase.title} delay={index * 0.1}>
                  <Card variant="use-case">
                    <CardHeader>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-primary-400" size={28} />
                        </div>
                        <div>
                          <CardTitle className="text-3xl mb-2">{useCase.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Problem */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">The Problem</h4>
                        <p className="text-gray-300">{useCase.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">How Lexia.AI Helps</h4>
                        <p className="text-gray-300">{useCase.solution}</p>
                      </div>

                      {/* Example */}
                      <div className="bg-dark-600 rounded-lg p-6 border border-dark-200 space-y-4">
                        <div>
                          <div className="text-xs font-semibold text-primary-400 mb-2">YOU ASK:</div>
                          <p className="text-white font-mono text-sm">"{useCase.example.question}"</p>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-accent-400 mb-2">Lexia.AI RESPONDS:</div>
                          <p className="text-gray-300 text-sm">{useCase.example.response}</p>
                        </div>
                      </div>

                      {/* Code Example */}
                      <div className="bg-dark-500 rounded-lg p-4 border border-dark-200">
                        <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                          <code>{useCase.codeSnippet}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <p className="text-gray-400 mb-6">
                All use cases leverage Lexia.AI's core capabilities: Error Explanation, Code Navigation, and API Documentation
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageLayout>
  )
}