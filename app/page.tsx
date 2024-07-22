"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../components/footer";
import Home from "../components/home";
import Skills from "@/components/skills";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function HomePage() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const ref = useRef(null);
  // const { scrollyPrgrs as scrollYProgress  } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 300);

  return (
    <main ref={ref} className="tw-flex tw-flex-col">
      <Home />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <motion.div className="progressbr" style={{ scaleX }} />
      {/* <Footer /> */}
    </main>
  );
}
