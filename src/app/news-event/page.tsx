"use client";
import React, { useState, useEffect } from 'react';
import TableThree from "@/components/Tables/TableThree"; // Adjust the import path if needed

const NewsPage: React.FC = () => {
  const [eventList, setEventList] = useState<any[]>([]);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5241/Career'); // Replace with your API URL
        const result = await response.json();
        setEventList(result); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Submit News</h2>
      
      {/* Existing Form with updated styling */}
      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
            <h3 className="font-semibold text-dark dark:text-white">
              Submit News
            </h3>
          </div>
          <form action="#">
            <div className="p-6.5">
              {/* Title Field */}
              <div className="w-full mb-4.5">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter the title"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5 flex flex-col xl:flex-row gap-4.5">
                {/* Text Area for Content */}
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Text
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter the text content"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                {/* Upload Image Field */}
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="flex w-full justify-center rounded-[7px] bg-primary p-[10px] font-medium text-white hover:bg-opacity-90">
                Submit News
              </button>
            </div>
          </form>
        </div>
      </div>

      <h3 className="mt-8 mb-4 text-xl font-bold">Existing News</h3>
      <div>
        {eventList.length > 0 ? (
          <ul className="space-y-4">
            {eventList.map((event, index) => (
              <li key={index} className="p-4 border border-gray-300 rounded-lg shadow">
                <h4 className="text-lg font-bold">{event.title}</h4>
                <p>{event.text}</p>
                {event.image && (
                  <div className="mt-2">
                    <img
                      src={event.image}
                      alt={`Image for ${event.title}`}
                      className="h-24 w-24 object-cover rounded-lg shadow"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
