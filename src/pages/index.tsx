import React from 'react';
import { Study, User } from '@prisma/client';
import Layout from '../components/Layout';
import { Pagination } from '../components/Pagination';
import { ResultSpan } from '../components/PaginationSpan';
import { StudiesTable } from '../components/StudiesTable';
import { SearchSection } from '../components/SearchSection';

type Props = {
  user: User;
};

const ITEMS_PER_PAGE = 10;

const IndexPage: React.FC<Props> = ({ user }) => {
  const [studies, setStudies] = React.useState<Study[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalResults, setTotalResults] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchStudies = async (page: number) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3000/api/studies?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      const data = await res.json();
      setStudies(data.studies);
      setTotalResults(data.total);
    } catch (error) {
      console.error('Error fetching studies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchStudies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE);

  return (
    <Layout user={user}>
      <SearchSection />
      {isLoading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <>
          <StudiesTable studies={studies} />
          <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex items-center justify-between w-full">
              <ResultSpan
                currentPage={currentPage}
                totalPages={totalPages}
                totalResults={totalResults}
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default IndexPage;
