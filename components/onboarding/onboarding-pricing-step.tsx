import * as React from "react"
import { useWizard } from "react-use-wizard"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

export interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
}

export interface OnboardingPricingStepProps {
  title?: string
  description?: string
  plans: PricingPlan[]
  onSelectPlan: (planId: string) => void
  className?: string
}

export function OnboardingPricingStep({
  title = "Choose Your Plan",
  description = "Select the plan that works best for you",
  plans,
  onSelectPlan,
  className,
}: OnboardingPricingStepProps) {
  const { previousStep, isFirstStep } = useWizard()

  const handleSelectPlan = (planId: string) => {
    onSelectPlan(planId)
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 w-full max-w-5xl mx-auto",
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col gap-3 text-center w-full">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              "relative flex flex-col rounded-lg border p-5 transition-all hover:shadow-lg",
              plan.highlighted &&
                "border-primary shadow-md ring-2 ring-primary/20"
            )}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-3">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">
                {plan.description}
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground text-xs">/month</span>
                )}
              </div>
            </div>

            <ul className="mb-4 flex-1 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckIcon className="text-primary mt-0.5 size-4 shrink-0" />
                  <span className="text-xs">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant={plan.highlighted ? "default" : "outline"}
              onClick={() => handleSelectPlan(plan.id)}
              className="w-full"
            >
              {plan.buttonText || "Select Plan"}
            </Button>
          </div>
        ))}
      </div>

      {/* Footer with back button */}
      {!isFirstStep && (
        <div className="flex justify-start w-full">
          <Button variant="ghost" onClick={() => previousStep()}>
            Back
          </Button>
        </div>
      )}

      <div className="text-muted-foreground text-xs text-center">
        All plans include a 14-day free trial • No credit card required
      </div>
    </div>
  )
}

