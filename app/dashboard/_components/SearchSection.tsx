import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler'
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput}: any ) => {
  return (
    <div className='p-10 flex flex-col justify-center items-center text-white bg-gradient-to-br from-cyan-600 via-cyan-300 to-cyan-700'>
      <div className='w-full flex justify-end gap-4'>
        <AnimatedThemeToggler className='text-white' />
        <UserButton />
      </div>
      <h2 className='text-3xl md:text-5xl md:font-extrabold mt-10  '> Browse All <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white'>Templates</span> </h2>
      <p className='md:text-2xl pt-3'> What would you like to create today? </p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%] mb-4'>
          <Search className='text-cyan-400' />
          <input type="text" placeholder='Search'
          onChange={(e)=> onSearchInput(e.target.value)}
          className='bg-transparent w-full outline-none text-black' />
        </div>
      </div>


    </div>
  )
}

export default SearchSection
