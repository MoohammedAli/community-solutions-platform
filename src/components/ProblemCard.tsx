
import type React from "react";
import type { Problem } from "../types";

interface ProblemCardProbs {
  problem: Problem;
  onClick?: () => void;
}

const ProblemCard: React.FC<ProblemCardProbs> = ({ problem, onClick }) => {
  const isEmergency: boolean = problem.emergency;
  return (
    <div className="min-h-screen bg-amber-200 p-6">

      <div className={`${isEmergency ? 'bg-red-400' : 'bg-white'} rounded-lg shadow-sm p-6 mb-4 border border-gray-300 hover:shadow-md transition-shadow
      ease-in-out cursor-pointer`} onClick={onClick}>

        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {problem.title}
            </h3>
            <p className="text-gray-600 mb-4">{problem.description}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-3">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {problem.category}
            </span>
            <span className="bg-gray-200 text-sm">
              {problem?.solutions?.length}
            </span>
          </div>
          <div className="flex items-center">
            <button className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
               View Solution →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemCard
