import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeProvider";
import { sections } from "../data/sections";
import { Logo } from "../ui/Logo";
import { NavDesktop } from "../ui/NavDesktop";
import { NavMobile } from "../ui/NavMobile";
import { ThemeToggle } from "../ui/ThemeToggle";
import { MobileToggle } from "../ui/MobileToggle";

function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-slate-300 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">

        <Logo onClick={() => handleNav("home")} />

        <div className="flex items-center gap-4">
          <NavDesktop active={active} onNav={handleNav} />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <MobileToggle onClick={() => setMenuOpen(v => !v)} />
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-black">
          <NavMobile active={active} onNav={handleNav} />
        </div>
      )}
    </header>
  );
}

export default Header;
