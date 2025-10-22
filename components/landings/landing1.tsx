import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, Sparkles, Layers, Users, Blocks, CreditCard, Shuffle } from "lucide-react";

export default function Landing1() {
  return (
    <div className="min-h-screen  font-sans    ">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border ">
        <TopCenterGradient />
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="mx-auto max-w-[60rem] text-center">

            {/* <div className="bg-gradient-to-r from-teal-400/0 via-teal-400 to-teal-400/0 h-[2px] rounded-2xl w-24 mb-8 mx-auto relative animate-in fade-in-0 zoom-in-95 "  >
                <div className="bg-gradient-to-r from-teal-400/20 via-teal-400 to-teal-400/20 h-[3px] w-24 absolute top-0 left-0 blur-sm" />
            </div> */}

            <div className="bg-gradient-to-t from-teal-400/100 via-teal-400 to-teal-400/70 h-9  w-3 mb-8 mx-auto relative animate-in fade-in-0 zoom-in-95 "  >
                <div className="bg-gradient-to-r from-teal-400/20 via-teal-400 to-teal-400/20 h-9 w-3 absolute top-0 left-0 blur-sm" />
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1 text-sm text-muted-foreground backdrop-blur-sm">
              <div className="size-2 bg-teal-400 rounded-full" />
              <span>100% Open Source - Built on shadcn/ui</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-normal  tracking-tighter   md:text-6xl  bg-gradient-to-r from-primary/60 via-primary to-primary/60 bg-clip-text text-transparent">
              Optimize revenue for your SaaS
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-lg">
              A framework to build better paywalls for TypeScript<br/>
              <span className="text-muted-foreground/60">UI Comps & Analytics with better-wall.dev</span>
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group gap-2 rounded-xl hover:rounded-2xl px-10" variant="better">
                Get Started
                {/* <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /> */}
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-xl px-10">
                {/* <Code2 className="size-4" /> */}
                Try Playground
              </Button>
            </div>
            
            <div className="mt-12 text-sm text-muted-foreground">
              npm install betterwall
            </div>
          </div>
        </div>
        
        {/* Decorative gradient */}
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-50" /> */}
      </section>

      {/* Intro Section - 3 Cards */}
      <section className="border-b border-border py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              What is <span className=" font-light bg-gradient-to-r from-primary  to-primary/60 bg-clip-text text-transparent">BETTER-WALL</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              An open-source library of production-ready components to improve user conversion & retention.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 - Onboarding */}
            <div className="group relative overflow-hidden rounded-2xl border-t border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border-t shadow-sm bg-primary/10 p-3">
                <Users className="size-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-medium text-card-foreground">
                1. Onboarding Flow
              </h3>
              <p className="text-muted-foreground">
                The Activation Step - Build an onboarding flow to activate users before paywall.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2 - Paywalls */}
            <div className="group relative overflow-hidden rounded-2xl border-t border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border-t shadow-sm bg-primary/10 p-3">
                <CreditCard className="size-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                2. Paywall
              </h3>
              <p className="text-muted-foreground">
                The Conversion Step - Build a better paywall that converts, with industry-standard practices.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3 - Churn Flows */}
            <div className="group relative overflow-hidden rounded-2xl border-t border-border bg-card p-8 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border-t shadow-sm bg-primary/10 p-3">
                <Shuffle className="size-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-card-foreground">
                3. Churn Flow
              </h3>
              <p className="text-muted-foreground">
                The Retention Step - Build your churn flow to lower churn & increase your MRR.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* Built on shadcn callout */}
          <div className="mt-16 rounded-lg border border-border bg-muted/30 p-8 text-center backdrop-blur-sm">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Blocks className="size-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Built on shadcn/ui</span>
            </div>
            <p className="text-muted-foreground">
              All components are built on top of Radix UI primitives and styled with Tailwind CSS.
              Copy, paste, and customize to match your design system.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              See it in action
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Interactive demos coming soon
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-dashed border-border bg-muted/20">
              <div className="text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-muted p-4">
                  <Code2 className="size-8 text-muted-foreground" />
                </div>
                <p className="text-lg font-medium text-muted-foreground">
                  Demo placeholder
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Interactive component demos will be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



function TopCenterGradient() {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden dark:block">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full h-[44rem]  opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgb(21 128 122 / 0.3) 0%, rgb(21 128 122 / 0.1) 0%, transparent 70%)'
          }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-1/2 w-full h-[44rem]  opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgb(21 128 122 / 0.3) 0%, rgb(21 128 122 / 0.1) 0%, transparent 30%)'
          }}
        />
      </div>
    )
  }
  