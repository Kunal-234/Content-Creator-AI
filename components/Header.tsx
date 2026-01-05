'use client'

import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useAuth, useClerk } from '@clerk/nextjs'
import {
  navMenuLinksSignedIn,
  navMenuLinksSignedOut,
} from '@/lib/constants/nav'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { AnimatedThemeToggler } from './magicui/animated-theme-toggler'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
  const { setTheme } = useTheme()
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const { signOut } = useClerk()

   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <header className="border-border supports-backdrop-blur:bg-background/80 bg-background/40 sticky top-0 z-40 w-full border-b px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* LEFT SIDE — logo + nav links */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1">
            <Image src='/logo1.svg' height={26} width={26} alt='logo' />
            <h1 className="font-bold text-2xl px-2 tracking-tight">
              <span className='text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-cyan-300 to-cyan-500'>ContentAI</span>
              </h1>
          </Link>

          {/* nav menu - desktop */}
          {isSignedIn ? (
            <div className="font-geist mt-1 hidden items-center font-medium md:flex">
              {navMenuLinksSignedIn.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="rounded-none px-3 py-1.5 text-[14px] text-gray-700 dark:text-white hover:bg-cyan-100 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : (
            <div className="font-geist mt-1 hidden items-center font-medium md:flex">
              {navMenuLinksSignedOut.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="rounded-none px-3 py-1.5 text-[14px] text-gray-700 dark:text-white hover:bg-cyan-100 dark:hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE — mode toggle + button */}
        <div className="hidden items-center gap-4 md:flex">
          {!isSignedIn ? (
            // <Badge className="pointer-events-none flex items-center rounded-lg px-4 py-2 text-[13px] tracking-wide">
            //   {resolvedTheme === 'dark' ? (
            //     <img src="/Github_light.svg" className="size-4" />
            //   ) : (
            //     <img src="/Github_dark.svg" className="size-4" />
            //   )}
            //   <p className="text-[13px] font-medium">Star on Github ⭐</p>
            //   {stars !== null && (
            //     <span className="-ml-1 text-sm font-semibold">
            //       {stars.toLocaleString()}
            //     </span>
            //   )}
            // </Badge>
            <div className="font-geist flex items-center gap-2">
              <AnimatedThemeToggler/>
              <Button
                size="sm"
                variant="secondary"
                className="cursor-pointer bg-cyan-50 dark:bg-cyan-900 border border-cyan-200 rounded-none font-bold shadow-none"
                onClick={() => router.push('/sign-in')}
              >
                Log in
              </Button>
              <Button
                size="sm"
                className="cursor-pointer rounded-none font-semibold"
                onClick={() => router.push('/sign-up')}
              >
                Sign up
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {/* <ModeToggleButton /> */}
              <AnimatedThemeToggler/>
              <Button
                className="font-geist cursor-pointer rounded-none"
                onClick={() => {
                  signOut()
                  setTheme('light') // force light mode on sign out
                  localStorage.removeItem('theme') // clear theme from local storage
                }}
                size="sm"
              >
                Log out
              </Button>
            </div>
          )}
          {/* {!isSignedIn && (
            <div className="flex h-5 items-center space-x-3 text-sm">
              <ModeToggleButton />
              <Separator orientation="vertical" />
              <Link href="https://github.com/deepsoumya617/ContentAI">
                {resolvedTheme === 'dark' ? (
                  <img src="/Github_dark.svg" className="size-4" />
                ) : (
                  <img src="/Github_light.svg" className="size-4" />
                )}
              </Link>
              <Separator orientation="vertical" />
              {resolvedTheme === 'dark' ? (
                <img src="/x-dark.svg" className="size-4" />
              ) : (
                <img src="/x-light.svg" className="size-4" />
              )}
            </div>
          )} */}

        </div>
          {/* Toggle Button  */}
           <div className="md:hidden flex gap-2">
           <AnimatedThemeToggler className='text-cyan-500 dark:text-white' />
            <button onClick={handleToggle} className="text-cyan-500 dark:text-white">
              <div
                className={`transform transition-transform duration-500 z-40 ${
                  isMobileMenuOpen ? "rotate-360" : "rotate-180"
                }`}
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </div>
            </button>
          </div>
      </div>
    </header>

     {/* Mobile view */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } fixed top-2 pt-15 right-4 bg-white/5 w-64 py-4 rounded-md shadow-2xl z-30`}
      >
        <div className="flex flex-col items-center font-audiowide backdrop-blur-sm text-center text-white space-y-4 px-4 py-2">
          <Link href="/" className="text-white px-4 py-2 rounded w-full">
            Home
          </Link>
          <Link href="/dashboard" className="text-cyan-600 dark:text-white px-4 py-2 rounded w-full">
            Dashboard
          </Link>
          <Link href="/pricing" className="text-cyan-600 dark:text-white px-4 py-2 rounded w-full">
            Pricing
          </Link>
          <Link href="/about" className="text-cyan-600 dark:text-white px-4 py-2 rounded w-full">
            About Us
          </Link>
          <Link href="/dashboard/settings" className="text-cyan-600 dark:text-white px-4 py-2 rounded w-full">
            Settings
          </Link>
         {!isSignedIn ? 
         <Link href="/sign-in" className="w-full bg-cyan-600/80 text-white dark:text-white px-4 py-2 rounded"> 
            Sign In
          </Link> :
         <Button
          onClick={() => {
                  signOut()
                  setTheme('light') // force light mode on sign out
                  localStorage.removeItem('theme') // clear theme from local storage
                }}
          className="w-full bg-cyan-600/80 text-white px-4 py-2 rounded"> 
            Log out
          </Button>
         } 
        </div>
      </div>
    </>
  )
}