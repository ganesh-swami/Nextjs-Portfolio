import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../components/footer";
import Home from "../components/home";
import Skills from "@/components/skills";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <main className="tw-flex tw-flex-col">
      <Home />

      <Skills />
      <AboutMe />
      <Projects />
      {/* <Footer /> */}
    </main>
  );
}
