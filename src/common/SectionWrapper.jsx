const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`snap-section 
        min-h-fit md:min-h-screen 
        flex items-start sm:items-center sm:justify-center 
        max-w-5xl mx-auto 
        px-4 
        py-24 sm:py-0
       ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;