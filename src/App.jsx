import Header from "./common/Header";
import SectionWrapper from "./common/SectionWrapper";
import Footer from "./common/Footer"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";


function App() {
  return (
    <div className="snap-container h-screen overflow-y-scroll scroll-smooth md:snap-y md:snap-mandatory">
      <Header />

      <main>
        <SectionWrapper id="home"><Hero /></SectionWrapper>
        <SectionWrapper id="about"><About /></SectionWrapper>
        <SectionWrapper id="skills"><Skills /></SectionWrapper>
        <SectionWrapper id="projects"><Projects /></SectionWrapper>
        <SectionWrapper id="contacts"><Contacts /></SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

export default App;