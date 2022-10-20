import Header from "./Header";
import Landing from "./Landing";
import About from "./About";
import Service from "./Service";
import Project from "./Projects";
import HireMe from "./HireMe";
import Footer from "./Footer";
import Skills from "./Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Service />
      <Project />

      <HireMe />
      <Footer />
    </div>
  );
}
