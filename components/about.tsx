import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import styles from "../app/page.module.css";

export default function AboutMe() {
  return (
    <Grid
      container
      xs={12}
      id="skill"
      className={styles.aboutmeBack + " justify-center pt-4 pb-20"}
    >
      <Grid className="max-w-screen-xl w-full justify-start px-3">
        <Stack
          direction="row"
          spacing={4}
          className="w-full justify-center my-8"
        >
          <Box className="flex justify-center my-2 lg:py-8">
            <Box className="flex  items-center">
              <Box className="w-16 md:w-24 h-[2px] bg-pink-500"></Box>
              <Box className="bg-gradient-to-r from-pink-500 to-violet-600 text-white w-fi p-2 px-5 text-xl rounded-md">
                About Me
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-violet-600"></Box>
            </Box>
          </Box>
        </Stack>
        <Box className="my-4 flex flex-col sm:flex-row gap-4 items-center">
          <Box className="w-full md:w-6/12">
            <p className="text-slate-300 p-tag">
              <strong className="text-slate-100">Full stack</strong> web
              developer with 8+ years of experience With a passion for creating{" "}
              <strong className="text-slate-100">Secure</strong>, accessible,
              and user-friendly web applications. I am always looking for new
              <strong className="text-slate-100"> challenges</strong> and
              <strong className="text-slate-100"> opportunities </strong>
              to expand my knowledge and skills.
            </p>
            <p className="text-slate-300 p-tag">
              I have made a significant contribution to the development various
              web applications as well as{" "}
              <strong className="text-slate-100">
                performance optimization
              </strong>{" "}
              to handle <strong className="text-slate-100"> 2x users</strong>{" "}
              with same resources.
            </p>
            <p className="text-slate-300 p-tag">
              While development i focus on{" "}
              <strong className="text-slate-100">clean, reusalbe </strong> and
              performance optimized code.
            </p>
          </Box>
          <Box className="w-full md:w-6/12 flex flex-col md:flex-row justify-around">
            <Box>
              <Stack className="flex mx-2 mb-6">
                <h3 className="left-heading-sm">
                  <AssignmentIndIcon /> Project
                </h3>
                <p className="ml-3 text-slate-300">60+ live</p>
              </Stack>
              <Stack className="flex mx-2 mb-6">
                <h3 className="left-heading-sm">
                  <WorkHistoryIcon /> Experience
                </h3>
                <p className="ml-3 text-slate-300">8+ years</p>
              </Stack>
            </Box>
            <Box>
              <Stack className="flex mx-2 mb-6">
                <h3 className="left-heading-sm">
                  <LocationOnIcon /> Location
                </h3>
                <p className="ml-3 text-slate-300">Bharat (India)</p>
              </Stack>
              <Stack className="flex mx-2 mb-6">
                <h3 className="left-heading-sm">
                  <WorkOutlineIcon /> Employment
                </h3>
                <p className="ml-3 text-slate-300">Available</p>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
