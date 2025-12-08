import React from 'react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-4 3-7 3-7a4.5 4.5 0 0 0-1.5-3c1.5-4.5-2.5-4.5-2.5-4.5S10 2 10 3.5C8 5 8 8 8 10a4.8 4.8 0 0 0-1 3.5v4c0 1 1 2 2 2h6Z" /><path d="M11 15h2" /></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="fixed bottom-0 inset-x-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-black/70 pt-6 pb-4 border-t border-slate-300 dark:border-slate-800"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
      >

        <div className="text-sm text-slate-600 dark:text-slate-400 order-2">
          <p>
            &copy; {currentYear} Anfisa Domashova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;