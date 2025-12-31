import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";


export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
