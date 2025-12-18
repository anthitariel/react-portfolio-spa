import { themeStyles as s } from "./themeStyles";

/**
 * Polymorphic Button: Renders as 'button' or 'a' based on the 'as' prop.
 * Synced with global theme tokens for consistent branding.
 */
export const Button = ({ 
  children, 
  className = '', 
  as = 'button', 
  href, 
  target, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  ...rest 
}) => {
  // Base classes: Handles alignment, smooth scaling on click, and transitions.
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 active:scale-95 whitespace-nowrap";
  
  // Size Logic: 'link' variants ignore padding to align perfectly with text.
  const isLink = variant === 'link';
  const sizeStyles = isLink ? "p-0 rounded-none" : `${s.buttons.sizes[size]} rounded-full`;
  
  // Variant Logic: Pulls color/border/hover states from the central theme.
  const variantStyles = s.buttons.variants[variant] || s.buttons.variants.primary;

  const finalClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  // Anchor Link rendering (used for external redirects or email).
  if (as === 'a') {
    return (
      <a 
        href={href} 
        target={target} 
        className={finalClasses} 
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Standard Button rendering (used for internal navigation or actions).
  return (
    <button 
      onClick={onClick} 
      className={finalClasses} 
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

/**
 * SocialLink: Specialized wrapper for social icons.
 * Uses 'group-hover' for localized icon scaling.
 */
export const SocialLink = ({ href, label, Icon }) => (
  <li>
    <Button
      as="a"
      href={href}
      target="_blank"
      aria-label={label}
      variant="link"
      className="!p-0 !border-none group flex items-center justify-center"
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 fill-current transition-transform duration-300 group-hover:scale-125 group-hover:text-accent" />
    </Button>
  </li>
);

export default Button;