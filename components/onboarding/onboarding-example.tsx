"use client"

import * as React from "react"
import { OnboardingWizard, OnboardingStep, OnboardingPricingStep, type PricingPlan } from "./index"
import { Button } from "@/components/ui/button"

/**
 * Example usage of the OnboardingWizard and OnboardingStep components
 * 
 * This component demonstrates various features:
 * - Basic steps with title and description
 * - Steps with images
 * - Steps with input fields
 * - Custom CTAs
 * - Skip functionality
 * - Custom content
 * - Pricing step as final step
 */

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams",
    features: [
      "Up to 1,000 customers",
      "Basic churn analytics",
      "Email support",
      "1 team member",
    ],
    buttonText: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    price: "$99",
    description: "For growing businesses",
    features: [
      "Up to 10,000 customers",
      "Advanced analytics & insights",
      "Priority support",
      "5 team members",
      "Custom integrations",
      "API access",
    ],
    highlighted: true,
    buttonText: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features & support",
    features: [
      "Unlimited customers",
      "AI-powered predictions",
      "24/7 dedicated support",
      "Unlimited team members",
      "White-label options",
      "Custom SLA",
    ],
    buttonText: "Contact Sales",
  },
]

export function OnboardingExample() {
  const [isOnboardingOpen, setIsOnboardingOpen] = React.useState(false)
  const [userData, setUserData] = React.useState<Record<string, string>>({})

  const handleInputChange = (name: string, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectPlan = (planId: string) => {
    console.log("Selected plan:", planId)
    console.log("User data:", userData)
    setIsOnboardingOpen(false)
    alert(`You selected the ${planId} plan! 🎉`)
  }

  return (
    <div>
      <Button onClick={() => setIsOnboardingOpen(true)}>
        Start Onboarding
      </Button>

      <OnboardingWizard
        className="w-auto "
        open={isOnboardingOpen}
        onOpenChange={setIsOnboardingOpen}
        title="Welcome to Better Call Churn"
        description="Let's get you set up in just a few steps"
      >
        {/* Step 1: Welcome */}
        <OnboardingStep
          title="Welcome! 👋"
          description="We're excited to have you here. Let's take a quick tour to help you get started."
          image="/next.svg"
          imageAlt="Welcome illustration"
          primaryCTA={{
            label: "Let's Go",
          }}
          // showSkip
        />

        {/* Step 2: Personal Info */}
        <OnboardingStep
          title="Tell us about yourself"
          description="Help us personalize your experience"
          inputFields={[
            {
              name: "name",
              label: "Full Name",
              placeholder: "John Doe",
              required: true,
            },
            {
              name: "email",
              label: "Email",
              placeholder: "john@example.com",
              type: "email",
              required: true,
            },
            {
              name: "company",
              label: "Company",
              placeholder: "Acme Inc.",
            },
          ]}
          onInputChange={handleInputChange}
          primaryCTA={{
            label: "Continue",
          }}
          secondaryCTA={{
            label: "Back",
          }}
        />

        {/* Step 3: Features */}
        <OnboardingStep
          title="Powerful Features"
          description="Track customer churn, analyze trends, and take action to improve retention."
          image="/vercel.svg"
          imageAlt="Features"
          primaryCTA={{
            label: "Next",
          }}
          secondaryCTA={{
            label: "Back",
          }}
        />

        {/* Step 4: Pricing - Final Step */}
        <OnboardingPricingStep
          title="Choose Your Plan"
          description="Start with a 14-day free trial. No credit card required."
          plans={pricingPlans}
          onSelectPlan={handleSelectPlan}
        />
      </OnboardingWizard>
    </div>
  )
}

