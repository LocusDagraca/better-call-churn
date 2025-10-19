# Paywall Component

A flexible, customizable fake paywall component built with AlertDialog that prevents users from escaping until they make a selection.

## Components

### FakePaywall

A pricing/paywall dialog that displays multiple plans with features and pricing.

**Props:**
- `open` (boolean): Controls the dialog visibility
- `onOpenChange` (function): Callback when dialog open state changes
- `title` (string, optional): Header title for the paywall (default: "Unlock Full Access")
- `description` (string, optional): Header description (default: "Choose the plan that works best for you")
- `plans` (PaywallPlan[], optional): Array of plan configurations (defaults to 3 preset plans)
- `onSelectPlan` (function, optional): Callback when a plan is selected with planId
- `className` (string, optional): Additional CSS classes

### PaywallPlan Type

```typescript
interface PaywallPlan {
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

### Basic Usage

```tsx
import { FakePaywall } from "@/components/paywall"

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectPlan = (planId: string) => {
    console.log("Selected:", planId)
    setIsOpen(false)
    // Handle plan selection (e.g., redirect to checkout)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Upgrade</button>
      
      <FakePaywall
        open={isOpen}
        onOpenChange={setIsOpen}
        onSelectPlan={handleSelectPlan}
      />
    </>
  )
}
```

### Custom Plans

```tsx
const customPlans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    description: "Get started",
    features: ["Feature 1", "Feature 2"],
    buttonText: "Get Started"
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49",
    description: "For professionals",
    features: ["All Free features", "Feature 3", "Feature 4"],
    highlighted: true,
    buttonText: "Start Free Trial"
  }
]

<FakePaywall
  open={isOpen}
  onOpenChange={setIsOpen}
  plans={customPlans}
  title="Choose Your Plan"
  description="14-day free trial, no credit card required"
  onSelectPlan={handleSelectPlan}
/>
```

## Features

- ✅ Uses AlertDialog (users can't escape without selecting)
- ✅ Responsive 3-column layout
- ✅ Highlighted "Most Popular" plan option
- ✅ Customizable plans and pricing
- ✅ Check-marked feature lists
- ✅ Fully typed with TypeScript
- ✅ Beautiful hover effects
- ✅ Mobile-friendly

## Integration with Onboarding

The paywall is designed to work seamlessly with the onboarding wizard:

```tsx
const handleOnboardingComplete = () => {
  setIsOnboardingOpen(false)
  setIsPaywallOpen(true) // Show paywall after onboarding
}

<OnboardingWizard
  open={isOnboardingOpen}
  onComplete={handleOnboardingComplete}
>
  {/* steps */}
</OnboardingWizard>

<FakePaywall
  open={isPaywallOpen}
  onSelectPlan={handleSelectPlan}
/>
```

## Default Plans

The component comes with 3 pre-configured plans:
1. **Starter** - $29/month (up to 1,000 customers)
2. **Professional** - $99/month (up to 10,000 customers, highlighted)
3. **Enterprise** - Custom pricing (unlimited customers)

## See Also

- See `onboarding-example.tsx` for integration example
- Uses components from `components/ui/`: Button, AlertDialog
- Designed to pair with the OnboardingWizard component

