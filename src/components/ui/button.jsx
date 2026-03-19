import React from 'react';

export const Button = ({ children, onClick, className = '', size, variant }) => {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 cursor-pointer';
  const sizes = size === 'lg' ? 'px-8 py-3 text-lg' : 'px-5 py-2 text-sm';
  const variants = variant === 'outline'
    ? 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-transparent'
    : 'bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/25';
  return (
    <button onClick={onClick} className={`${base} ${sizes} ${variants} ${className}`}>
      {children}
    </button>
  );
};
