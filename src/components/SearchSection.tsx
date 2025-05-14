import { SearchIcon } from '@heroicons/react/outline';
import React from 'react';

export const SearchSection: React.FC = () => {
  return (
    <div className="mb-4">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      >
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm w-80">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search for studies..."
        />
      </div>
    </div>
  );
};
