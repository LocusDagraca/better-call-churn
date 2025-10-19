"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

export interface PaywallPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
}

export interface FakePaywallProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  plans?: PaywallPlan[]
  onSelectPlan?: (planId: string) => void
  className?: string
}

const defaultPlans: PaywallPlan[] = [
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

export function FakePaywall({
  open,
  onOpenChange,
  title = "Unlock Full Access",
  description = "Choose the plan that works best for you",
  plans = defaultPlans,
  onSelectPlan,
  className,
}: FakePaywallProps) {
  const handleSelectPlan = (planId: string) => {
    console.log("Selected plan:", planId)
    if (onSelectPlan) {
      onSelectPlan(planId)
    } else {
      // Default behavior - just close the dialog
      onOpenChange(false)
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className={cn("max-w-5xl", className)}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid gap-6 py-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-lg border p-6 transition-all hover:shadow-lg",
                plan.highlighted &&
                  "border-primary shadow-md ring-2 ring-primary/20"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground text-sm">/month</span>
                  )}
                </div>
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon className="text-primary mt-0.5 size-4 shrink-0" />
                    <span className="text-sm">{feature}</span>
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

        <div className="text-muted-foreground flex justify-center gap-1 text-xs">
          <span>All plans include a 14-day free trial.</span>
          <span>No credit card required.</span>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

