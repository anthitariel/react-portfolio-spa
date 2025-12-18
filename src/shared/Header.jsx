import { useState } from "react";
import { useTheme } from "../shared/ThemeProvider";
import { Logo } from "../shared/Logo";
import NavList from "../shared/NavigationList"; 
import { ThemeToggle, MobileToggle } from "../shared/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

function Header({ active, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const handleNav = (id) => {
    onNav(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-slate-300 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 lg:px-0 py-3">
        <Logo onClick={() => handleNav("home")} />
        <div className="flex items-center gap-2 md:gap-4">
          <NavList active={active} onNav={handleNav} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <MobileToggle onClick={() => setMenuOpen(v => !v)} isOpen={menuOpen} />
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-300 dark:border-slate-800 bg-white/90 dark:bg-black/90 overflow-hidden"
          >
            <NavList active={active} onNav={handleNav} isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;