import { PageLayout } from "@/components/layout"
import { Section, Container, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui"
import { FadeIn } from "@/components/animations/fade-in"
import { AudioWave } from "@/components/animations/waveform"
import { Mic, Database, Cpu, Volume2 } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Speak your question",
      description: "Use voice input to ask about your codebase, errors, or API endpoints",
      icon: Mic,
      code: `// You say:
"I'm getting a null pointer exception on line 42"`,
      color: "primary"
    },
    {
      number: 2,
      title: "Lexia embeds and searches",
      description: "Your question is embedded and matched against your codebase using vector search",
      icon: Database,
      code: `// Behind the scenes:
const embedding = await openai.embeddings.create({
  input: question,
  model: "text-embedding-3-small"
})

const results = await qdrant.search({
  vector: embedding.data[0].embedding,
  limit: 5
})`,
      color: "accent"
    },
    {
      number: 3,
      title: "Relevant context retrieved",
      description: "The most relevant code snippets, docs, and error logs are pulled from your project",
      icon: Cpu,
      code: `// Retrieved context:
- Similar error in UserController.ts (line 89)
- Null check pattern in utils/validation.ts
- Related issue from error logs (3 days ago)`,
      color: "primary"
    },
    {
      number: 4,
      title: "Answer generated and read back",
      description: "An LLM generates an explanation, and Lexia speaks it back to you",
      icon: Volume2,
      code: `// Lexia responds:
"This null pointer exception occurs because 
the user object isn't validated before accessing 
its properties. Check line 89 in UserController 
for a similar pattern with proper null handling."`,
      color: "accent"
    }
  ]

  return (
    <PageLayout>
      <Section spacing="xl">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                How It Works
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Voice-first developer experience powered by embeddings and vector search
              </p>
              <div className="mt-8">
                <AudioWave />
              </div>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.number} delay={index * 0.1}>
                  <Card>
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 bg-${step.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`text-${step.color}-400`} size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-1">Step {step.number}</div>
                          <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-dark-600 rounded-lg p-4 border border-dark-200">
                        <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-16 p-8 bg-dark-400 rounded-xl border border-dark-200">
              <h3 className="text-2xl font-bold text-white mb-4">Technical Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">Voice Interface</h4>
                  <p className="text-sm">Vapi handles voice input and output with low latency</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Vector Search</h4>
                  <p className="text-sm">Qdrant stores and queries code embeddings efficiently</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Embeddings</h4>
                  <p className="text-sm">OpenAI text-embedding-3-small for semantic search</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Backend</h4>
                  <p className="text-sm">Express with TypeScript for API and orchestration</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </PageLayout>
  )
}