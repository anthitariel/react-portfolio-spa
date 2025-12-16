import { motion } from "framer-motion";
import SectionTitle from "./../assets/SectionTitle";
import Text from "./../assets/Text";
import { LinkIcon, GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from "./../assets/Icons";

const ICON_SHARED_CLASSES = "w-5 h-5 fill-current";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/anthitariel", Icon: GitHubIcon },
  { label: "Instagram", href: "https://www.instagram.com/anthitariel/", Icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com/anthitariel", Icon: TwitterIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anfisadomashova/", Icon: LinkedInIcon },
];

const SocialLink = ({ href, label, Icon }) => (
  <li>
    <a
      className="block hover:text-accent transition"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className={ICON_SHARED_CLASSES} />
    </a>
  </li>
);

function Contacts() {
  const CreditLinkIcon = (props) => <LinkIcon {...props} className="h-4 w-4 ml-1 inline-block stroke-current" />;

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SectionTitle>
          Connect & Collaborate
          </SectionTitle>

        <div className="max-w-xl mb-12">
          <Text>
            I'm always open to discussing new opportunities, fascinating projects, or sharing insights on the modern web stack.
          </Text>

          <Text>
            The quickest way to start a conversation is to send me a
            <a href="mailto:anfiya17@gmail.com" className="text-accent font-medium hover:underline ml-1">
              message
            </a>
            .
          </Text>

          <Text>
            This portfolio was meticulously crafted by{" "}
            <a
              href="https://github.com/anthitariel"
              className="inline-flex items-center hover:text-sky-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-medium">Anthitariel</span>
              <CreditLinkIcon />
            </a>
            . Feel free to explore the full source code on{" "}
            <a href="https://github.com/anthitariel/react-portfolio-spa" className="text-accent font-medium hover:underline ml-1">
              GitHub
            </a>
          </Text>
        </div>
      </motion.div>

      <motion.ul
        className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-400"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        aria-label="Social media"
      >
        {SOCIAL_LINKS.map((link) => (
          <SocialLink key={link.label} href={link.href} label={link.label} Icon={link.Icon} />
        ))}
      </motion.ul>
    </div>
  );
}

export default Contacts;