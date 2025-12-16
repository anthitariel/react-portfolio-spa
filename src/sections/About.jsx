import { motion } from "framer-motion";
import SectionTitle from "./../assets/SectionTitle";
import SectionSubtitle from "./../assets/SectionTitle";
import Text from "./../assets/Text";
import Button from "./../ui/Button"; 

const DIAMOND_CLASSES = "text-xs md:text-base flex items-start before:content-['◆'] before:text-accent before:text-xs before:mr-2 before:mt-1 before:shrink-0";

const VALUE_POINTS = [
  "Deep expertise across the entire frontend product lifecycle.",
  "Proven ability to bridge technical and design gaps with cross-functional teams.",
  "Performance and Accessibility embedded in the development workflow (A11y & Lighthouse standards).",
  "Full feature ownership, from initial concept and estimation to deployment and monitoring.",
];

const DiamondListItem = ({ children }) => (
  <li className={DIAMOND_CLASSES}>
    {children}
  </li>
);

function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <SectionTitle>
          About
        </SectionTitle>
        
        <Text >
          I collaborate with product teams to ship performant, accessible and visually consistent applications. My expertise lies in creating user-friendly, responsive, mobile-first interfaces with focus on clean architecture.
          </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <SectionSubtitle>
          Value Delivered
        </SectionSubtitle>

        <ul className="space-y-2">
          {VALUE_POINTS.map((point, index) => (
            <DiamondListItem key={index}>
              {point}
            </DiamondListItem>
          ))}
        </ul>
      </motion.div>

     <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-6"
      >
        <Button
          as="a" 
          href="#contacts"
          variant="link"
          className="text-slate-700 dark:text-slate-200 
                     hover:border-accent hover:text-accent" 
        >
          Get in Touch &rarr;
        </Button>
      </motion.div>
    </div>
  );
}

export default About;