'use client'
import { FileClock, Home, LayoutDashboardIcon, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import UsageTrack from './UsageTrack'
import Link from 'next/link'

const SideNav = () => {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            link: '/'
        },
        {
            name: 'Dashboard',
            icon: LayoutDashboardIcon,
            link: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            link: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            link: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            link: '/dashboard/settings'
        },

    ]

    const path = usePathname();


    return (
        <div className='h-screen relative p-5 shadow-sm'>
            <div className='flex justify-center'>
                <Image src='/logo1.svg' height={36} width={36} alt='logo' />
                 <span className=" text-2xl font-bold p-4 bg-clip-text text-transparent bg-gradient-to-r  from-cyan-500  via-cyan-400 to-cyan-600">
            ContentAI
          </span>
            </div>
            <hr className='mb-8 border border-cyan-300' />
            <div className='mt-3'>
                {
                    MenuList.map((menu, index) => (
                       <Link key={index} href={menu.link}> <div className={`flex gap-2 mb-2 p-3 hover:bg-gradient-to-br dark:from-cyan-900 dark:via-cyan-800 dark:to-cyan-950  from-cyan-600 via-cyan-500 to-cyan-300 hover:text-white rounded-lg cursor-pointer items-center ${path === menu.link && 'bg-gradient-to-br text-white'}`} key={index}>
                            <menu.icon className='w-7 h-7' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                        </Link>
                    ))
                }
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    )
}

export default SideNav
