import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import "./App.css";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </section>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
