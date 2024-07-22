"use client";

import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import {motion} from "framer-motion";
import Skill from "./skill";


export default function Skills() {
  const BackendTech = [
    "JavaScript",
    "TypeScript",
    "Node.JS",
    "NestJS",
    "Next.JS",
    "Express",
    "MongoDB",
    "MySQL",
    "Redis",
  ];

  const FrontendTech = [
    "React",
    "Redux",
    "Tailwind",
    "MUI",
    "BootStrap",
    "Sass",
    "Figma",
  ];

  const OtherTech = [
    "WebRtc",
    "Socket",
    "Git",
    "Npm",
    "Auth0",
    "AWS",
    "Azure",
    "Docker",
  ];

  return (
    <Grid container id="skill" className="justify-center pt-4 pb-20">
      <Grid className="max-w-screen-xl w-full justify-start px-3">
        <Stack
          direction="row"
          spacing={4}
          className="w-full justify-center my-8"
        >
          <div className="flex justify-center my-2 lg:py-8">
            <div
            className="flex  items-center">
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
              <Box className="bg-[#1a1443] text-white w-fi p-2 px-5 text-xl rounded-md">
                My Skills
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
            </div>
          </div>
        </Stack>
        <Stack>
          <h1 className="left-heading s-color p-border-color">BackEnd</h1>
          <motion.div
          initial={{ x: 200, }}
          transition={{ duration: 0.75, delay: 0.05, ease: "easeInOut" }}
          whileInView={{x: 0}}
          className="my-4 flex flex-wrap gap-3">
            {BackendTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </motion.div>
        </Stack>
        <Stack className="my-6">
          <h1 className="left-heading s-color p-border-color">FrontEnd</h1>
          <motion.div
          initial={{ x: 200, }}
          transition={{ duration: 0.75, delay: 0.05, ease: "easeInOut" }}
          whileInView={{x: 0}}
          className="my-4 flex flex-wrap gap-3">
          
            {FrontendTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </motion.div>
        </Stack>
        <Stack>
          <h1 className="left-heading s-color p-border-color">Others</h1>
          <motion.div
          initial={{ x: 200, }}
          transition={{ duration: 0.75, delay: 0.05, ease: "easeInOut" }}
          whileInView={{x: 0}}
          className="my-4 flex flex-wrap gap-3">
            {OtherTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </motion.div>
        </Stack>
      </Grid>
    </Grid>
  );
}
