import Header from "./components/Header";
import SectionWrapper from "./components/SectionWrapper";
import Footer from "./components/Footer"
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";


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