import React from 'react';
import { User } from '@prisma/client';
import Layout from '../components/Layout';
import { SearchSection } from '../components/SearchSection';
import { Table } from '../components/Table';
import { Pagination } from '../components/Pagination';
import { ResultSpan } from '../components/PaginationSpan';
import { Person } from '../types';

type Props = {
  user: User;
};

const people: Person[] = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
];

const IndexPage = ({ user }: Props) => {
  return (
    <Layout user={user}>
      <SearchSection />
      <Table people={people} />
      <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <ResultSpan currentPage={1} totalPages={10} totalResults={97} />
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/user');
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}

export default IndexPage;
