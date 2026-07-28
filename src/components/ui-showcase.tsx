"use client"

import React from 'react'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Container, Section } from './ui'

export function UIShowcase() {
  return (
    <Section spacing="lg" background="default">
      <Container size="lg">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">UI Components Showcase</h2>
            <p className="text-gray-400 mb-8">Core UI components with electric blue and violet accents</p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Primary Button
              </Button>
              <Button variant="secondary" size="md">
                Secondary Button
              </Button>
              <Button variant="outline" size="sm">
                Outline Button
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>
                    Standard card with hover effects and consistent spacing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    This card demonstrates the default styling with electric blue hover effects.
                  </p>
                </CardContent>
              </Card>

              <Card variant="feature">
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>
                    Specialized card variant for showcasing features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Feature cards have lighter backgrounds and enhanced visual hierarchy.
                  </p>
                </CardContent>
              </Card>

              <Card variant="use-case">
                <CardHeader>
                  <CardTitle>Use Case Card</CardTitle>
                  <CardDescription>
                    Larger card variant with extra padding for detailed content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Use case cards provide more space for detailed scenarios and examples.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Container Sizes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Container Sizes</h3>
            <div className="space-y-4">
              <Container size="sm" className="bg-dark-300 py-4 rounded-lg">
                <p className="text-center text-gray-300">Small Container (max-w-3xl)</p>
              </Container>
              <Container size="md" className="bg-dark-300 py-4 rounded-lg">
                <p className="text-center text-gray-300">Medium Container (max-w-4xl)</p>
              </Container>
              <Container size="xl" className="bg-dark-300 py-4 rounded-lg">
                <p className="text-center text-gray-300">Extra Large Container (max-w-7xl)</p>
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}