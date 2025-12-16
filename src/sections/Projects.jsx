import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import SectionTitle from "../assets/SectionTitle";
import Text from "../assets/Text";
import UniversalModal from "./../layout/UniversalModal";
import Button from "./../ui/Button"; 
import ProjectTile from "./../ui/ProjectTile";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/Icons";

function ProjectContent({ project, onClose }) {
  if (!project) return null;

  return (
    <div>
      <div className="w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        {project.demoLink ? (
            <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="relative block group cursor-pointer"
            >
                <img
                    src={project.imageSrc}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover transition duration-300 group-hover:opacity-30"
                />

                <div 
                    className="absolute inset-0 flex items-center justify-center 
                               opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none
                               text-3xl font-extrabold uppercase tracking-widest"
                >
                    Live Demo
                </div>
            </a>
        ) : (
            <img
                src={project.imageSrc}
                alt={`Preview of ${project.title}`}
                className="w-full h-full object-cover"
            />
        )}
      </div>

      <div className="px-5 py-4 text-sm">
         <Text className="mb-3">
          {project.details || project.description}
        </Text>

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
        
        <div className="flex flex-col gap-3 sm:flex-row"> 
            
            {project.demoLink && (
                 <Button 
                    as="a"
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center justify-center bg-accent text-white hover:bg-accent-dark" 
                >
                    Live Demo
                </Button>
            )}

            <Button 
                as="a"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-center justify-center border border-slate-300 dark:border-slate-700 hover:border-accent" 
            >
                Open on GitHub
            </Button>
        </div>

        <button
          onClick={onClose}
          className="text-xs text-slate-600 dark:text-slate-400 hover:text-accent sm:ml-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [perView, setPerView] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const pages = [];
  for (let i = 0; i < projects.length; i += perView) {
    pages.push(projects.slice(i, i + perView));
  }
  const totalPages = pages.length;

  useEffect(() => {
    setPageIndex(0);
  }, [perView, projects.length]);

  const goPrev = () => setPageIndex(i => Math.max(0, i - 1));
  const goNext = () => setPageIndex(i => Math.min(totalPages - 1, i + 1));

  const handleTouchStart = e => {
    if (e.target.closest('button, a, .group') || totalPages <= 1) return; 

    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (totalPages <= 1) return;
    
    touchEndX.current = e.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (distance > threshold) goNext();
    if (distance < -threshold) goPrev();
  };


  return (
    <div className="pt-12 md:pt-20 pb-12 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle className="text-slate-700 dark:text-slate-300">
            Case Studies
        </SectionTitle>
        
        <Text className="section-subtitle max-w-2xl">
          Guided by the K.I.S.S. principle and clean code practices, I build projects that are easy to use and maintain.
        </Text>
      </motion.div>

      <div 
        className="relative mt-6 select-none px-0 md:px-12" 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {totalPages > 1 && (
          <>
            <button
              onClick={goPrev}
              disabled={pageIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                         text-accent w-10 h-10 transition-colors 
                         hover:text-sky-400 dark:hover:text-sky-300 
                         disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-8 h-8"/>
            </button>

            <button
              onClick={goNext}
              disabled={pageIndex === totalPages - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                         text-accent w-10 h-10 transition-colors 
                         hover:text-sky-400 dark:hover:text-sky-300 
                         disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-8 h-8"/>
            </button>
          </>
        )}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          >
            {pages.map((page, pageIdx) => (
              <div key={pageIdx} className="flex-none w-full">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {page.map(project => (
                    <ProjectTile
                      key={project.title}
                      item={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

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

      <UniversalModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        size="md:max-w-4xl" 
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