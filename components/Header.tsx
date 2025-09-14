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
import ModeToggleButton from './themes/ModeToggleButton'
import Image from 'next/image'
import { AnimatedThemeToggler } from './magicui/animated-theme-toggler'

export default function Header() {
  const { setTheme } = useTheme()
  const router = useRouter()
  const { isSignedIn } = useAuth()
  const { signOut } = useClerk()

  return (
    <header className="border-border supports-backdrop-blur:bg-background/80 bg-background/40 sticky top-0 z-40 w-full border-b px-6 py-4 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* LEFT SIDE — logo + nav links */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1">
            {/* <Image src='/logo1.svg' height={26} width={26} alt='logo' /> */}
            <div className='rounded-full bg-gradient-to-br from-cyan-800 via-cyan-600 to-cyan-500 w-7 h-7 flex items-center justify-center text-white' >C</div>
            {/* <h1 className="font-bold text-2xl px-2 tracking-tight">
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500'>ContentAI</span>
              </h1> */}
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
      </div>
    </header>
  )
}