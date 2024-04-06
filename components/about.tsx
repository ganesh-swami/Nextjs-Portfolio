import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";

export default function AboutMe() {
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
                About Me
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
            </Box>
          </Box>
        </Stack>
        <Box className="my-4 flex flex-col md:flex-row gap-4">
          <Stack className="w-full md:w-6/12">
            <p className="text-[#1a1443] text-sm">
              I am a full stack web developer with a passion for creating
              beautiful and functional websites. I am a quick learner and always
              strive to improve my skills.
            </p>
            <p className="text-[#1a1443] text-sm">
              I have a strong background in web design and development, and I am
              always looking for new challenges and opportunities to expand my
              knowledge and skills.
            </p>
          </Stack>
          <Stack className="w-full md:w-6/12">
            <p className="text-[#1a1443] text-sm">
              I am a quick learner and always strive to improve my skills.
            </p>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
