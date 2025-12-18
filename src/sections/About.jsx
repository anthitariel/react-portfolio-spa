import { themeStyles as s } from "../shared/themeStyles";
import SectionWrapper from "../shared/SectionWrapper";
import Button from "../shared/Button"; 
import { motion } from "framer-motion";

/*  Key selling points constant. */
const VALUE_POINTS = [
  "Deep expertise across the entire frontend product lifecycle.",
  "Proven ability to bridge technical and design gaps.",
  "Performance and Accessibility embedded in workflow.",
  "Full feature ownership, from concept to deployment.",
];

function About({ onNavigate }) { 
  return (
    <SectionWrapper id="about">
      {/* Container: Aligns content left and applies global fade-up animation */}
      <motion.div className="flex flex-col text-left items-start" {...s.animations.fadeUp}>
        
        <h2 className={s.typography.sectionTitle}>About</h2>
        <p className={`${s.typography.text} leading-snug md:leading-relaxed`}>
          I collaborate with product teams to ship performant, accessible and visually consistent applications. 
          My expertise lies in creating user-friendly, responsive, mobile-first interfaces.
        </p>
        <h3 className={`${s.typography.sectionSubtitle} mt-6 md:mt-10 mb-3 md:mb-4`}>
          Value Delivered
        </h3>

        {/* Bullet List: spacing adjusted for mobile vs desktop touch targets */}
        <ul className="space-y-2 md:space-y-4">
          {VALUE_POINTS.map((point, index) => (
            <li key={index} className={s.ui.diamondList}>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA: !p-0 ensures link text aligns perfectly with paragraph start */}
        <div className="mt-4 md:mt-8 flex justify-start w-full">
          <Button 
            variant="link" 
            size="sm" 
            onClick={() => onNavigate("contacts")} 
            className="group !p-0 !justify-start !text-left"
          >
            <span className="flex items-center">
              Get in touch
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </span>
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export default About;