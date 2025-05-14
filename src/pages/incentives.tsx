import React from 'react';
import { User } from '@prisma/client';
import Layout from '../components/Layout';

type Props = {
  user: User;
};

const IncentivesPage: React.FC<Props> = ({ user }) => {
  return (
    <Layout user={user}>
      <div className="bg-white p-3 sm:px-6">Empty for now</div>
    </Layout>
  );
};

export default IncentivesPage;
