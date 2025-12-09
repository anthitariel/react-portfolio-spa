const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-semibold mb-6 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
