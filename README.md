# Frontend Software Engineer Portfolio (React & Vite Stack)

A modern, responsive Single-Page Application (SPA) showcasing the portfolio and case studies of **Frontend Software Engineer, Anfisa Domashova**. Built using the latest **React, Framer Motion, and Tailwind CSS** stack for high performance and maintainability.

---

## Features
- Responsive, mobile-first layout using **Tailwind CSS**.
- Smooth, engaging animations powered by **Framer Motion**.
- Reusable `UniversalModal` component for project details.
- Simple projects data file (`projects.js`) for quick content updates.
- **A11y-friendly** external links (`rel="noopener noreferrer"`).

---

## Prerequisites
- Node.js 16+ (or current LTS)
- npm or yarn

---

## Quick Start
1. Clone repository
2. Install dependencies
   - npm: `npm install`
   - yarn: `yarn`
3. Start dev server
   - npm: `npm run dev`
   - yarn: `yarn dev`
4. Build for production
   - npm: `npm run build`
   - yarn: `yarn build`
5. Preview production build
   - npm: `npm run preview`
   - yarn: `yarn preview`

---

## Project Structure (Important Files)
- `src/`
  - `components/`
    - `Hero.jsx`
    - `About.jsx`
    - `Projects.jsx`
    - `Contacts.jsx`
    - `UniversalModal.jsx`
    - `SocialIcons.jsx`
  - `data/`
    - `projects.js`
  - `App.jsx`
  - `main.jsx`
- `public/`
  - `img/`

---

## Customization
- **Content:** Edit project data in `src/data/projects.js` and update component text (Hero, About, Contacts).
- **Images:** Add/replace files in `public/img` and update paths accordingly.
- **Styling:** Modify Tailwind configuration and utility classes in components.
- **Modal Sizing:** The `UniversalModal` accepts a `size` prop for responsive modal widths (e.g., `md:max-w-[50%]`).

---

## Accessibility & SEO
- Maintain meaningful `alt` attributes for all images.
- Use semantic HTML and `aria-labels` (especially for social links).
- **SEO:** Ensure the `<title>` and `<meta description>` tags contain primary keywords like "React Portfolio" and "Software Engineer."

---

## Troubleshooting
- If styles are missing, ensure Tailwind is correctly configured and PostCSS is running.
- If animations don’t render, verify `framer-motion` is installed and imported correctly.

---

## Contributing
1. Create a branch (`git checkout -b feature/my-new-feature`).
2. Make changes and run the app locally.
3. Ensure code adheres to simple code standards.
4. Open a PR with a short description of changes.

---

## License
This project is open-sourced under the **MIT License**.

---

## Author
**Anfisa Domashova**

---

## Notes
- Scripts assume a **Vite** setup (`dev`, `build`, `preview`).