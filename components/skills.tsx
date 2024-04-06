import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
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
    "NPM",
    "Auth0",
    "AWS",
    "Azure",
    "Docker",
  ];

  return (
    <Grid container xs={12} id="skill" className="justify-center py-4">
      <Grid className="max-w-screen-xl w-full justify-start px-3">
        <Stack
          direction="row"
          spacing={4}
          className="w-full justify-center my-8"
        >
          <Box className="flex justify-center my-2 lg:py-8">
            <Box className="flex  items-center">
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
              <Box className="bg-[#1a1443] text-white w-fi p-2 px-5 text-xl rounded-md">
                My Skills
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <h1 className="left-heading s-color p-border-color">BackEnd</h1>
          <Box className="my-4 flex flex-wrap gap-3">
            {BackendTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </Box>
        </Stack>
        <Stack className="my-6">
          <h1 className="left-heading s-color p-border-color">FrontEnd</h1>
          <Box className="my-4 flex flex-wrap gap-3">
            {FrontendTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </Box>
        </Stack>
        <Stack>
          <h1 className="left-heading s-color p-border-color">Others</h1>
          <Box className="my-4 flex flex-wrap gap-3">
            {OtherTech.map((tech) => (
              <Skill key={tech} tech={tech} />
            ))}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}
