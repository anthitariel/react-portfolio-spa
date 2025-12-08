import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="section-wrapper grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 items-center pt-24 md:pt-32 min-h-[90vh]">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4 mt-4">
          Software Engineer
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-slate-700 dark:text-slate-300"
        >
          I architect and build <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-sky-400">
            Scalable Web Experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-xl"
        >
          I specialize in the design and implementation of high-performance, resilient, and mobile-first user interfaces. I drive feature ownership from concept to production, focusing on clean, maintainable architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Case Studies
          </a>

        </motion.div>
      </div>

      <motion.a
        href="https://www.instagram.com/anthitariel/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full h-full block group min-h-[40vh] md:min-h-full"
      >
        <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />

        <div className="relative w-full h-full rounded-3xl border border-slate-700/80 overflow-hidden transform group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-500">
          <img
            src="/react-portfolio-spa/img/hero-photo.jpg"
            alt="Anfisa Domashova"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white text-base tracking-wide border-b border-white pb-1">Open Instagram</span>
          </div>
        </div>
      </motion.a>
    </div>
  );
}

export default Hero;