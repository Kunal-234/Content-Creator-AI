import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'


const faqs = [
  {
    question: 'How does the free plan work?',
    answer: 'Every new user gets 100,000 free credits to explore all ContentAI tools without any cost.',
  },
  {
    question: 'What happens when I run out of credits?',
    answer:
      'Once your free credits are used up, you can upgrade to a paid plan to continue using ContentAI without interruption.',
  },
  {
    question: 'Do I need an account to use ContentAI?',
    answer:
      'Yes, you need to sign up to track your credit usage and securely save your generated content.',
  },
  {
    question: 'Can I self-host ContentAI?',
    answer: 'No, ContentAI is a managed SaaS platform and not available for self-hosting.',
  },
  {
    question: 'Can I contribute to ContentAI?',
    answer: 'Yes! While the core platform is SaaS, we welcome feedback, feature requests, and integrations.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. Your inputs and generated outputs are private and securely tied to your account. We never share your data.',
  },
  {
    question: 'Will there be premium features?',
    answer:
      'Yes. Paid plans will unlock higher credit limits, advanced AI models, and priority processing.',
  },
];


export default function FAQs() {
  return (
    <section className="w-full px-5 py-24 sm:px-8 lg:px-16 font-geist">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl tracking-tighter md:text-4xl">FAQs.</h2>
        <p className="text-muted-foreground  mx-auto mt-1 max-w-2xl text-[16px] tracking-tight">
          Got questions? We’ve got answers.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="font-geist mx-auto mt-8 w-full max-w-lg text-center"
        defaultValue="item-1"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="cursor-pointer text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-left text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}