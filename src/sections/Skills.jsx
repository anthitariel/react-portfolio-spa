import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills";
import { ChevronDownIcon } from "../shared/Icons";
import { themeStyles as s } from "../shared/themeStyles";
import SectionWrapper from "../shared/SectionWrapper";

/**
 * Height animation for accordion: smoothly expands/collapses content.
 */
const CONTENT_VARIANTS = {
  hidden: { height: 0, opacity: 0, marginTop: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    marginTop: "0.75rem",
    transition: { type: "spring", stiffness: 300, damping: 30 }
  },
  exit: { height: 0, opacity: 0, marginTop: 0 }
};

const SkillAccordionItem = ({ group, delay, openGroupId, setOpenGroupId }) => {
  const isOpen = openGroupId === group.title;
  const contentId = `skills-content-${group.title.replace(/\s/g, "-")}`;

  return (
    <motion.div 
      className={`${s.cards.base} ${s.cards.glass} w-full`} 
      {...s.animations.fadeUp} 
      custom={delay} 
      layout
    >
      <button
        onClick={() => setOpenGroupId(isOpen ? null : group.title)}
        // md:whitespace-nowrap: ensures width is calculated based on single-line text.
        className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:opacity-80 transition-opacity md:whitespace-nowrap gap-6"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={`${s.typography.sectionSubtitle} !mb-0 border-none pb-0 text-base md:text-xl leading-tight`}>
          {group.title}
        </span>
        <ChevronDownIcon className={`h-4 w-4 md:h-5 md:w-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div id={contentId} variants={CONTENT_VARIANTS} initial="hidden" animate="visible" exit="exit" className="px-4 md:px-6 overflow-hidden" layout>
            {/* Tech badges: stacks on mobile, wraps on desktop. */}
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-2 pb-4 md:pb-6">
              {group.items.map((item) => (
                <li key={item} className={`${s.ui.badge} w-fit`}>
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
    <SectionWrapper id="skills">
      {/* Header aligned and animated to match About.jsx structure. */}
      <motion.div className="flex flex-col text-left items-start" {...s.animations.fadeUp}>
        <h2 className={s.typography.sectionTitle}>Skills</h2>
        <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
          My expertise lies in crafting user-friendly web applications with a focus on performant interfaces.
        </p>
      </motion.div>

      {/* md:inline-flex: Shrinks the container to match the widest title on desktop. */}
      <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 flex md:inline-flex flex-col w-full md:w-auto md:min-w-[450px]">
        {skills.map((group, index) => (
          <SkillAccordionItem
            key={group.title}
            group={group}
            // Staggered entrance animation delay.
            delay={0.3 + index * 0.1}
            openGroupId={openGroupId}
            setOpenGroupId={setOpenGroupId}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Skills;