# Onboarding Step UI Variants

This document describes the different UI layout variants available for onboarding steps.

## Overview

All variants use the same `OnboardingStepProps` interface, making them interchangeable. Choose the variant that best fits your design needs.

## Variants

### 1. OnboardingStepImageTop (Default)
**File:** `onboarding-step-variants.tsx`

**Layout:** Vertical with image above content

**Best For:**
- Mobile-first designs
- Simple, straightforward flows
- When you want content centered

**Features:**
- Image displays above content
- Text centered
- Buttons stack on mobile, side-by-side on desktop
- Skip button on the left

---

### 2. OnboardingStepImageLeft
**File:** `onboarding-step-variants.tsx`

**Layout:** Horizontal split with image on left

**Best For:**
- Desktop experiences
- Forms and data collection
- When you have wide screens

**Features:**
- Image takes 50% width on desktop
- Content aligned left
- Responsive (stacks vertically on mobile)
- Great for input fields

---

### 3. OnboardingStepImageRight
**File:** `onboarding-step-variants.tsx`

**Layout:** Horizontal split with image on right

**Best For:**
- Desktop experiences
- Alternative to left layout
- Reading flow from left to right

**Features:**
- Image takes 50% width on desktop
- Content aligned left
- Responsive (stacks vertically on mobile)
- Mirror image of the left variant

---

### 4. OnboardingStepBackgroundImage
**File:** `onboarding-step-variants.tsx`

**Layout:** Content overlays background image

**Best For:**
- Hero moments
- Marketing-focused onboarding
- High-impact first impressions
- Emotional connection

**Features:**
- Full background image with gradient overlay
- White text on dark gradient
- Dramatic, engaging look
- Perfect for welcome screens

**Note:** Ensure images have good contrast with white text

---

### 5. OnboardingStepCompact
**File:** `onboarding-step-variants.tsx`

**Layout:** Minimal card with small image badge

**Best For:**
- Quick onboarding flows
- Space-constrained layouts
- Multiple steps in succession
- Subtle, professional look

**Features:**
- Small circular image badge (64x64)
- Compact spacing
- Border card design
- Efficient use of space
- Smaller buttons and text

---

### 6. OnboardingStepHero
**File:** `onboarding-step-variants.tsx`

**Layout:** Full-width hero with large image

**Best For:**
- Landing pages
- Feature announcements
- Important milestones
- Bold statements

**Features:**
- Large, wide image (up to 320px height)
- Generous spacing
- Large typography (4xl-5xl headings)
- Maximum visual impact
- Perfect for key moments in the flow

---

## Usage Example

```tsx
import {
  OnboardingWizard,
  OnboardingStepImageLeft,
  OnboardingStepBackgroundImage,
  OnboardingStepHero,
} from "@/components/onboarding"

function MyOnboarding() {
  return (
    <OnboardingWizard open={isOpen} onOpenChange={setIsOpen}>
      {/* Hero for welcome */}
      <OnboardingStepHero
        title="Welcome to Our Platform"
        description="Let's get started on your journey"
        image="/hero.jpg"
        primaryCTA={{ label: "Begin" }}
      />

      {/* Image Left for form */}
      <OnboardingStepImageLeft
        title="Your Information"
        image="/form.jpg"
        inputFields={[
          { name: "name", label: "Name", required: true },
          { name: "email", label: "Email", type: "email", required: true },
        ]}
        primaryCTA={{ label: "Next" }}
        secondaryCTA={{ label: "Back" }}
      />

      {/* Background for final step */}
      <OnboardingStepBackgroundImage
        title="You're All Set!"
        description="Let's start building something amazing"
        image="/celebration.jpg"
        primaryCTA={{ label: "Get Started" }}
      />
    </OnboardingWizard>
  )
}
```

## Mixing Variants

You can mix and match variants within the same wizard! Each step can use a different layout:

```tsx
<OnboardingWizard open={isOpen} onOpenChange={setIsOpen}>
  <OnboardingStepHero {...step1Props} />
  <OnboardingStepImageLeft {...step2Props} />
  <OnboardingStepCompact {...step3Props} />
  <OnboardingStepBackgroundImage {...step4Props} />
</OnboardingWizard>
```

## Decision Guide

| Use Case | Recommended Variant |
|----------|-------------------|
| Mobile app onboarding | ImageTop, Compact |
| Desktop SaaS product | ImageLeft/Right, Hero |
| Marketing/Brand focused | BackgroundImage, Hero |
| Quick setup wizard | Compact, ImageTop |
| Feature announcement | Hero, BackgroundImage |
| Form-heavy flows | ImageLeft/Right |
| Space-constrained UI | Compact |

## Interactive Demo

Visit `/step-ui-variants` in your browser to see all variants in action with:
- Live interactive examples
- Toggle each variant on/off
- See responsive behavior
- Test with input fields
- Usage recommendations

## Customization

All variants support:
- Custom className for styling
- Custom content via `customContent` prop
- Input fields
- Primary and secondary CTAs
- Skip functionality
- Image support (optional)

## Responsive Behavior

| Variant | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| ImageTop | Stacked | Stacked | Stacked |
| ImageLeft | Stacked | Stacked | Side-by-side |
| ImageRight | Stacked | Stacked | Side-by-side |
| BackgroundImage | Full overlay | Full overlay | Full overlay |
| Compact | Card | Card | Card |
| Hero | Stacked | Stacked | Stacked (larger) |

## Development Notes

- All variants are in `onboarding-step-variants.tsx`
- Demo component is in `step-ui-variants-demo.tsx`
- All use `react-use-wizard` for navigation
- TypeScript typed with `OnboardingStepProps`
- Fully accessible
- No breaking changes to existing code

## Next Steps

1. Visit `/step-ui-variants` to explore
2. Choose the variant that fits your needs
3. Import and use in your `OnboardingWizard`
4. Customize with props and styling
5. Mix variants for optimal UX

