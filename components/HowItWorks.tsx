import Image from 'next/image'
import { Badge } from './ui/badge'

const steps = [
  {
    stepno: 1,
    image: '/card1.svg',
    title: 'Sign Up & Get Free Credits',
    description: 'Create your account and instantly receive 100,000 free credits to start using ContentAI.',
  },
  {
    stepno: 2,
    image: '/card2.svg',
    title: 'Generate with AI',
    description: 'Use your credits to create content, debug code, or get AI-powered suggestions tailored to your needs.',
  },
  {
    stepno: 3,
    image: '/card3.svg',
    title: 'Organize & Scale',
    description: 'Manage your content with tags, filters, and history tracking. Upgrade anytime for more credits and premium features.',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-16 font-geist">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl tracking-tighter md:text-4xl">How It Works</h2>
        <p className="text-muted-foreground font-geist mx-auto mt-2 max-w-2xl text-[16px] tracking-tight">
          A simple 3-step workflow to get started with ContentAI.
        </p>
      </div>
      {/* cards */}
      <div className="relative mx-auto mt-10 w-[90%] tracking-tight xl:w-[78%]">
        <div className="w-full border-t border-black/30 dark:border-white/30" />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`-mt-3 -mb-3 flex flex-col border-x border-black/30 dark:border-white/30 px-6 py-8 md:border-b-0 ${idx !== 2 ? 'border-b' : ''}`}
            >
              <Badge
                className="mb-3 bg-cyan-100 dark:bg-cyan-900 text-black dark:text-white rounded-none px-4 py-1 text-sm"
              >{`Step ${step.stepno}`}</Badge>
              <Image
                src={step.image}
                alt="step illustration"
                width={100}
                height={100}
                className={`px-3 opacity-70 ${idx === 0 ? 'h-[90%] w-[90%]' : 'h-full w-full'}`}
              />
              <div className="mt-6">
                <h1 className="text-[18px] font-semibold">{step.title}</h1>
                <p className="text-muted-foreground leading-5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-b border-black/30 dark:border-white/30" />
      </div>
    </section>
  )
}
