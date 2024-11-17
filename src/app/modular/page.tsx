// pages/DataTablePage.tsx
"use client";
import React from 'react';
import TableThree from "@/components/Tables/TableThree"; // Adjust the import path if needed
import { useState, useEffect } from 'react';
import ModularTable from '@/components/Tables/ModularTable';

const ModularPage: React.FC = () => {
  const [modularList, setModularList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5241/Modular'); // Replace with your API URL
        const result = await response.json();
        setModularList(result); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Modular Table</h2>
      <ModularTable modularList={modularList}/>
    </div>
  );
};

export default ModularPage;
