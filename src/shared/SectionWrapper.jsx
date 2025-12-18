import { themeStyles as s } from "../shared/themeStyles";

/**
 * Standardized container for all sections.
 */
const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section 
      id={id} 
      className={`w-full mx-auto px-6 sm:px-12 lg:px-0 py-12 sm:py-20 flex flex-col justify-center min-h-fit ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;