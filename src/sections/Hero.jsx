import { motion } from "framer-motion";
import Button from "../shared/Button";
import { themeStyles as s } from "../shared/themeStyles";
import SectionWrapper from "../shared/SectionWrapper";

/**
 * Scale and fade entrance animation for hero media.
 */
const IMAGE_ANIMATION = {
  initial: { opacity: 0, scale: 0.9, y: 12 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 }
};

function Hero({ onNavigate }) {
  return (
    <SectionWrapper id="home">
      {/* 2-Column Grid: Stacks on mobile, splits 50/50 on desktop. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        
        {/* TEXT: Uses global typography tokens for consistent font scale. */}
        <div className="flex flex-col justify-center text-left">
          <p className={s.typography.label}>Software Engineer</p>

          <h1 className={`${s.typography.hero} mb-3 md:mb-6`}>
            I architect and build
            {/* Gradient clip: Ties the primary accent color into the heading. */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400"> digital experiences.</span>
          </h1>

          <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
            Passionate about building high-quality, scalable web applications with a focus on performance and user experience.
          </p>

          <div className="mb-2 md:mb-6 flex flex-wrap gap-4">
            <Button
              variant="primary" 
              size="lg" 
              onClick={() => onNavigate("projects")} 
              className="cursor-pointer"
            > 
              View Case Studies
            </Button>
          </div>
        </div>

        {/* IMAGE: aspect-square keeps the profile area consistent across devices. */}
        <motion.a
          href="https://www.instagram.com/anthitariel/"
          target="_blank"
          rel="noreferrer"
          {...IMAGE_ANIMATION}
          className="relative block group aspect-square w-full max-w-[490px] mx-0" 
        >
          {/* Subtle glow: Animates from 40% to 100% opacity on group hover. */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-accent/20 blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Border-box: clips the internal image scale effect. */}
          <div className="relative w-full h-full border border-slate-700/80 overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/40">
            <img
              src="/react-portfolio-spa/img/hero-photo.jpg"
              alt="Anfisa Domashova"
              loading="lazy"
              // object-top: Prevents head-cropping on different aspect ratios.
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

export default Hero;