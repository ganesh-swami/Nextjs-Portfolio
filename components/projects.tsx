import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import Image from "next/image";

export default function Projects() {
  return (
    <Grid container xs={12} id="skill" className="justify-center pt-4 pb-20">
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
                Portfolio
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
            </Box>
          </Box>
        </Stack>
        <Box className="w-full mx-auto">
          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
            <div className="lg:w-[50%] xs:w-full">
              <Image
                src={"/img/Video-Confrencing.png"}
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                alt="Video confrencing project"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Video Confrencing
              </h2>
              <p className="text-md mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore placeat assumenda nam veritatis, magni doloremque
                pariatur quos fugit ipsa id voluptatibus deleniti officiis cum
                ratione eligendi sed necessitatibus aliquam error laborum
                delectus quaerat. Delectus hic error eligendi sed repellat natus
                fuga nobis tempora possimus ullam!
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
            <div className="md:hidden sm:block xs:block xs:w-full">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/img/online-classes-min.webp"
                alt="billboard image"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Virtual Teaching
              </h2>

              <p className="text-md mt-4">
                Virtual Teaching is a plateform developed using NodeJS, ReactJS,
                MeteorJS, JavaScript, TypeScript, WebRTC,CSS & Saas, MongoDB,
                MySQL and Redis etc. Main Purpose of this project was to teach
                the students in realtime with the functionality like
                screensharing, audio, Video and some user student interection
                features.
              </p>
            </div>
            <div className="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
              <Image
                className="lg:rounded-t-lg xs:rounded-sm"
                src="/img/online-classes-min.webp"
                alt="Online teaching classes"
                width={500}
                height={500}
              />
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
