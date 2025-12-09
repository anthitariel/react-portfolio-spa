import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills";
import { ChevronDownIcon } from "./../common/Icons";
import SectionTitle from "./../common/Typography/SectionTitle";

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
};

const CONTENT_VARIANTS = {
  hidden: { height: 0, opacity: 0, marginTop: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    marginTop: "1.5rem",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      opacity: { duration: 0.2 }
    }
  },
  exit: { height: 0, opacity: 0, marginTop: 0 }
};

const SkillAccordionItem = ({ group, delay, openGroupId, setOpenGroupId }) => {
  const isOpen = openGroupId === group.title;
  const contentId = `skills-content-${group.title.replace(/\s/g, "-")}`;

  const handleToggle = () => {
    setOpenGroupId(isOpen ? null : group.title);
  };

  return (
    <motion.div
      className="rounded-xl border border-slate-300 bg-gradient-to-br from-white/80 to-slate-100/80 shadow-xl dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900/70 dark:to-slate-950/70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={ITEM_VARIANTS}
      custom={delay}
      layout
    >
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h3 className="text-xl font-semibold">{group.title}</h3>
        <ChevronDownIcon
          className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={CONTENT_VARIANTS}
            className="px-6 overflow-hidden"
            layout
          >
            <ul className="flex flex-wrap gap-2 text-sm text-slate-300 pb-6">
              {group.items.map(item => (
                <li
                  key={item}
                  className="rounded-md border border-slate-700 px-3 py-1 bg-slate-800/60 hover:bg-slate-700/80 hover:text-base transition-all font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function Skills() {
  const [openGroupId, setOpenGroupId] = useState(null);

  return (
    <div className="pt-12 md:pt-20 pb-12 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle className="text-slate-700 dark:text-slate-300">
          Skills
        </SectionTitle>
        <p className="section-subtitle max-w-2xl text-base mb-10 text-slate-700 dark:text-slate-300">
          My expertise lies in crafting user-friendly, responsive, and mobile-first web applications. Dedicated to continuous learning, I stay updated on the latest technologies and use my expertise to tackle challenging tasks for successful project delivery.
        </p>
      </motion.div>

      <div className="mt-6 space-y-4 max-w-full md:max-w-2xl md:w-[40rem] mx-auto">
        {skills.map((group, index) => (
          <SkillAccordionItem
            key={group.title}
            group={group}
            delay={0.3 + index * 0.1}
            openGroupId={openGroupId}
            setOpenGroupId={setOpenGroupId}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;