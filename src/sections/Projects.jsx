import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import SectionTitle from "./../common/Typography/SectionTitle"; 
import UniversalModal from "../common/UniversalModal";

/**
 * ProjectContent - Modal component displaying project details
 * Shows project description, tech stack, and GitHub link
 */
function ProjectContent({ project, onClose }) {
  if (!project) return null;

  return (
    <div>
      <div className="px-5 py-4 text-sm">
        <p className="text-slate-700 dark:text-slate-200 mb-3">
          {project.details || project.description}
        </p>

        <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
          Tech stack
        </h4>

        <ul className="flex flex-wrap gap-2 text-[0.7rem] text-slate-700 dark:text-slate-200 mb-4">
          {project.stack.map(tech => (
            <li
              key={tech}
              className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 bg-slate-50 dark:bg-slate-900/70"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between shrink-0">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="btn-primary text-center justify-center"
        >
          Open on GitHub
        </a>
        <button
          onClick={onClose}
          className="text-xs text-slate-600 dark:text-slate-400 hover:text-accent"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/**
 * Projects - Main section component
 * Features: carousel with touch swipe support, pagination, and project modal
 */
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [perView, setPerView] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive carousel - adjust items per view based on screen width
  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setPerView(3);
      else if (width >= 768) setPerView(2);
      else setPerView(1);
    };

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // Paginate projects array based on perView
  const pages = [];
  for (let i = 0; i < projects.length; i += perView) {
    pages.push(projects.slice(i, i + perView));
  }
  const totalPages = pages.length;

  useEffect(() => {
    setPageIndex(0);
  }, [perView, projects.length]);

  // Navigation helpers
  const goPrev = () => setPageIndex(i => Math.max(0, i - 1));
  const goNext = () => setPageIndex(i => Math.min(totalPages - 1, i + 1));

  // Touch swipe handlers - detect left/right swipe with 50px threshold
  const handleTouchStart = e => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = e => {
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) goNext();
    if (distance < -threshold) goPrev();
  };

  return (
    <div className="pt-12 md:pt-20 pb-12 md:pb-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle className="text-slate-700 dark:text-slate-300">
          Case Studies
        </SectionTitle>
        <p className="section-subtitle max-w-2xl">
          Guided by the K.I.S.S. principle and clean code practices, I build projects that are easy to use and maintain.
        </p>
      </motion.div>

      {/* Carousel container with touch support */}
      <div 
        className="relative mt-8 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          {/* Slides container - translates based on pageIndex */}
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {pages.map((page, pageIdx) => (
              <div key={pageIdx} className="flex-none w-full">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {page.map(project => (
                    <motion.article
                      key={project.title}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45 }}
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Project card */}
                      <div className="h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-5 flex flex-col justify-between hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition duration-300 group-hover:bg-accent">
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-300">
                            {project.title}
                          </h3>

                          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                            {project.description}
                          </p>

                          {/* Technology tags */}
                          <ul className="flex flex-wrap gap-2 text-[0.7rem] text-slate-600 dark:text-slate-300 mb-2">
                            {project.stack.map(tech => (
                              <li
                                key={tech}
                                className="rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 bg-white/80 dark:bg-slate-900/60"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="inline-flex items-center text-xs mt-2 px-0 py-0 text-accent group-hover:text-slate-900 group-hover:text-sm transition font-semibold">
                          Learn more
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots - clickable page indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-3">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPageIndex(idx)}
                className={`h-3 w-3 rounded-full border border-accent transition ${
                  idx === pageIndex ? "bg-accent" : "bg-transparent opacity-40 hover:opacity-70"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project details modal */}
      <UniversalModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        size="md:max-w-[50%]"
      >
        <ProjectContent 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </UniversalModal>
    </div>
  );
}

export default Projects;