// pages/DataTablePage.tsx
"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import CareerTable from '@/components/Tables/CareerTable';

const CareerPage: React.FC = () => {
  const [careerList, setCareerList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5241/Career'); // Replace with your API URL
        const result = await response.json();
        setCareerList(result); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Career Table</h2>
      <CareerTable careerList={careerList}/>
    </div>
  );
};

export default CareerPage;
