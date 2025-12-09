const SectionSubtitle = ({ children, className = '' }) => {
  return (
    <p className={`text-xl text-slate-600 dark:text-slate-300 mb-8 ${className}`}>
      {children}
    </p>
  );
};

export default SectionSubtitle;