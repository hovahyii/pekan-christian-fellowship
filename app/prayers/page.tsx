// pages/prayers.tsx
import React from 'react';
import Layout from '../components/Layout';
import PrayerRequestList from '../components/PrayerRequestList';

const Prayers: React.FC = () => {
  return (
    <Layout>
      <PrayerRequestList />
    </Layout>
  );
};

export default Prayers;
