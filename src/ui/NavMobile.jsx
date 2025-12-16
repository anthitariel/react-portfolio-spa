import {sections} from "../data/sections";

export function NavMobile({ active, onNav }) {
  return (
    <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => onNav(s.id)}
          className={active === s.id ? "text-accent" : "text-slate-700 dark:text-slate-300"}
        >
          {s.label}
        </button>
        
      ))}
    </nav>
  );
}
