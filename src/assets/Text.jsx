const Text = ({ children, className = '' }) => {
  return (
    <p className={`text-xs/6 md:text-base/8 text-slate-700 dark:text-slate-300 mb-4 ${className}`}>
      {children}
    </p>
  );
};

export default Text;