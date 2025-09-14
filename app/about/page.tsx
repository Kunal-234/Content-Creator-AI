"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-cyan-50 dark:bg-cyan-950">
      <Header />
      <div className="text-gray-800 px-6 md:px-20 py-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text text-transparent dark:opacity-80">
              About Us
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
            At <span className="font-semibold text-cyan-500">ContentAI</span>, we’re building the future of content and code creation.
            From generating blog titles and social media captions to writing clean code and detecting bugs—our mission is to make creativity faster, smarter, and limitless.
          </p>
        </motion.div>

        {/* About Me + Story */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* About Me Section */}
          <div className="bg-white/30 dark:bg-white/5 dark:text-gray-300 p-6 rounded-2xl border border-cyan-400">
            <h2 className="text-3xl font-bold mb-4 text-cyan-500">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hi, I’m <span className="font-semibold">Kunal Kumar</span>, the creator of ContentAI.
              With a passion for technology and design, I wanted to create a platform where **AI and human creativity work together**.
              My vision is to empower creators, developers, and businesses with tools that save time, boost productivity, and spark new ideas.
            </p>
          </div>

          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-500">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ContentAI began with a simple question:
              “What if creating content and writing code could be as easy as having a conversation?”
              We set out to remove the barriers between ideas and execution, building a tool that helps creators brainstorm, developers code, and businesses communicate effectively.
              Today, ContentAI is more than a platform—it’s a creative partner.
            </p>
          </div>
        </motion.div>

        {/* Vision, Values, Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="bg-white/30 dark:bg-white/5 p-6 rounded-2xl border border-cyan-400">
            <h3 className="text-2xl font-bold mb-3 text-cyan-500">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To be the world’s most trusted AI companion for content and code—helping people create smarter every day.
            </p>
          </div>
          <div className="bg-white/30 dark:bg-white/5 p-6 rounded-2xl border border-cyan-400">
            <h3 className="text-2xl font-bold mb-3 text-cyan-500">Our Values</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We believe in **simplicity, innovation, and impact**—building tools that solve real problems while being easy to use.
            </p>
          </div>
          <div className="bg-white/30 dark:bg-white/5 p-6 rounded-2xl border border-cyan-400">
            <h3 className="text-2xl font-bold mb-3 text-cyan-500">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              To empower creators, developers, and innovators with AI-driven tools that save time, improve quality, and inspire creativity.
            </p>
          </div>
        </motion.div>

        {/* Closing Call-to-Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Ready to Create Smarter?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Join ContentAI today and experience a new way to write, code, and innovate.
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="group text-[18px] cursor-pointer rounded-none bg-gradient-to-br from-cyan-600 via-cyan-500 to-cyan-300 font-medium tracking-wide text-stone-100 shadow-lg dark:opacity-80"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
      <section className="pt-20">
      <Footer /> 
      </section>
    </div>
  )
}
