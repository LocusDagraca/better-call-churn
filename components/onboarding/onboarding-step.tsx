import * as React from "react"
import { useWizard } from "react-use-wizard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export interface OnboardingStepProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  primaryCTA?: {
    label: string
    onClick?: () => void
  }
  secondaryCTA?: {
    label: string
    onClick?: () => void
  }
  showSkip?: boolean
  inputFields?: Array<{
    name: string
    placeholder: string
    type?: string
    label?: string
    required?: boolean
  }>
  onInputChange?: (name: string, value: string) => void
  customContent?: React.ReactNode
  className?: string
}

export function OnboardingStep({
  title,
  description,
  image,
  imageAlt,
  primaryCTA,
  secondaryCTA,
  showSkip = false,
  inputFields = [],
  onInputChange,
  customContent,
  className,
}: OnboardingStepProps) {
  const { nextStep, previousStep, isFirstStep, isLastStep, handleStep } = useWizard()
  const [formData, setFormData] = React.useState<Record<string, string>>({})

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    onInputChange?.(name, value)
  }

  const handlePrimaryCTA = () => {
    if (primaryCTA?.onClick) {
      primaryCTA.onClick()
    } else if (!isLastStep) {
      nextStep()
    }
  }

  const handleSecondaryCTA = () => {
    if (secondaryCTA?.onClick) {
      secondaryCTA.onClick()
    } else if (!isFirstStep) {
      previousStep()
    }
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6 w-auto min-w-md max-w-md mx-auto ",
        className
      )}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="max-w-full h-auto max-h-64 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col gap-3 text-center w-full">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Input Fields */}
      {inputFields.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          {inputFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              {field.label && (
                <label
                  htmlFor={field.name}
                  className="text-sm font-medium text-left"
                >
                  {field.label}
                  {field.required && (
                    <span className="text-destructive ml-1">*</span>
                  )}
                </label>
              )}
              <Input
                id={field.name}
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                required={field.required}
              />
            </div>
          ))}
        </div>
      )}

      {/* Custom Content */}
      {customContent && <div className="w-full">{customContent}</div>}

      {/* CTA Section */}
      <div className="flex  gap-3 w-full mt-2 ">
        {showSkip && !isLastStep && (
          <div className="flex justify-start">
            <Button
              variant="outline"
              onClick={() => nextStep()}
            >
              Skip
            </Button>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-end gap-2 w-full">
          {secondaryCTA && (
            <Button
              size="lg"
              variant="outline"
              onClick={handleSecondaryCTA}
              className="w-full sm:w-auto"
            >
              {secondaryCTA.label || "Back"}
            </Button>
          )}

          {primaryCTA && (
            <Button 
              size="lg" 
              onClick={handlePrimaryCTA}
              className="w-full sm:w-auto"
            >
              {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

