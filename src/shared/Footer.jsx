import { themeStyles as s } from "../shared/themeStyles";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black py-6 border-t border-slate-200 dark:border-slate-800 shrink-0">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">
        <p className={`${s.typography.text} !mb-0 opacity-80 hover:opacity-100 transition-opacity duration-300`}>
          &copy; {new Date().getFullYear()} Anfisa Domashova
        </p>
      </div>
    </footer>
  );
};

export default Footer;