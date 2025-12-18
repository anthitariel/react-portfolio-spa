import { useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../shared/Icons";
import { themeStyles as s } from "../shared/themeStyles";

const UniversalModal = ({ isOpen, onClose, children, title, size = 'max-w-3xl' }) => {
  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e) => { e.key === 'Escape' && onClose(); };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={s.layout.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            // Now using s.cards.base and s.cards.glass for consistency
            className={`${s.layout.modalContent} ${s.cards.base} ${s.cards.glass} ${size}`}
            {...s.animations.modal}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/50 dark:border-slate-800/50">
              <h3 className={`${s.typography.sectionSubtitle} !border-none !mb-0 !pb-0 text-xl font-bold`}>
                {title}
              </h3>
              
              <button
                onClick={(e) => { e.stopPropagation(); onClose(); }}
                type="button"
                className="group h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:!bg-accent hover:!text-white transition-all duration-300 hover:scale-110 active:scale-95 shrink-0" 
                aria-label="Close modal"
              >
                <CloseIcon className="h-5 w-5 transition-all duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
              <div className={s.typography.text}>
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UniversalModal;