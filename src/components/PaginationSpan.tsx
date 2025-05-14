import React from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  totalResults: number;
};

export const ResultSpan: React.FC<Props> = ({
  currentPage = 1,
  totalPages = 10,
  totalResults = 97,
}) => {
  return (
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">{currentPage}</span> to{' '}
        <span className="font-medium">{totalPages}</span> of{' '}
        <span className="font-medium">{totalResults}</span> results
      </p>
    </div>
  );
};
