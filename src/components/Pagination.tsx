import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

export const Pagination: React.FC = () => {
  return (
    <div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          onClick={() => {}}
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          aria-current="page"
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          1
        </button>
        <button
          onClick={() => {}}
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          2
        </button>
        <button
          onClick={() => {}}
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
        >
          3
        </button>
        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
        <button
          onClick={() => {}}
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
        >
          8
        </button>
        <button
          onClick={() => {}}
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          9
        </button>
        <button
          onClick={() => {}}
          className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
        >
          10
        </button>
        <button
          onClick={() => {}}
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};
