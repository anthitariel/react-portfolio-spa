# Frontend Software Engineer Portfolio (React & Vite Stack)

![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5%2B-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3%2B-38BDF8?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-black?logo=framer)
![License](https://img.shields.io/github/license/anthitariel/react-portfolio-spa)
![Last Commit](https://img.shields.io/github/last-commit/anthitariel/react-portfolio-spa)

A modern, responsive Single-Page Application (SPA) showcasing the portfolio and case studies of **Frontend Software Engineer, Anfisa Domashova**. Built using the latest **React, Framer Motion, and Tailwind CSS** stack for high performance and maintainability.

## Technologies Used

| Technology | Version | Description |
| :--- | :--- | :--- |
| React | 18+ | Core library for building the UI |
| Vite | 5+ | Fast build tool and dev server |
| Tailwind CSS | 3+ | Utility-first CSS framework for responsive design |
| Framer Motion | Latest | Library for production-ready animations |
| License | MIT | Project license |

## Features

* Responsive, mobile-first layout using **Tailwind CSS**.
* Smooth, engaging animations powered by **Framer Motion**.
* Reusable `UniversalModal` component for displaying detailed project information.
* Simple, data-driven architecture: project content is easily manageable via `src/data/projects.js`.
* **RWD Optimization:** Dedicated mobile and tablet logic for image display (aspect-square) and carousel navigation (swipe-only on small screens).
* **A11y-friendly** external links (`rel="noopener noreferrer"`).
* Built on the **Vite** platform for a fast development experience.

## Quick Start

### Prerequisites

* Node.js 16+ (or current LTS)
* npm or yarn

### Installation and Running

1.  **Clone repository**
    ```bash
    git clone [repository-url]
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # OR
    yarn
    ```

3.  **Start development server**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    # OR
    yarn build
    ```

5.  **Preview production build**
    ```bash
    npm run preview
    # OR
    yarn preview
    ```

## Customization

* **Content:** Edit project data in `src/data/projects.js` and update text within components (`Hero.jsx`, `About.jsx`, etc.).
* **Images:** Add/replace image files in `public/img` and ensure paths in components are correctly updated.
* **Styling:** Modify Tailwind utility classes within components or extend the default configuration.
* **Modal Sizing:** The `UniversalModal` accepts a `size` prop for responsive modal widths (e.g., `size="md:max-w-4xl"`).

## Accessibility & SEO

* Maintain meaningful `alt` attributes for all images.
* Use semantic HTML and appropriate `aria-labels` (особливо для навігації та соціальних посилань).
* **SEO:** Ensure the `<title>` and `<meta description>` tags містять первинні ключові слова (наприклад, "React Portfolio", "Software Engineer").

## Contributing

Contributions are welcome!

1.  Create a feature branch (`git checkout -b feature/my-new-feature`).
2.  Make your changes and test the application locally.
3.  Ensure code adheres to established simple code standards.
4.  Open a Pull Request (PR) with a short description of your changes.

## License

This project is open-sourced under the **MIT License**.

## Author

**Anfisa Domashova**
