import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/skills"; 

const ChevronDown = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const SkillAccordionItem = ({ group, delay, openGroupId, setOpenGroupId }) => {
    
    const isOpen = openGroupId === group.title; 

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
    };

    const contentVariants = {
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
        }
    };

    const handleClick = () => {
        setOpenGroupId(isOpen ? null : group.title);
    };

    return (
        <motion.div
            className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/70 to-slate-950/70 shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
            layout 
        >
            {/* Header / Clickable Toggle */}
            <button
                onClick={handleClick}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
                aria-controls={`skills-content-${group.title.replace(/\s/g, '-')}`}
            >
                <h3 className="text-xl font-semibold">{group.title}</h3>
                
                <ChevronDown 
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>

            {/* Dropdown Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`skills-content-${group.title.replace(/\s/g, '-')}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={contentVariants}
                        className="px-6 overflow-hidden" 
                        layout
                    >
                        <ul className="flex flex-wrap gap-2 text-sm text-slate-300 pb-6">
                            {group.items.map(item => (
                                <li
                                    key={item}
                                    className="rounded-md border border-slate-700 px-3 py-1 bg-slate-800/60 
                                               hover:bg-slate-700/80 hover:text-base transition-all font-medium"
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
    <div className="section-wrapper pt-24 md:pt-28">
        <div className="flex flex-col h-full justify-start">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-slate-700 dark:text-slate-300">Skills</h2>
            <p className="section-subtitle max-w-2xl text-base mb-10 text-slate-700 dark:text-slate-300">
              My expertise lies in crafting user-friendly, responsive, and mobile-first web applications. 
              Dedicated to continuous learning, I stay updated on the latest technologies and use my expertise to tackle challenging tasks 
              for successful project delivery.
            </p>
          </motion.div>

          {/* Accordion List Container */}
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
    </div>
  );
}

export default Skills;