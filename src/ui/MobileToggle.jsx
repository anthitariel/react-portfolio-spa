export function MobileToggle({ onClick }) {
  return (
    <button
      className="md:hidden h-9 w-9 rounded-full border border-slate-400 dark:border-slate-700 flex items-center justify-center"
      onClick={onClick}
      aria-label="Toggle navigation"
    >
      <div className="space-y-1.5">
        <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200"></span>
        <span className="block h-0.5 w-4 bg-slate-700 dark:bg-slate-200"></span>
      </div>
    </button>
  );
}
