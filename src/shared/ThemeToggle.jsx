import Button from "../shared/Button";
import { themeStyles as s } from "../shared/themeStyles";

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      className="!h-9 !w-9 !p-0 group"
      aria-label="Toggle dark mode"
    >
      <span className="text-lg leading-none transition-transform group-hover:scale-110">
        {theme === "light" ? "☾" : "☼"}
      </span>
    </Button>
  );
}

/**
 * MobileToggle: Hamburger menu button for small screens.
 */
export function MobileToggle({ onClick }) {
  return (
    <Button
      variant="outline"
      className="md:hidden !h-9 !w-9 !p-0"
      onClick={onClick}
      aria-label="Toggle navigation"
    >
      <div className="space-y-1.5">
        <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200" />
        <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200" />
      </div>
    </Button>
  );
}