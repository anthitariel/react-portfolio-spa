
import React from 'react';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 

      className={`snap-section min-h-screen flex items-center bg-white dark:bg-black ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;