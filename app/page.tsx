import Image from "next/image";
import { OnboardingExample } from "@/components/onboarding/onboarding-example";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
         <OnboardingExample />
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-5"
          href="/step-ui-variants"
        >
          View Step UI Variants →
        </a>
        <ModeToggle />
       
    </div>
  );
}
