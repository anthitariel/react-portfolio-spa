const SectionSubtitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-base md:text-xl font-semibold border-b border-slate-700 pb-2  mb-6 text-xs  font-semibold tracking-wider text-accent mb-1 block group-hover:text-white/80 transition mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export default SectionSubtitle;