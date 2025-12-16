import { motion } from "framer-motion";
import SectionTitle from "../assets/SectionTitle";
import Text from "../assets/Text";

const HEADER_OFFSET_PX = 120; 

const truncateByWord = (text, maxWords = 30) => { 
    if (!text) return '';
    const words = text.split(/\s+/).filter(word => word.length > 0);
  
    if (words.length <= maxWords) {
        return text;
    }
    
    return words.slice(0, maxWords).join(' ') + '...'; 
};

function ProjectTile({ item, onClick }) {
  if (!item) {
    return null; 
  }

  const { title, description, imageSrc, level, source } = item;
  const tileDescription = truncateByWord(description); 

  return (
    <motion.article
      className="group relative rounded-xl border border-slate-300 dark:border-slate-800 
                 bg-white dark:bg-slate-900/60 transition duration-300 shadow-lg 
                 lg:hover:shadow-2xl lg:hover:shadow-accent/20 
                 cursor-pointer overflow-hidden flex flex-col
                 lg:min-h-[400px]" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div
        className="p-6 relative z-20 transition duration-300 
                   /* lg:flex-grow та lg:min-h-[400px] залишено лише для десктопної анімації */
                   lg:flex-grow lg:min-h-[400px] 
                   lg:group-hover:bg-accent lg:group-hover:border-accent"
      >
        <span className="text-xs uppercase font-semibold tracking-wider text-accent mb-2 block 
                       lg:group-hover:text-white/80 transition">
          {level || source}
        </span>

        <SectionTitle className="text-base md:text-xl font-bold mb-2 
                               lg:group-hover:text-white transition">
          {title}
        </SectionTitle>

        <Text className="line-clamp-3 lg:group-hover:text-white"> 
          {tileDescription} 
        </Text>
      </div>

      <div 
        className="lg:hidden w-full relative z-10 overflow-hidden aspect-[16/9]" 
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0 z-20 bg-black/50" />
      </div>

      <motion.div
        className="hidden lg:block absolute inset-x-0 top-0 z-30 h-full"
        initial={{ y: "80%" }}
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
          transition={{ duration: 0.3, delay: 0.2 }}
        />
      </motion.div>
    </motion.article>
  );
}

export default ProjectTile;