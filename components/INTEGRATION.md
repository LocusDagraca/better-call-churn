# Onboarding + Paywall Integration Guide

This guide shows how to use the pricing step as part of your onboarding flow.

## Quick Start

The `OnboardingPricingStep` is designed to be the final step of your onboarding wizard:

```tsx
"use client"

import { useState } from "react"
import { 
  OnboardingWizard, 
  OnboardingStep, 
  OnboardingPricingStep,
  type PricingPlan 
} from "@/components/onboarding"

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    buttonText: "Start Free Trial",
  },
  {
    id: "pro",
    name: "Professional",
    price: "$99",
    description: "For growing businesses",
    features: ["All Starter features", "Feature 4", "Feature 5"],
    highlighted: true,
    buttonText: "Start Free Trial",
  },
]

export function MyApp() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)

  const handleSelectPlan = (planId: string) => {
    console.log("Selected plan:", planId)
    setIsOnboardingOpen(false)
    // Handle plan selection (e.g., API call, redirect to checkout)
  }

  return (
    <OnboardingWizard
      open={isOnboardingOpen}
      onOpenChange={setIsOnboardingOpen}
      title="Welcome"
      description="Let's get started"
    >
      <OnboardingStep
        title="Step 1"
        description="Welcome to our app"
        primaryCTA={{ label: "Continue" }}
      />
      
      <OnboardingStep
        title="Step 2"
        description="Here are our features"
        primaryCTA={{ label: "Continue" }}
        secondaryCTA={{ label: "Back" }}
      />
      
      <OnboardingPricingStep
        plans={pricingPlans}
        onSelectPlan={handleSelectPlan}
      />
    </OnboardingWizard>
  )
}
```

## Key Features

### Integrated Pricing Step
- Pricing is the last step in the onboarding flow
- No need for separate modal state management
- Seamless user experience from onboarding to pricing
- Uses AlertDialog (users can't escape without selecting)

### Responsive Design
- **Mobile**: Single column pricing cards
- **Tablet**: 2 column pricing cards
- **Desktop**: 3 column pricing cards
- Buttons adapt to screen size automatically

### Simple Flow
1. User goes through onboarding steps
2. Last step shows pricing options
3. User selects a plan
4. Onboarding closes and plan is handled
5. User proceeds to app

### State Management
```tsx
// Only need one state for the entire flow
const [isOnboardingOpen, setIsOnboardingOpen] = useState(true)

// Pricing selection closes the entire flow
const handleSelectPlan = (planId: string) => {
  setIsOnboardingOpen(false)
  // Handle plan selection
}
```

## Advanced Patterns

### Collect Data + Recommend Plan
Use onboarding data to highlight the best plan:

```tsx
const [userData, setUserData] = useState({ teamSize: 0 })
const [plans, setPlans] = useState(pricingPlans)

// Update recommended plan based on user input
const handleInputChange = (name: string, value: string) => {
  const newData = { ...userData, [name]: value }
  setUserData(newData)
  
  // Dynamically highlight recommended plan
  if (name === 'teamSize') {
    const size = parseInt(value)
    const updatedPlans = pricingPlans.map(p => ({
      ...p,
      highlighted: size > 10 ? p.id === 'enterprise' : 
                   size > 5 ? p.id === 'professional' : 
                   p.id === 'starter'
    }))
    setPlans(updatedPlans)
  }
}

<OnboardingWizard open={isOpen} onOpenChange={setIsOpen}>
  <OnboardingStep
    title="Tell us about your team"
    inputFields={[
      { name: "teamSize", label: "Team Size", type: "number" }
    ]}
    onInputChange={handleInputChange}
    primaryCTA={{ label: "See Plans" }}
  />
  
  <OnboardingPricingStep
    plans={plans}
    onSelectPlan={handleSelectPlan}
  />
</OnboardingWizard>
```

## API Integration Example

```tsx
const handleSelectPlan = async (planId: string) => {
  try {
    // Call your API
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ 
        planId, 
        userId: user.id,
        userData // Include onboarding data
      })
    })
    
    if (response.ok) {
      setIsOnboardingOpen(false)
      router.push('/dashboard')
    }
  } catch (error) {
    console.error('Subscription failed:', error)
    // Show error message (could add error state to OnboardingPricingStep)
  }
}
```

### Conditional Pricing Step

Only show pricing for certain users:

```tsx
<OnboardingWizard open={isOpen} onOpenChange={setIsOpen}>
  <OnboardingStep
    title="Welcome"
    primaryCTA={{ label: "Continue" }}
  />
  
  <OnboardingStep
    title="Your Info"
    inputFields={[...]}
    primaryCTA={{ label: user.plan === 'free' ? "See Plans" : "Get Started" }}
  />
  
  {/* Only show pricing if user is on free plan */}
  {user.plan === 'free' && (
    <OnboardingPricingStep
      plans={pricingPlans}
      onSelectPlan={handleSelectPlan}
    />
  )}
</OnboardingWizard>
```

## Styling

The wizard adapts to screen size automatically:

```tsx
<OnboardingWizard
  className="max-w-6xl" // Custom max width if needed
>
```

## See Also

- `/components/onboarding/README.md` - Full onboarding docs
- `/components/onboarding/onboarding-pricing-step.tsx` - Pricing step implementation
- `/components/onboarding/onboarding-example.tsx` - Complete working example

