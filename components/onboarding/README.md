# Onboarding Components

A flexible, reusable onboarding wizard system built with React, TypeScript, and `react-use-wizard`.

## Components

### OnboardingWizard

The main wrapper component that creates an AlertDialog modal containing the wizard flow. Users cannot escape the onboarding without completing or explicitly dismissing it.

**Props:**
- `open` (boolean): Controls the dialog visibility
- `onOpenChange` (function): Callback when dialog open state changes
- `title` (string, optional): Header title for the wizard
- `description` (string, optional): Header description for the wizard
- `children` (ReactNode): The step components
- `className` (string, optional): Additional CSS classes
- `onComplete` (function, optional): Callback when wizard is completed

### OnboardingStep

A flexible step component that can handle various types of content.

**Responsive Design:**
- Mobile: Buttons stack vertically (full width)
- Desktop: Buttons side-by-side on the right

**Props:**
- `title` (string): Step title
- `description` (string, optional): Step description
- `image` (string, optional): Image URL to display
- `imageAlt` (string, optional): Alt text for the image
- `primaryCTA` (object, optional): Primary button configuration
  - `label` (string): Button text
  - `onClick` (function, optional): Custom click handler (defaults to next step)
- `secondaryCTA` (object, optional): Secondary button configuration
  - `label` (string): Button text
  - `onClick` (function, optional): Custom click handler (defaults to previous step)
- `showSkip` (boolean, default: false): Show a skip button
- `inputFields` (array, optional): Array of input field configurations
  - `name` (string): Field name
  - `placeholder` (string): Placeholder text
  - `type` (string, optional): Input type (default: "text")
  - `label` (string, optional): Field label
  - `required` (boolean, optional): Whether field is required
- `onInputChange` (function, optional): Callback when input values change
- `customContent` (ReactNode, optional): Custom content to render
- `className` (string, optional): Additional CSS classes

### OnboardingPricingStep

A specialized step component for displaying pricing plans as the final step of onboarding.

**Responsive Design:**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns

**Props:**
- `title` (string, optional): Step title (default: "Choose Your Plan")
- `description` (string, optional): Step description
- `plans` (PricingPlan[]): Array of pricing plan objects
- `onSelectPlan` (function): Callback when a plan is selected with planId
- `className` (string, optional): Additional CSS classes

**PricingPlan Type:**
```typescript
interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
}
```

## Usage Example

### Basic Example

```tsx
import { OnboardingWizard, OnboardingStep } from "@/components/onboarding"

function MyApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Start Onboarding</button>

      <OnboardingWizard
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Welcome"
        description="Let's get started"
      >
        <OnboardingStep
          title="Welcome! 👋"
          description="We're glad you're here"
          primaryCTA={{ label: "Continue" }}
          showSkip
        />

        <OnboardingStep
          title="Your Information"
          inputFields={[
            {
              name: "name",
              label: "Name",
              placeholder: "John Doe",
              required: true
            }
          ]}
          primaryCTA={{ label: "Next" }}
          secondaryCTA={{ label: "Back" }}
        />

        <OnboardingStep
          title="All Done! 🎉"
          primaryCTA={{
            label: "Get Started",
            onClick: () => {
              setIsOpen(false)
              // Handle completion
            }
          }}
        />
      </OnboardingWizard>
    </>
  )
}
```

### With Pricing Step

```tsx
import { 
  OnboardingWizard, 
  OnboardingStep, 
  OnboardingPricingStep 
} from "@/components/onboarding"

function MyApp() {
  const [isOpen, setIsOpen] = useState(false)

  const pricingPlans = [
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
    }
  ]

  const handleSelectPlan = (planId: string) => {
    console.log("Selected:", planId)
    setIsOpen(false)
    // Handle plan selection
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Start Onboarding</button>

      <OnboardingWizard
        open={isOpen}
        onOpenChange={setIsOpen}
        title="Welcome"
      >
        <OnboardingStep
          title="Welcome! 👋"
          primaryCTA={{ label: "Continue" }}
        />

        <OnboardingStep
          title="Your Information"
          inputFields={[
            { name: "email", label: "Email", type: "email", required: true }
          ]}
          primaryCTA={{ label: "Next" }}
          secondaryCTA={{ label: "Back" }}
        />

        <OnboardingPricingStep
          plans={pricingPlans}
          onSelectPlan={handleSelectPlan}
        />
      </OnboardingWizard>
    </>
  )
}
```

## Features

- ✅ Multi-step wizard flow
- ✅ AlertDialog modal (users can't escape)
- ✅ Automatic navigation (previous/next)
- ✅ Input field support with validation
- ✅ Custom content support
- ✅ Image support
- ✅ Built-in pricing step with responsive cards
- ✅ Skip functionality (left-aligned)
- ✅ Responsive button layout (stacked on mobile, side-by-side on desktop)
- ✅ Fully typed with TypeScript
- ✅ Customizable CTAs
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible
- ✅ Pricing cards adapt to screen size (1/2/3 columns)

## UI Variants

In addition to the default `OnboardingStep` component, we provide multiple UI layout variants that all accept the same `OnboardingStepProps` interface:

### Available Variants

1. **OnboardingStepImageTop** - Classic vertical layout with image above content (default)
2. **OnboardingStepImageLeft** - Horizontal split with image on left, content on right
3. **OnboardingStepImageRight** - Horizontal split with image on right, content on left
4. **OnboardingStepBackgroundImage** - Content overlays a background image with gradient
5. **OnboardingStepCompact** - Minimal, compact design with small image badge
6. **OnboardingStepHero** - Full-width hero section with large image

### Using Variants

All variants are drop-in replacements for `OnboardingStep`:

```tsx
import { OnboardingWizard, OnboardingStepImageLeft } from "@/components/onboarding"

function MyApp() {
  return (
    <OnboardingWizard open={isOpen} onOpenChange={setIsOpen}>
      <OnboardingStepImageLeft
        title="Welcome!"
        description="Get started with our platform"
        image="https://example.com/image.jpg"
        primaryCTA={{ label: "Continue" }}
      />
    </OnboardingWizard>
  )
}
```

### View All Variants

Visit `/step-ui-variants` to see all variants in action with interactive demos and usage recommendations.

## See Also

- See `onboarding-example.tsx` for a complete working example
- See `onboarding-pricing-step.tsx` for pricing step implementation
- See `onboarding-step-variants.tsx` for all UI variant implementations
- See `step-ui-variants-demo.tsx` for interactive demos
- Visit `/step-ui-variants` page to test variants interactively
- Uses components from `components/ui/`: Button, AlertDialog, Input
- Built with `react-use-wizard` for wizard state management

