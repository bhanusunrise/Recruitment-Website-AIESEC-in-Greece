import React from 'react';
import { BulletListProps } from '../../types';

const BulletList: React.FC<BulletListProps> = ({ items, title }) => {
  return (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">{title}:</h4>
      <ul className="list-disc pl-5 text-gray-600 text-sm">
        {items.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;