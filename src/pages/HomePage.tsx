import React, { useState } from 'react'
import ProblemCard from '../components/Problems/ProblemCard'
import CategoryChips from '../components/UI/CategoryChips'
import SearchBar from '../components/UI/SearchBar'
import type { Problem } from '../types'
import { initialProblems } from '../utils/data'

const HomePage: React.FC = () => {
  const [problems] = useState<Problem[]>(initialProblems);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = problems.filter(problem => {
    const matchesCategory = selectedCategory === 'All' || problem.category === selectedCategory;
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUpVotes = (upvote: string) => {

  }
  return (
    <div className='min-h-screen bg-gray-100 rounded-md'>
      {/* Hero section */}
      <div className='bg-linear-to-r from-blue-600 to-purple-700 text-white py-12 px-4 rounded-t-lg'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-3xl md:text-3xl font-bold mb-4'>
            Find Solutions for everyday problems
          </h1>
          <p className='text-xl opacity-90 mb-8 max-w-2xl mx-auto'>
            A community where people help each other to solve practical problems
          </p>
          <div className='max-w-2xl mx-auto mb-8'>
            <SearchBar onSearch={setSearchQuery} placeholder='Search for problems or solutions'/>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className='max-w-6xl mx-auto px-4 py-8'>
        {/* Categories */}
        <CategoryChips
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Stats */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-8'>
          <div className='bg-white p-4 rounded-lg shadow border'>
            <div className='text-2xl font-bold text-blue-600'> {filteredProblems.length} </div>

            {/* Problems */}
            <div className='text-gray-600'>Problems</div>
          </div>

          <div className='bg-white p-4 rounded-lg shadow border'>
            <div className='text-2xl font-bold text-green-600'>
              {problems.reduce((sum, p) => sum + p.votes, 0)}
            </div>
            <div className='text-gray-600'>Total Votes</div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow border'>
            <div className='text-2xl font-bold text-purple-600'>
              {problems.filter(p => p.emergency).length}
            </div>
            <div className='text-gray-600'>Emergencies</div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow border'>
            <div className='text-2xl font-bold text-orange-600'>
              {new Set(problems.map(p => p.category)).size}
            </div>
            <div className='text-gray-600'>Categories</div>
          </div>
        </div>

        {/* Problem list */}
        <div>
          <h2 className='mb-4'>
            <span>{selectedCategory === 'All' ? 'All Problems' : selectedCategory}</span>
            <span>
              ({filteredProblems.length})
            </span>
          </h2>

          {filteredProblems.length === 0 ?
          (
            <div className='text-center py-12 bg-white rounded-lg shadow'>
              <div className='text-4xl mb-4'>🔍</div>
              <h3 className='text-xl font-semibold mb-2'>No Problems found</h3>
              <p className='text-gray-600'>Try a different search or category</p>
            </div>
          )
          :
          (
            <div>
              {filteredProblems.map(problem => (
                <div key={problem.id} className='relative'>
                  <ProblemCard problem={problem} />
                  <button
                    onClick={() => handleUpVotes(problem.id)}
                    className='absolute right-6 top-6 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg'
                  >
                    <span className='text-gray-700'>▲</span>
                    <span className='font-medium'>{problem.votes}</span>
                  </button>
                </div>
              ))}
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default HomePage
