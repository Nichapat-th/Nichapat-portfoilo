import React from 'react';

const Tag = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-full bg-dark-gray text-soft-gray text-sm font-medium ${className}`}
    >
      {children}
    </span>
  );
};

export default Tag;

