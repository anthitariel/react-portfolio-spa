const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`sm:snap-start
        min-h-fit md:min-h-screen 
        flex items-start sm:items-center sm:justify-center 
        max-w-5xl mx-auto 
        px-6 sm:px-12 lg:px-0
        pt-28
        lg:pt-0        
        pb-12    
        sm:py-0
       ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;