import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  as = 'button', 
  href, 
  target, 
  onClick, 
  ...rest 
}) => {
  
  const baseClasses = "btn-primary";
  const finalClasses = `${baseClasses} ${className}`;

  if (as === 'a') {
    return (
      <a 
        href={href} 
        target={target}
        className={finalClasses}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={finalClasses}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;