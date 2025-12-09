import React from 'react';

const Text = ({ children, className = '' }) => {
  return (
    <p className={`text-slate-700 dark:text-slate-300 ${className}`}>
      {children}
    </p>
  );
};

export default Text;