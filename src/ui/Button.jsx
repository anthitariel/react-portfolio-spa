const Button = ({ 
  children, 
  className = '', 
  as = 'button', 
  href, 
  target, 
  onClick, 
  variant = 'primary',
  ...rest 
}) => {
  
  let baseClasses = "";
  
  if (variant === 'primary') {
      baseClasses = "btn-primary";
  } else if (variant === 'link') {
      baseClasses = "inline-flex items-center gap-2 border-b border-transparent transition";
  } else {
      baseClasses = "btn-primary";
  }

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