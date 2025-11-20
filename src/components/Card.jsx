import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-dark-gray rounded-lg p-6 transition-all duration-300 hover:bg-opacity-80 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

