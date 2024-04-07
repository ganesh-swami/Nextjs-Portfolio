import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../components/footer";
import Home from "../components/home";
import Skills from "@/components/skills";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <main className="tw-flex tw-flex-col">
      <Home />

      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
