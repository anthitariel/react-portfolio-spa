import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import SEOHelmet from "./shared/SEOHelmet";
import { sections } from "./data/sections";
import { themeStyles as s } from "./shared/themeStyles";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const isScrolling = useRef(false);
  const touchStart = useRef(null);
  const sectionIds = sections.map((sec) => sec.id);

  // Core navigation handler for scroll and touch
  const handleNavigate = (direction) => {
    if (isScrolling.current) return;

    const currentIndex = sectionIds.indexOf(activeSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sectionIds.length) {
      isScrolling.current = true;
      setActiveSection(sectionIds[nextIndex]);
      setTimeout(() => { isScrolling.current = false; }, 800);
    }
  };

  const onWheel = (e) => {
    if (document.body.style.overflow === "hidden") return;
    if (e.deltaY > 40) handleNavigate(1);
    else if (e.deltaY < -40) handleNavigate(-1);
  };

  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientY; };

  const onTouchMove = (e) => {
    if (!touchStart.current || isScrolling.current) return;
    if (document.body.style.overflow === "hidden") return;

    const touchEnd = e.touches[0].clientY;
    const diff = touchStart.current - touchEnd;

    if (Math.abs(diff) > 50) {
      handleNavigate(diff > 0 ? 1 : -1);
      touchStart.current = null;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <Hero onNavigate={setActiveSection} />;
      case "about": return <About onNavigate={setActiveSection} />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "contacts": return <Contacts />;
      default: return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div 
      className={s.layout.mainWrapper}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      <SEOHelmet title="Frontend Portfolio" />
      <Header active={activeSection} onNav={setActiveSection} />

      {/* Side Navigation positioned on the left */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className="group relative flex items-center justify-start"
            aria-label={`Go to ${sec.label}`}
          >
            {/* Dynamic dot width based on active state */}
            <div className={`transition-all duration-300 rounded-full h-2 ${
              activeSection === sec.id ? s.ui.dotActive : s.ui.dotInactive
            }`} />
            
            <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.1em] dark:text-white whitespace-nowrap">
              {sec.label}
            </span>
          </button>
        ))}
      </nav>

      <main className="flex-grow flex items-center justify-center px-6 pt-20 pb-16 relative">
        <div className="max-w-5xl w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              // Vertical slide animation (Y-axis)
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;