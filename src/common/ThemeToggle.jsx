export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full border border-slate-400 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:border-accent transition"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "☾" : "☼"}
    </button>
  );
}
