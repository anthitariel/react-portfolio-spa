import { motion } from "framer-motion";
import { themeStyles as s } from "../shared/themeStyles";
import { Button, SocialLink } from "../shared/Button";
import { SOCIAL_LINKS } from "../data/socialLinks";
import SectionWrapper from "../shared/SectionWrapper";

/**
 * Entrance animation for image: subtle scale and lift.
 */
const IMAGE_ANIMATION = {
  initial: { opacity: 0, scale: 0.9, y: 12 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: 0.2 }
};

function Contacts() {
  return (
    <SectionWrapper id="contacts">
      {/* Grid: 1 col on mobile, 2 col on desktop. Responsive gap. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center">
        
        {/* TEXT: order-1 on mobile, order-2 (right side) on desktop */}
        <div className="flex flex-col justify-center order-1 md:order-2 text-left">
          <h2 className={`${s.typography.sectionTitle} mb-3 md:mb-6`}>
            Connect & Collaborate
          </h2>

          <div className="space-y-2 md:space-y-4">
            <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
              I'm always open to discussing new opportunities, fascinating projects, or sharing insights on the modern web stack. 
            </p>
            
            {/* !p-0: Neutralizes button padding to align link text with paragraph flow */}
            <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
              The quickest way to start a conversation is to send me a
              <Button as="a" href="mailto:anfiya17@gmail.com" variant="link" className="ml-1 !p-0 font-semibold text-accent">
                message.
              </Button>
            </p>

            <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
              This portfolio was meticulously crafted by{" "}
              <Button as="a" href="https://github.com/anthitariel" variant="link" target="_blank" rel="noopener noreferrer" className="!inline-flex items-center !p-0">
                <span className="font-medium">Anthitariel</span>
              </Button>. 
            </p>
            
            <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
              Feel free to explore the full source code on{" "}
              <Button as="a" href="https://github.com/anthitariel/react-portfolio-spa" variant="link" className="ml-1 !p-0">
                GitHub.
              </Button>
            </p>
          </div>

          <motion.ul
            className="flex flex-wrap justify-start gap-3 md:gap-4 text-slate-500 dark:text-slate-400 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            aria-label="Social media"
          >
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </motion.ul>
        </div>

        {/* IMAGE: order-2 on mobile, order-1 (left side) on desktop */}
        <motion.a
          href="https://www.instagram.com/anthitariel/"
          target="_blank"
          rel="noreferrer"
          {...IMAGE_ANIMATION}
          className="relative block group aspect-square w-full max-w-[490px] order-2 md:order-1 mx-0" 
        >
          {/* Background glow effect visible on group hover */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-accent/20 blur-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Main container with overflow hidden to clip the scaling image */}
          <div className="relative w-full h-full border border-slate-700/80 overflow-hidden transition-all duration-500 rounded-2xl md:rounded-3xl group-hover:shadow-2xl group-hover:shadow-accent/40">
            <img
              src="/react-portfolio-spa/img/contact-collaborate.jpg"
              alt="Connect with me"
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            {/* Desktop-only overlay revealing text on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xs md:text-base tracking-wide border-b border-white pb-1">Follow me</span>
            </div>
          </div>
        </motion.a>

      </div>
    </SectionWrapper>
  );
}

export default Contacts;