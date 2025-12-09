import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const UniversalModal = ({ isOpen, onClose, children, title, size = 'max-w-3xl' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`relative m-3 md:m-6 w-full ${size} 
                       bg-white dark:bg-slate-950 rounded-2xl border 
                       border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">{title}</h3>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-full border border-slate-300 dark:border-slate-700 
                           flex items-center justify-center text-slate-700 dark:text-slate-200 
                           hover:border-accent hover:text-accent transition"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {children}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UniversalModal;