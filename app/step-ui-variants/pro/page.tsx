import { OnboardingStepProps } from "@/components/onboarding/onboarding-step";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export default function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <ProCardV1
                title="Tell Us About Yourself"
                description="What is your role in the company?"
                primaryCTA={{ label: "Continue" }}
                secondaryCTA={{ label: "Back" }}
                customContent={<div className="w-full">
                    <Input type="text" placeholder="Enter your role" />
                </div>}
             />
        </div>
    )




}


function ProCardV1({
    title,
    description,
    image,
    imageAlt,
    primaryCTA,
    secondaryCTA,
    showSkip,
    inputFields,
    onInputChange,
    customContent

}: OnboardingStepProps){


    return (
        <div className="min-h-[500px] min-w-2xl flex flex-col items-center justify-center  border rounded-xl bg-card overflow-hidden">
            <div className="w-full flex-1 flex flex-col items-center justify-center bg-neutral-700">
                <h1 className="text-2xl font-medium">Tell Us About <span className="italic font-light">Yourself</span></h1>
            </div>
            <div className="w-full px-8 pb-8 pt-4 flex flex-col gap-4">
                <p className="text-md text-muted-foreground">{description}</p>
                {/* <img src={image} alt={imageAlt} /> */}
                {customContent && <div className="w-full">{customContent}</div>}
                <div className="flex gap-2 justify-end">

                <Button variant="outline" size="lg" className="rounded-full">{secondaryCTA?.label}</Button>
                <Button size="lg" className="rounded-full">{primaryCTA?.label} </Button>
                </div>
            </div>
        </div>
    )
}