import * as React from "react"
import { useWizard } from "react-use-wizard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { OnboardingStepProps } from "./onboarding-step"

/**
 * VARIANT 1: Image on Top (Default)
 * Classic vertical layout with image above content
 */
export function OnboardingStepImageTop({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
        "flex flex-col items-center gap-6 w-auto min-w-md max-w-md mx-auto",
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
                <label htmlFor={field.name} className="text-sm font-medium text-left">
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
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
      <div className="flex gap-3 w-full mt-2">
        {showSkip && !isLastStep && (
          <div className="flex justify-start">
            <Button variant="outline" onClick={() => nextStep()}>
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
            <Button size="lg" onClick={handlePrimaryCTA} className="w-full sm:w-auto">
              {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * VARIANT 2: Image on Left, Content on Right
 * Horizontal split layout with image on left side
 */
export function OnboardingStepImageLeft({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
        "flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto items-center",
        className
      )}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="max-w-full h-auto max-h-96 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className={cn("flex flex-col gap-6 w-full", image ? "md:w-1/2" : "")}>
        <div className="flex flex-col gap-3 text-left">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          )}
        </div>

        {/* Input Fields */}
        {inputFields.length > 0 && (
          <div className="flex flex-col gap-4 w-full">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                {field.label && (
                  <label htmlFor={field.name} className="text-sm font-medium text-left">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
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
        <div className="flex flex-col gap-3 w-full mt-2">
          {showSkip && !isLastStep && (
            <div className="flex justify-start">
              <Button variant="ghost" onClick={() => nextStep()}>
                Skip
              </Button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 w-full">
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
              <Button size="lg" onClick={handlePrimaryCTA} className="w-full sm:w-auto">
                {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * VARIANT 3: Image on Right, Content on Left
 * Horizontal split layout with image on right side
 */
export function OnboardingStepImageRight({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
        "flex flex-col md:flex-row-reverse gap-8 w-full max-w-4xl mx-auto items-center",
        className
      )}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="max-w-full h-auto max-h-96 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className={cn("flex flex-col gap-6 w-full", image ? "md:w-1/2" : "")}>
        <div className="flex flex-col gap-3 text-left">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          )}
        </div>

        {/* Input Fields */}
        {inputFields.length > 0 && (
          <div className="flex flex-col gap-4 w-full">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                {field.label && (
                  <label htmlFor={field.name} className="text-sm font-medium text-left">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
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
        <div className="flex flex-col gap-3 w-full mt-2">
          {showSkip && !isLastStep && (
            <div className="flex justify-start">
              <Button variant="ghost" onClick={() => nextStep()}>
                Skip
              </Button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 w-full">
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
              <Button size="lg" onClick={handlePrimaryCTA} className="w-full sm:w-auto">
                {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * VARIANT 4: Card with Background Image
 * Content overlays a background image with gradient
 */
export function OnboardingStepBackgroundImage({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
        "relative flex flex-col items-center gap-6 w-full max-w-2xl mx-auto rounded-xl overflow-hidden min-h-[500px] justify-end p-8",
        className
      )}
    >
      {/* Background Image with Gradient Overlay */}
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt || title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </>
      )}

      {/* Content Section */}
      <div className="relative z-10 flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-3 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-white/90 text-base leading-relaxed">{description}</p>
          )}
        </div>

        {/* Input Fields */}
        {inputFields.length > 0 && (
          <div className="flex flex-col gap-4 w-full">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                {field.label && (
                  <label htmlFor={field.name} className="text-sm font-medium text-left text-white">
                    {field.label}
                    {field.required && <span className="text-red-400 ml-1">*</span>}
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
                  className="bg-white/95"
                />
              </div>
            ))}
          </div>
        )}

        {/* Custom Content */}
        {customContent && <div className="w-full">{customContent}</div>}

        {/* CTA Section */}
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                onClick={handleSecondaryCTA}
                className="w-full sm:w-auto bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                {secondaryCTA.label || "Back"}
              </Button>
            )}

            {primaryCTA && (
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90"
              >
                {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
              </Button>
            )}
          </div>

          {showSkip && !isLastStep && (
            <div className="flex justify-center">
              <Button variant="link" className="text-white/70 hover:text-white" onClick={() => nextStep()}>
                Skip for now
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * VARIANT 5: Compact Card Style
 * Minimal, compact design with small image badge
 */
export function OnboardingStepCompact({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
        "flex flex-col gap-4 w-full max-w-md mx-auto p-6 rounded-lg border bg-card",
        className
      )}
    >
      {/* Image Badge */}
      {image && (
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-16 h-16 object-contain rounded-full border-2 border-border"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground text-xs leading-relaxed">{description}</p>
        )}
      </div>

      {/* Input Fields */}
      {inputFields.length > 0 && (
        <div className="flex flex-col gap-3 w-full">
          {inputFields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              {field.label && (
                <label htmlFor={field.name} className="text-xs font-medium text-left">
                  {field.label}
                  {field.required && <span className="text-destructive ml-1">*</span>}
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
                className="h-9"
              />
            </div>
          ))}
        </div>
      )}

      {/* Custom Content */}
      {customContent && <div className="w-full">{customContent}</div>}

      {/* CTA Section */}
      <div className="flex flex-col gap-2 w-full mt-2">
        <div className="flex gap-2 w-full">
          {secondaryCTA && (
            <Button
              variant="outline"
              onClick={handleSecondaryCTA}
              className="flex-1"
              size="sm"
            >
              {secondaryCTA.label || "Back"}
            </Button>
          )}

          {primaryCTA && (
            <Button onClick={handlePrimaryCTA} className="flex-1" size="sm">
              {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
            </Button>
          )}
        </div>

        {showSkip && !isLastStep && (
          <Button variant="ghost" size="sm" onClick={() => nextStep()}>
            Skip
          </Button>
        )}
      </div>
    </div>
  )
}

/**
 * VARIANT 6: Wide Hero Style
 * Full-width hero section with large image
 */
export function OnboardingStepHero({
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
  const { nextStep, previousStep, isFirstStep, isLastStep } = useWizard()
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
    <div className={cn("flex flex-col gap-8 w-full max-w-5xl mx-auto", className)}>
      {/* Image Section - Hero Size */}
      {image && (
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-auto max-h-80 object-cover rounded-xl"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </div>

        {/* Input Fields */}
        {inputFields.length > 0 && (
          <div className="flex flex-col gap-4 w-full max-w-md">
            {inputFields.map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                {field.label && (
                  <label htmlFor={field.name} className="text-sm font-medium text-left">
                    {field.label}
                    {field.required && <span className="text-destructive ml-1">*</span>}
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
                  className="h-12 text-base"
                />
              </div>
            ))}
          </div>
        )}

        {/* Custom Content */}
        {customContent && <div className="w-full max-w-2xl">{customContent}</div>}

        {/* CTA Section */}
        <div className="flex flex-col gap-4 items-center w-full max-w-md">
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                onClick={handleSecondaryCTA}
                className="w-full sm:flex-1 h-12"
              >
                {secondaryCTA.label || "Back"}
              </Button>
            )}

            {primaryCTA && (
              <Button
                size="lg"
                onClick={handlePrimaryCTA}
                className="w-full sm:flex-1 h-12 text-base"
              >
                {primaryCTA.label || (isLastStep ? "Get Started" : "Continue")}
              </Button>
            )}
          </div>

          {showSkip && !isLastStep && (
            <Button variant="ghost" onClick={() => nextStep()}>
              Skip this step
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

