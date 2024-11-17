import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  color: string;
  navigateTo: string;
}

const Card: React.FC<CardProps> = ({ title, color, navigateTo }) => (
  <Link href={navigateTo}>
    <div
      style={{ backgroundColor: color }}
      className="cursor-pointer p-4 rounded-lg text-white shadow-md hover:shadow-lg"
    >
      <h3>{title}</h3>
    </div>
  </Link>
);

export default Card;
