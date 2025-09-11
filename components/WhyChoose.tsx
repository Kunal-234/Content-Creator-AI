import { Check, X } from 'lucide-react'

export default function WhyContentAI() {
  return (
    <section className="w-full px-4 py-24 sm:px-8 lg:px-16 font-geist">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl tracking-tighter md:text-4xl">
          Why Choose <span className='text-primary'>ContentAI?</span> 
        </h2>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-[16px] leading-5 tracking-tight font-geist">
          Traditional content creation is slow, scattered, and repetitive.
          <br /> ContentAI gives you AI-powered tools to create, improve, and scale faster.
        </p>
      </div>
      <div className="relative mx-auto mt-10 w-[90%] tracking-tight sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%]">
        <div className="w-full border-t border-black/30 dark:border-white/30" />
        <div className="lg relative mx-4 -mt-4 h-fit border-x border-black/30 dark:border-white/30">
          <div className="absolute top-0 left-1/2 mt-4 hidden xl:h-[89%] w-px bg-black/30 dark:bg-white/30 lg:block lg:h-[92%]" />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Problems */}
            <div className="border-black/30 dark:border-white/30 py-7 font-geist">
              <div className="flex items-center justify-center gap-0.5">
                <X size={20} />
                <h1>Problems</h1>
              </div>
              <div className="mt-2 divide-y divide-black/10 dark:divide-white/20 text-[15px] leading-relaxed font-medium tracking-tight text-neutral-700 dark:text-white text-center lg:text-left">
                <p className="px-3 py-2">
                  Struggling to come up with fresh content ideas.
                </p>
                <p className="px-3 py-2">
                  Wasting hours writing blogs, captions, or descriptions manually.
                </p>
                <p className="px-3 py-2">
                  SEO optimization feels confusing and time-consuming.
                </p>
                <p className="px-3 py-2">
                  Content scattered across multiple tools and documents.
                </p>
                <p className="px-3 py-2">
                  Limited time to create high-quality, engaging posts consistently.
                </p>
              </div>
            </div>

            {/* Solutions */}
            <div className="border-t border-black/30 dark:border-white/30 py-7 lg:border-t-0 font-geist">
              <div className="flex items-center justify-center gap-0.5">
                <Check size={20} />
                <h1>Solutions</h1>
              </div>
              <div className="mt-2 divide-y divide-black/10 dark:divide-white/20 text-[15px] leading-relaxed font-medium tracking-tight text-neutral-700 dark:text-white text-center lg:text-left font-geist">
                <p className="px-3 py-2">
                  Generate blog titles, posts, and ideas in seconds.
                </p>
                <p className="px-3 py-2">
                  Create SEO-optimized YouTube titles, tags, and descriptions easily.
                </p>
                <p className="px-3 py-2">
                  Improve grammar, rewrite articles, or even generate code instantly.
                </p>
                <p className="px-3 py-2">
                  Manage all AI-generated content in one simple workspace.
                </p>
                <p className="px-3 py-2">
                  Get started free with 100,000 credits — no risk, just results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-4 w-full border-b border-black/30 dark:border-white/30" />
      </div>
    </section>
  )
}
