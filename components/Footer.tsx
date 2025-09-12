// components/Footer.tsx
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-50 dark:bg-cyan-950  text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-cyan-400 dark:text-cyan-400">
            ContentAI
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
            AI-powered content creation and collaboration platform. Write, edit,
            and scale your ideas with the help of AI.
          </p>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900 dark:text-white mb-4">
            Product
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Integrations</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Changelog</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900 dark:text-white mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Docs</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Community</a></li>
            <li><a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h3>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg 
                         bg-cyan-50/50 dark:bg-cyan-900 
                         border border-gray-400 dark:border-gray-700 
                         text-sm text-gray-800 dark:text-white 
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg 
                         bg-cyan-600 hover:bg-cyan-700 
                         dark:bg-cyan-500 dark:hover:bg-cyan-400 
                         text-white text-sm font-medium transition"
            >
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-cyan-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-700 dark:text-white">
            © 2025 ContentAI. All rights reserved.
          </p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
