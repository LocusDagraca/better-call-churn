"use client"

import * as React from "react"
import { useState } from "react"
import { Wizard } from "react-use-wizard"
import { Button } from "@/components/ui/button"
import {
  OnboardingStepImageTop,
  OnboardingStepImageLeft,
  OnboardingStepImageRight,
  OnboardingStepBackgroundImage,
  OnboardingStepCompact,
  OnboardingStepHero,
} from "./onboarding-step-variants"
import { OnboardingStepProps } from "./onboarding-step"

// Sample data to test with
const sampleStepData: OnboardingStepProps = {
  title: "Welcome to Our Platform! 👋",
  description:
    "We're excited to have you here. Let's get you set up with everything you need to succeed.",
  image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  imageAlt: "Welcome illustration",
  primaryCTA: {
    label: "Continue",
  },
  secondaryCTA: {
    label: "Back",
  },
  showSkip: true,
}

const sampleStepWithInputs: OnboardingStepProps = {
  title: "Tell Us About Yourself",
  description: "We'd love to learn more about you to personalize your experience.",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
  imageAlt: "Profile illustration",
  inputFields: [
    {
      name: "name",
      label: "Full Name",
      placeholder: "John Doe",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "john@example.com",
      type: "email",
      required: true,
    },
  ],
  primaryCTA: {
    label: "Next Step",
  },
  secondaryCTA: {
    label: "Go Back",
  },
  onInputChange: (name, value) => {
    console.log(`Field ${name} changed to:`, value)
  },
}

interface VariantDemoProps {
  variantName: string
  description: string
  component: React.ComponentType<OnboardingStepProps>
  useInputs?: boolean
}

function VariantDemo({ variantName, description, component: Component, useInputs = false }: VariantDemoProps) {
  const [isOpen, setIsOpen] = useState(false)
  const stepData = useInputs ? sampleStepWithInputs : sampleStepData

  return (
    <div className="border rounded-lg p-6 bg-card">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{variantName}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-2">
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline" size="sm">
            {isOpen ? "Hide" : "Show"} Variant
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t pt-6 mt-4 bg-background rounded-lg p-6">
          <Wizard>
            <Component {...stepData} />
          </Wizard>
        </div>
      )}
    </div>
  )
}

export function StepUIVariantsDemo() {
  const variants: VariantDemoProps[] = [
    {
      variantName: "Image on Top (Default)",
      description: "Classic vertical layout with image above content. Best for mobile-first designs.",
      component: OnboardingStepImageTop,
    },
    {
      variantName: "Image on Left",
      description: "Horizontal split layout with image on the left side. Great for desktop experiences.",
      component: OnboardingStepImageLeft,
      useInputs: true,
    },
    {
      variantName: "Image on Right",
      description: "Horizontal split layout with image on the right side. Alternative to left layout.",
      component: OnboardingStepImageRight,
    },
    {
      variantName: "Background Image",
      description: "Content overlays a background image with gradient. Perfect for hero moments.",
      component: OnboardingStepBackgroundImage,
      useInputs: true,
    },
    {
      variantName: "Compact Card",
      description: "Minimal, compact design with small image badge. Space-efficient option.",
      component: OnboardingStepCompact,
    },
    {
      variantName: "Wide Hero",
      description: "Full-width hero section with large image. Makes a bold statement.",
      component: OnboardingStepHero,
      useInputs: true,
    },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Onboarding Step UI Variants</h1>
        <p className="text-lg text-muted-foreground">
          Explore different UI layouts for onboarding steps. All variants use the same{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">OnboardingStepProps</code> interface,
          making them easy to swap and customize.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {variants.map((variant) => (
          <VariantDemo key={variant.variantName} {...variant} />
        ))}
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Usage Notes</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>All variants accept the same <code>OnboardingStepProps</code> interface</li>
          <li>Swap between variants without changing your data structure</li>
          <li>Each variant is responsive and adapts to different screen sizes</li>
          <li>Use within <code>react-use-wizard</code> for automatic step navigation</li>
          <li>Customize styling with the <code>className</code> prop</li>
          <li>Add custom content with the <code>customContent</code> prop</li>
        </ul>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">Choosing the Right Variant</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Mobile-First</h3>
            <p className="text-sm text-muted-foreground">
              Use <strong>Image on Top</strong> or <strong>Compact Card</strong> for mobile-optimized flows
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Desktop-First</h3>
            <p className="text-sm text-muted-foreground">
              Use <strong>Image Left/Right</strong> or <strong>Wide Hero</strong> for desktop experiences
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">High Impact</h3>
            <p className="text-sm text-muted-foreground">
              Use <strong>Background Image</strong> or <strong>Wide Hero</strong> for memorable first impressions
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Quick & Efficient</h3>
            <p className="text-sm text-muted-foreground">
              Use <strong>Compact Card</strong> for short, to-the-point onboarding flows
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

