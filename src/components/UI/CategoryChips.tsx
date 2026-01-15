import React from 'react'

const categories = [
  'All',
  'Home & Kitchen',
  'Electronics',
  'Automotive',
  'Plumbing',
  'Electrical',
  'Software',
  'Emergency'
];

interface CategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryChips: React.FC<CategoryProps> = ({selectedCategory, onSelectCategory}) => {
  return (
    <div className='flex flex-wrap gap-2 mb-6'>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === category
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryChips
