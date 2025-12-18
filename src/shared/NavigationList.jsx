import { sections } from "../data/sections";

const NavList = ({ active, onNav, isMobile = false }) => {
  
  const handleMobileClick = (id) => {
    if (window.navigator.vibrate) {
      window.navigator.vibrate(10); 
    }
    onNav(id);
  };

  const containerClasses = isMobile
    ? "max-w-5xl mx-auto px-4 py-3 flex items-center justify-between text-sm"
    : "hidden md:flex gap-6 text-sm";

  return (
    <nav className={containerClasses}>
      {sections.map((s) => {
        const isActive = active === s.id;

        const buttonClasses = isMobile
          ? ` ${
              isActive 
                ? "text-accent font-bold scale-105" 
                : "text-slate-500 dark:text-slate-400"
            }`
          : `transition-all duration-300 pb-1 border-b ${
              isActive
                ? "text-accent border-accent font-semibold"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:font-semibold border-transparent"
            }`;

        return (
          <button
            key={s.id}
            onClick={() => isMobile ? handleMobileClick(s.id) : onNav(s.id)}
            className={buttonClasses}
          >
            {s.label}
          </button>
        );
      })}
    </nav>
  );
};

export default NavList;