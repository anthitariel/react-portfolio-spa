import { useState, useEffect, useRef } from "react";
import { projects } from "../data/projects";
import { themeStyles as s } from "../shared/themeStyles";
import SectionWrapper from "../shared/SectionWrapper";
import UniversalModal from "../shared/UniversalModal";
import Button from "../shared/Button"; 
import ProjectTile from "../shared/ProjectTile";
import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "../shared/Icons";

/**
 * Modal content helper: Displays project image, tech stack, and links.
 */
function ProjectContent({ project, onClose }) {
  if (!project) return null;
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div className="w-full overflow-hidden bg-slate-100 dark:bg-slate-800 rounded-t-lg">
        {project.demoLink ? (
          <a href={project.demoLink} target="_blank" rel="noreferrer" className={s.cards.projectTile}>
            <img src={project.imageSrc} alt={project.title} className="w-full h-auto object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white text-xl font-bold uppercase tracking-widest border-2 border-white px-6 py-2">Live Demo</span>
            </div>
          </a>
        ) : (
          <img src={project.imageSrc} alt={project.title} className="w-full h-auto object-cover" />
        )}
      </div>

      <div className="px-6 py-5">
        <p className={`${s.typography.text} mb-6`}>{project.details || project.description}</p>
        <h4 className={s.typography.techTitle}>Tech stack</h4>
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(tech => <li key={tech} className={s.ui.badge}>{tech}</li>)}
        </ul>
      </div>

      {/* Action Footer: Primary buttons for external links + Close action. */}
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50 dark:bg-slate-900/20">
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          {project.demoLink && <Button as="a" href={project.demoLink} target="_blank" variant="primary" className="justify-center min-w-[140px]">Live Demo</Button>}
          <Button as="a" href={project.link} target="_blank" variant="primary" className="justify-center min-w-[140px]">
            <span>View Source</span> <LinkIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <Button onClick={(e) => { e.stopPropagation(); onClose(); }} variant="link" className="text-xs !text-slate-400 hover:!text-accent !border-none !p-0">Close</Button>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [perView, setPerView] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const touchStartX = useRef(0);

  /**
   * Screen size listener: Updates how many projects are shown per slide.
   */
  useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  // Chunks projects into arrays based on perView.
  const pages = [];
  for (let i = 0; i < projects.length; i += perView) pages.push(projects.slice(i, i + perView));
  
  const goPrev = () => setPageIndex(i => Math.max(0, i - 1));
  const goNext = () => setPageIndex(i => Math.min(pages.length - 1, i + 1));

  return (
    <SectionWrapper id="projects">
      <h2 className={s.typography.sectionTitle}>Case Studies</h2>
      <p className={`${s.typography.text} max-w-2xl`}>Guided by clean code practices, I build maintainable solutions.</p>

      {/* Slider: Uses touch event refs for mobile swiping logic. */}
      <div className="relative mt-2 md:mt-4 select-none" 
           onTouchStart={e => touchStartX.current = e.changedTouches[0].clientX}
           onTouchEnd={e => {
             const dist = touchStartX.current - e.changedTouches[0].clientX;
             if (dist > 50) goNext(); else if (dist < -50) goPrev();
           }}>
        
        {/* Navigation: Hidden on mobile, utilizes absolute positioning on desktop. */}
        {pages.length > 1 && (
          <div className="hidden lg:block">
            <button onClick={goPrev} disabled={pageIndex === 0} className="absolute -left-16 top-1/2 -translate-y-1/2 text-slate-400 hover:text-accent disabled:opacity-10 p-2"><ChevronLeftIcon className="w-10 h-10"/></button>
            <button onClick={goNext} disabled={pageIndex === pages.length - 1} className="absolute -right-16 top-1/2 -translate-y-1/2 text-slate-400 hover:text-accent disabled:opacity-10 p-2"><ChevronRightIcon className="w-10 h-10"/></button>
          </div>
        )}

        {/* Sliding Track: Translates based on current page percentage. */}
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${pageIndex * 100}%)` }}>
            {pages.map((page, idx) => (
              <div key={idx} className="flex-none w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {page.map(p => <ProjectTile key={p.title} item={p} onClick={() => setSelectedProject(p)} />)}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots: Active state managed via themeStyles tokens. */}
        {pages.length > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {pages.map((_, idx) => (
              <button key={idx} onClick={() => setPageIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === pageIndex ? s.ui.dotActive : s.ui.dotInactive}`} />
            ))}
          </div>
        )}
      </div>

      <UniversalModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title || ""}>
        <ProjectContent project={selectedProject} onClose={() => setSelectedProject(null)} />
      </UniversalModal>
    </SectionWrapper>
  );
}

export default Projects;