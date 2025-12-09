import {sections} from "../data/sections";

export function NavDesktop({ active, onNav }) {
  return (
    <nav className="hidden md:flex gap-6 text-sm">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => onNav(s.id)}
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
  );
}
