"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetailedPage() {
    // const router = useParams();
    const { id } = useParams();
    const [packageData, setPackageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5241/Contact?id=${id}`, {
                method: 'DELETE'
            }
            );
            const result = await response.json();
            setPackageData(result);
        }
        fetchData();
    }, [id])

    if (!packageData || packageData.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <p>
                <strong>Name:</strong> {packageData?.name}
            </p>
            <p>
                <strong>Email:</strong> {packageData?.email}
            </p>
            <p>
                <strong>Message:</strong> {packageData?.message}
            </p>
        </div>
    );
}
