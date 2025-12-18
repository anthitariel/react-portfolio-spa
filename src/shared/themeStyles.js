/**
 * Global Theme Styles Configuration
 * A centralized design system for layout, typography, and interactive components.
 */
export const themeStyles = {
  layout: {
    // Controls the main application shell and responsive section widths.
    mainWrapper: "h-screen flex flex-col overflow-hidden bg-white dark:bg-black transition-colors duration-500",
    section: "w-full max-w-6xl mx-auto px-6 lg:px-0 py-8 md:py-20 flex flex-col justify-center min-h-fit",
    overlay: "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-md p-4",
    modalContent: "relative w-full max-h-[90vh] overflow-hidden flex flex-col",
  },

  buttons: {
    // Consistent sizing and padding for all Button component instances.
    sizes: {
      sm: "px-3 py-1 text-[10px] md:text-xs gap-1.5",
      md: "px-6 py-2 text-xs md:text-base gap-2",
      lg: "px-8 py-3 text-sm md:text-lg gap-3",
    },
    // Visual presets (Primary CTA, Text Link, or Secondary Outline).
    variants: {
      primary: "bg-accent text-slate-100 hover:text-slate-900 hover:brightness-110 hover:shadow-lg hover:shadow-accent/20 hover:scale-105",
      link: "text-slate-900 dark:text-white border-b-2 border-accent/40 hover:text-accent hover:border-accent font-medium hover:font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]",
      outline: "border border-slate-300 dark:border-slate-700 hover:border-accent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:scale-105"
    }
  },

  typography: {
    // Scale-based typography from massive Hero text to fine labels.
    hero: "text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 text-slate-700 dark:text-slate-300",
    sectionTitle: "text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2 mt-4 uppercase tracking-tighter",
    sectionSubtitle: "text-sm md:text-xl font-semibold mb-4 text-slate-700 dark:text-slate-200 border-b border-slate-700 pb-1 mb-2 md:mb-6",
    text: "text-xs md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed md:mb-6",
    label: "text-xs md:text-sm uppercase tracking-[0.1em] text-accent mb-2 md:mb-6",
    techTitle: "text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 md:mb-6",
  },

  cards: {
    // Card UI: includes the 'glass' effect used in Skills and Project details.
    base: "rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-300 overflow-hidden",
    glass: "bg-gradient-to-br from-white/80 to-slate-100/80 dark:from-slate-900/70 dark:to-slate-950/70 backdrop-blur-sm shadow-xl",
    projectTile: "relative block group cursor-pointer overflow-hidden",
  },

  ui: {
    // Micro-components like badges, list markers, and navigation dots.
    badge: "px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-medium border border-transparent rounded-3xl transition-all duration-300 bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300 hover:border-slate-400 dark:hover:text-white",
    diamondList: "text-xs md:text-base flex items-start before:content-['◆'] before:text-accent before:text-[10px] md:before:text-xs before:mr-2 before:mt-1 before:shrink-0 text-slate-700 dark:text-slate-300",
    sideNavDot: "h-1.5 rounded-full transition-all duration-300",
    dotActive: "w-6 md:w-8 bg-accent",
    dotInactive: "w-1.5 md:w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400",
  },

  animations: {
    // Reusable Framer Motion presets for consistent entrance effects.
    fadeUp: {
      initial: { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5 }
    },
    modal: {
      initial: { scale: 0.9, opacity: 0, y: 20 },
      animate: { scale: 1, opacity: 1, y: 0 },
      exit: { scale: 0.9, opacity: 0, y: 20 }
    }
  }
};