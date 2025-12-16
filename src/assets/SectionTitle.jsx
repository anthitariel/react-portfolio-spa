const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-2xl md:text-4xl font-semibold mb-6 text-slate-700 dark:text-slate-300 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
