import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-accent text-dark hover:bg-opacity-90',
    secondary: 'bg-dark-gray text-white hover:bg-opacity-80',
    outline: 'border border-white text-white hover:bg-white hover:text-dark',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

