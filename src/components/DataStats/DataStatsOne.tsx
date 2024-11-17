// components/DataStats/DataStatsOne.tsx

import React, { useState, useEffect } from 'react';
import Card from '@/components/Cards/Cards';

const DataStatsOne: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures that we are on the client side
    setIsClient(true);
  }, []);

  // Wait until the component is rendered on the client side
  if (!isClient) {
    return null; // Or a loading spinner if you prefer
  }

  const dataStatsList = [
    { title: 'Contact Us', color: '#3FD97F', navigateTo: '/contact-us' },
    { title: 'Modular', color: '#FF9C55', navigateTo: '/modular' },
    { title: 'Career', color: '#8155FF', navigateTo: '/career' },
    { title: 'News Event', color: '#18BFFF', navigateTo: '/news-event' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {dataStatsList.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          color={item.color}
          navigateTo={item.navigateTo}
        />
      ))}
    </div>
  );
};

export default DataStatsOne;
