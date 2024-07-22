"use client";
import Grid from "@mui/material/Grid";
import { TypeAnimation } from "react-type-animation";
import styles from "../app/page.module.css";
import Image from "next/image";
import MouseIcon from "@mui/icons-material/Mouse";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";

export default function Home() {
  const handleScroll = () => {
    const element = document.getElementById("skill");
    if (element) {
      element.scrollIntoView();
      element.scrollIntoView(false);
      element.scrollIntoView({ block: "end" });
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="w-full">
      <div className={styles.homeback}>
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.bgsvg}
        >
          <path
            id="Layer"
            d="m0 160l48.3 5.9c24 0 62.7 2.9 110.7-18.4 48-21.7 84-78.4 132-89.4 48-11 102.5 5.2 150.5 36.9 48 32.3 92.5 76.6 140.5 103.6 48 27 90 44.1 138 41.4 48.2-2.7 100.7-29.3 148.7-55.6 48-26.7 85.4-63.5 133.4-58.2 48 5.7 104 56.9 154.8 71 51.1 14.2 89.4 21.3 139.1 0.1 50.4-21.4 81-78.9 105-105.2l39-28.1v-64h-24c-24 0-72 0-120 0q-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0c-48 0-96 0-120 0h-24z"
          ></path>
        </svg>
        <div className="w-svw h-svh pt-12 pb-12 flex items-center justify-center">
          <div className="max-w-screen-xl w-full flex flex-col-reverse md:flex-row z-10 relative content-center justify-around">
            <motion.div 
            initial={{ scale: 0,rotate: "0deg", }}
            animate={{ scale: 1,rotate: ["180deg","0deg"], }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-center flex flex-col items-center justify-center">
              <h1 className="text-white text-4xl mb-6 z-10 relative h1-tag">
                I`m Ganesh
              </h1>
              <h2 className="text-white text-1xl font-bold pb-12 z-10 relative leading-loose">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Developer",
                    1500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Designer",
                    1500,
                    "Team Player",
                    1500,
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h2>

              <motion.button
                className="mt-12 md:mt-6 flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-900 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white md:font-semibold invisible md:visible"
                onClick={handleScroll}
                whileHover={{
                  scale: 1.125,
                  transition: { duration: 0.15 },
                  y: 10,
                }}
              >
                Scroll Down <MouseIcon />
              </motion.button>
            </motion.div>
            <motion.div 
          initial={{ x: 200, }}
          transition={{ duration: 0.75, delay: 0.05, ease: "easeInOut" }}
          whileInView={{x: 0}} className="flex items-center justify-center">
              <Image
                src="/img/ganesh-ai-image.webp"
                alt="Ganesh Swami web developer"
                className="w-94"
                width={300}
                height={300}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
