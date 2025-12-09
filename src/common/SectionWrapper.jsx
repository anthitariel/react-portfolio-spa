const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`snap-section 
        min-h-fit md:min-h-screen 
        md:flex md:items-center md:justify-center 
        bg-white dark:bg-black 
        max-w-5xl mx-auto px-4 
       ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;