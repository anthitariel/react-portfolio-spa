import { motion } from "framer-motion";
import { themeStyles as s } from "../shared/themeStyles";

// Desktop offset: Keeps the project title visible when the image slides down
const HEADER_OFFSET_PX = 100;

/**
 * Truncates text to a specific word count to maintain tile grid uniformity.
 */
const truncateByWord = (text, maxWords = 25) => { 
    if (!text) return '';
    const words = text.split(/\s+/).filter(word => word.length > 0);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...'; 
};

function ProjectTile({ item, onClick }) {
  if (!item) return null;

  const { title, description, imageSrc, source } = item;
  const tileDescription = truncateByWord(description); 

  return (
    <motion.article
      className={`${s.cards.base} group relative cursor-pointer flex flex-col lg:min-h-[400px] bg-white dark:bg-slate-900/60`}
      {...s.animations.fadeUp}
      onClick={onClick}
    >
      {/* Text Layer: Z-index ensures text stays above the sliding image. 
          Group-hover triggers color shifts on desktop. */}
      <div
        className="p-4 md:p-6 relative z-20 transition-all duration-300 
                   lg:flex-grow lg:min-h-[400px] 
                   lg:group-hover:bg-accent lg:group-hover:border-accent"
      >
        <h2 className={`${s.typography.sectionSubtitle} !border-none lg:group-hover:text-white transition !mb-1`}>
          {title}
        </h2>

        <h3 className={`${s.typography.label} !border-none lg:group-hover:text-white transition`}>
          {source}
        </h3>

        <p className={`${s.typography.text} !mb-0 line-clamp-4 leading-snug md:leading-relaxed lg:group-hover:text-white`}> 
          {tileDescription} 
        </p>
      </div>

      {/* Mobile Image: Static placement below text for simple scrolling. */}
      <div className="lg:hidden w-full relative z-10 overflow-hidden aspect-[16/9]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 z-20 bg-black/40" />
      </div>

      {/* Desktop Image: Sliding "Shutter" effect.  */}
      <motion.div
        className="hidden lg:block absolute inset-x-0 top-0 z-30 h-full"
        initial={{ y: "82%" }}
        whileHover={{ y: `${HEADER_OFFSET_PX}px` }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 z-40 bg-black/50"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.article>
  );
}

export default ProjectTile;