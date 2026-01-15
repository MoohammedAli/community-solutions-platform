import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <nav className='bg-white shadow-md px-4 py-3 rounded-lg mb-4'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>

        {/* Logo */}
        <div className='flex items-center'>
          <h1 className='text-2xl font-bold text-indigo-600'>Fix It🔧</h1>
          <span className='ml-4 hidden md:block text-gray-700'>Community Problem Solver</span>
        </div>

        {/* Search Bar */}
        <div className='flex-1 max-w-lg mx-8'>
          <div className='relative'>
            <input
              type='text'
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder='Search Problems...'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='absolute right-3 top-2.5 text-gray-400'>
              🔍
            </button>
          </div>
        </div>

        {/* User Menu */}
        <div className='flex items-center gap-4'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium'>
            + Add Problem
          </button>
          <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
