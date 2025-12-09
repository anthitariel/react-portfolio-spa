import { motion } from "framer-motion";
import SectionTitle from "../common/Typography/SectionTitle";
import Text from "../common/Typography/Text"; 

const DIAMOND_CLASSES = "flex items-start before:content-['◆'] before:text-accent before:text-xs before:mr-2 before:mt-1 before:shrink-0";

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
    <div className="pt-12 md:pt-20 pb-12 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <SectionTitle className="text-slate-700 dark:text-slate-300">
          About
        </SectionTitle>
        
        <Text className="mb-4">
          I collaborate with product teams to ship performant, accessible and visually consistent applications.
        </Text>
        <Text className="mb-4">
          My expertise lies in creating user-friendly, responsive, mobile-first interfaces with focus on clean architecture.
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold border-b border-slate-700 pb-2 text-slate-700 dark:text-slate-300 mb-6">
          Value Delivered
        </h3>

        <ul className="space-y-3">
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
        className="mt-8"
      >
        <a
          href="#contacts"
          className="inline-flex items-center gap-2 text-slate-700 pb-2 dark:text-slate-200 border-b border-transparent hover:border-accent transition"
        >
          Get in Touch &rarr;
        </a>
      </motion.div>
    </div>
  );
}

export default About;