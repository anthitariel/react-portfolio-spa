
import Text from "./../assets/Text";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="static md:fixed bottom-0 inset-x-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-black/70 pt-6 pb-4 border-t border-slate-300 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <Text className="order-2">
            &copy; {currentYear} Anfisa Domashova. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;