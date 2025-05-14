import React from 'react';
import { User } from '@prisma/client';
import Layout from '../components/Layout';
import { SearchSection } from '../components/SearchSection';
import { UserTable } from '../components/UserTable';
import { Pagination } from '../components/Pagination';
import { ResultSpan } from '../components/PaginationSpan';
import { Person } from '../types';

type Props = {
  user: User;
};

const PeoplePage: React.FC<Props> = ({ user }) => {
  const [users, setUsers] = React.useState<Person[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('http://localhost:3000/api/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // eslint-disable-next-line no-console
  console.log('users', users);

  return (
    <Layout user={user}>
      <SearchSection />
      <UserTable users={users} />
      <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex items-center justify-between w-full">
          <ResultSpan currentPage={1} totalPages={10} totalResults={97} />
          <Pagination />
        </div>
      </div>
    </Layout>
  );
};

export default PeoplePage;
