// pages/DataTablePage.tsx
"use client";
import React from 'react';
import TableThree from "@/components/Tables/TableThree"; // Adjust the import path if needed
import { useState, useEffect } from 'react';

const DataTablePage: React.FC = () => {
  const [contactList, setContactList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5241/Contact'); // Replace with your API URL
        const result = await response.json();
        setContactList(result); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Contact Us Table</h2>
      <TableThree contactList={contactList}/>
    </div>
  );
};

export default DataTablePage;
