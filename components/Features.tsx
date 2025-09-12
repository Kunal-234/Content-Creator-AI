import { cn } from '@/lib/utils'
import {
  Bot,
  FileText,
  Hash,
  Youtube,
  Sparkles,
  PenTool,
} from 'lucide-react'

const features = [
  {
    icon: <FileText size="40" />,
    title: 'Blog Generation',
    description:
      'Create SEO-friendly blog titles, outlines, and full posts in seconds — no more writer’s block.',
  },
  {
    icon: <Youtube size="40" />,
    title: 'YouTube Tools',
    description:
      'Generate optimized titles, tags, and descriptions that boost visibility and engagement.',
  },
  {
    icon: <Bot size="40" />,
    title: 'AI Writing Assistant',
    description:
      'Rewrite articles, improve grammar, and polish content instantly with advanced AI models.',
  },
  {
    icon: <Hash size="40" />,
    title: 'Social Media Magic',
    description:
      'Generate Instagram posts, hashtags, and trending ideas to keep your feed fresh and engaging.',
  },
  {
    icon: <PenTool size="40" />,
    title: 'Marketing Copy',
    description:
      'Craft catchy taglines, product descriptions, and ad copy tailored for your brand in seconds.',
  },
  {
    icon: <Sparkles size="40" />,
    title: '100,000 Free Credits',
    description:
      'Start creating immediately with 100k free credits — explore every feature without limits.',
  },
]

export default function Features() {
  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-16 font-geist">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl tracking-tighter md:text-4xl">
          Features that supercharge your creativity.
        </h2>
        <p className="text-muted-foreground font-geist mx-auto mt-2 max-w-2xl text-sm md:text-[16px] leading-5 tracking-tight">
          ContentAI is your all-in-one AI workspace.
          <br /> From blogs to social posts to code — create smarter, faster, and better.
        </p>
      </div>
      <div className="relative mx-auto mt-10 w-[90%] tracking-tight xl:w-[85%]">
        <div className="w-full border-t border-black/30 dark:border-white/40" />
        <div className="relative mx-4 -mt-4 border-x border-black/30 dark:border-white/40">
          <div className="grid grid-cols-1 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 [&>div]:min-h-[300px]">
            {features.map((feature, index) => {
              const isBottomRowTablet = index > 3
              const isBottomRowLaptop = index >= 3
              return (
                <div
                  key={index}
                  className={cn(
                    'border-black/20 dark:border-white/20 p-6',
                    index !== features.length - 1 && 'border-b',
                    !isBottomRowTablet && 'sm:border-b',
                    isBottomRowTablet && 'sm:border-b-0',
                    !isBottomRowLaptop && 'lg:border-b',
                    isBottomRowLaptop && 'lg:border-b-0',
                  )}
                >
                  {/* Vertical dividers for 3-column (desktop) */}
                  <div className="absolute top-4 right-1/3 bottom-4 hidden w-px bg-black/10 dark:bg-white/20 lg:block" />
                  <div className="absolute top-4 right-2/3 bottom-4 hidden w-[0.5px] bg-black/10 dark:bg-white/20 lg:block" />

                  {/* Vertical divider for 2-column (tablet) */}
                  <div className="absolute top-4 right-1/2 bottom-4 hidden w-[0.5px] bg-black/10 dark:bg-white/10 sm:block lg:hidden" />

                  <div className="px-6 py-10">
                    <p className="mb-1 text-2xl text-gray-600">{feature.icon}</p>
                    <h3 className="mt-4 text-[19px] text-gray-600 font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="-mt-4 w-full border-b border-black/30 dark:border-white/40" />
      </div>
    </section>
  )
}
