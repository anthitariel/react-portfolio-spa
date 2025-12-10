import { motion } from "framer-motion";
import Button from "./../common/Button";

// Animation configuration for staggered entrance effects
const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Image animation variant for profile photo entrance
const IMAGE_ANIMATION = {
  initial: { opacity: 0, scale: 0.9, y: 16 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.3 }
};

// Hero section component with introduction and profile image
function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center pt-12 md:pt-20 pb-12 md:pb-20 min-h-screen">
      {/* Left column: Text content */}
      <div className="flex flex-col justify-center">
        {/* Professional title badge */}
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">
          Software Engineer
        </p>

        {/* Main headline with gradient text effect */}
        <motion.h1
          {...ANIMATION_CONFIG}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-slate-700 dark:text-slate-300"
        >
          I architect and build
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">
            {" "}Scalable Web Experiences.
          </span>
        </motion.h1>

        {/* Subheading description with staggered animation */}
        <motion.p
          {...ANIMATION_CONFIG}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl"
        >
          I specialize in the design and implementation of high-performance, resilient, and mobile-first user interfaces. I drive feature ownership from concept to production, focusing on clean, maintainable architecture.
        </motion.p>

        {/* Call-to-action button with animation delay */}
        <motion.div
          {...ANIMATION_CONFIG}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-4"
        >
          <Button as="a" href="#projects"> 
            View Case Studies
          </Button>
        </motion.div>
      </div>

      {/* Right column: Profile image with Instagram link */}
      <motion.a
        href="https://www.instagram.com/anthitariel/"
        target="_blank"
        rel="noreferrer"
        {...IMAGE_ANIMATION}
        className="relative block group h-[70%] min-h-[400px] md:min-h-[500px]"
      >
        {/* Background gradient blur effect */}
        <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image container with hover effects and rounded borders */}
        <div className="relative w-full h-full rounded-3xl border border-slate-700/80 overflow-hidden group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-500">
          <img
            src="/react-portfolio-spa/img/hero-photo.jpg"
            alt="Anfisa Domashova - Software Engineer"
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Hover overlay with Instagram call-to-action */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-base tracking-wide border-b border-white pb-1">
              Open Instagram
            </span>
          </div>
        </div>
      </motion.a>
    </div>
  );
}

export default Hero;