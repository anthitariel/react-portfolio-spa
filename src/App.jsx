import Header from "./layout/Header";
import SectionWrapper from "./layout/SectionWrapper";
import Footer from "./layout/Footer"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import SEOHelmet from "./utility/SEOHelmet"; 


function App() {
  return (
    <>
      {/* Implement SEO tags for the main portfolio page */}
      <SEOHelmet 
        title="Frontend Software Engineer Portfolio" 
        description="Anfisa Domashova's personal portfolio, showcasing expertise in React, Vite, Framer Motion, and modern web development."
      />
      <div className="h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory pt-28">
        <Header />

        <main>
          {/* Portfolio Sections */}
          <SectionWrapper id="home"><Hero /></SectionWrapper>
          <SectionWrapper id="about"><About /></SectionWrapper>
          <SectionWrapper id="skills"><Skills /></SectionWrapper>
          <SectionWrapper id="projects"><Projects /></SectionWrapper>
          <SectionWrapper id="contacts"><Contacts /></SectionWrapper>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;