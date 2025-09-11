import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm bg-white border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white'>
        <Search />
        <input type="text" placeholder='Search...' className='outline-none' name="" id="" />
      </div>
      <div>
        <h2 className='bg-gradient-to-br from-cyan-300 to-cyan-700  border border-cyan-200 p-1 rounded-full text-xs text-white px-4'>Join Membership for just $9.99</h2>
      </div>
    </div>
  )
}

export default Header
