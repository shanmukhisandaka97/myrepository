import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`rounded-2xl border ${className}`}>{children}</div>
);
