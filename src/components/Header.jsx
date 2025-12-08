import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contacts" },
];

function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-slate-300 dark:border-slate-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={() => handleNav("home")}
          className="text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-300"
        >
          Anfisa Domashova
        </button>

        

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-sm">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={
                  active === s.id
                    ? "text-accent pb-1 border-b border-accent"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 pb-1"
                }
              >
                {s.label}
              </button>
            ))}
          </nav>


          <button
            onClick={toggleTheme} // Calls the function to switch between dark/light
            className="h-9 w-9 rounded-full border border-slate-400 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-accent transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? "☾" : "☼"} 
          </button>

          <button
            className="md:hidden h-9 w-9 rounded-full border border-slate-400 dark:border-slate-700 flex items-center justify-center"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200"></span>
              <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200"></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-300 dark:border-slate-800 bg-white dark:bg-black">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={
                  active === s.id
                    ? "text-accent"
                    : "text-slate-700 dark:text-slate-300"
                }
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
