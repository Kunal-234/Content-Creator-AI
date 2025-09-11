'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function BillingPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center py-16 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-cyan-700 mb-10"
      >
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500'> Choose Your Plan </span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-[960px] w-full mt-2">
        {/* Free Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 rounded-2xl shadow border border-cyan-100 p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-cyan-500 mb-4">Free</h2>
            <p className="text-gray-600 mb-6">Perfect for trying out the AI Content Generator.</p>
            <p className="text-4xl font-bold text-cyan-500 mb-6">$0<span className="text-lg font-normal text-gray-500">/mo</span></p>

            <ul className="space-y-3">
              {['Get 5000 free credit points','Generate up to 20 contents / month', 'Basic support', 'Access to free templates'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-cyan-500 mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <Link href='/dashboard'>
            <Button
              className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 text-white text-lg rounded-xl py-6 cursor-pointer">
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Pro Plan */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-600 rounded-2xl shadow-xl p-8 flex flex-col justify-between text-white relative overflow-hidden"
        >
          <div>
            <span className="absolute top-4 right-4 bg-white text-cyan-600 text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
            <h2 className="text-3xl font-bold mb-4">Pro</h2>
            <p className="text-cyan-100 mb-6">For professionals who need unlimited AI content generation.</p>
            <p className="text-4xl font-bold mb-6">$19<span className="text-lg font-normal text-cyan-200">/mo</span></p>

            <ul className="space-y-3">
              {['Unlimited content generation', 'Premium templates', 'Priority support', 'Team collaboration'].map((item, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-white mr-2" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <Button className="mt-8 w-full bg-white text-cyan-600 hover:bg-cyan-50 text-lg rounded-xl py-6 cursor-pointer">
            Upgrade to Pro
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
