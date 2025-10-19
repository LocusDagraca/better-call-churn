"use client"

import * as React from "react"
import { Wizard } from "react-use-wizard"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog"
import { cn } from "@/lib/utils"

export interface OnboardingWizardProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  onComplete?: () => void
}

export function OnboardingWizard({
  open,
  onOpenChange,
  title,
  description,
  children,
  className,
  onComplete,
}: OnboardingWizardProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className={cn("max-w-[90vw] md:max-w-5xl ", className)}
      >
        {(title || description) && (
          <AlertDialogHeader>
            {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
            {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
          </AlertDialogHeader>
        )}
        <div className="py-4">
          <Wizard>
            {children}
          </Wizard>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}

