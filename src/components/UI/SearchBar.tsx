import React, { useState, type FC } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, placeholder="Search..."}) => {
  const [query, setQuery] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  }
  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='relative'>
        <input
          type='text'
          value={query}
          onChange={e => {
            setQuery(e.target.value)
            onSearch(e.target.value)
          }}
          placeholder={placeholder}
          className='w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <div className='absolute left-4 top-3.5 text-gray-400'>
          🔍
        </div>
      </div>
    </form>
  )
}

export default SearchBar
