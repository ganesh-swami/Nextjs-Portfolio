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
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                src={"/img/Video-Confrencing-WebRTC.svg"}
                className="w-full rounded-sm lg:rounded-t-lg"
                alt="Video confrencing project"
                width={500}
                height={350}
              />
            </div>
            <div className="w-full md:w-[50%] bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Video Confrencing
              </h2>
              <p className="text-md mt-4">
                This browser based video confrencing app have features like
                Audio, Video, Polls, LiveStreaming, Whiteboard, Breakout Room,
                RealTime Chat, different layout. I have worked on WebRtc Related
                audio and video streaming and authentication & authorization,
                Kurento and mediasoup integration, Optimization to handle 2x
                users with same resources.
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row-reverse lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/img/online-classes-min.webp"
                alt="billboard image"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-[50%] bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Virtual Teaching
              </h2>

              <p className="text-md mt-4">
                Virtual Teaching is a plateform developed using NodeJS, ReactJS,
                MeteorJS, JavaScript, TypeScript, WebRTC,CSS & Saas, MongoDB,
                MySQL and Redis etc. Main Purpose of this project was to teach
                the students in realtime with the functionality like
                screensharing, audio, Video, WhiteBoard, Polls, Que & Ans and
                some other student interection features.
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                src={"/img/ecommerce-ReactJS.png"}
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                alt="Video confrencing project"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Ecommerce
              </h2>
              <p className="text-md mt-4">
                Ecommerce plateform Development using NextJS, NodeJs, ReactJS,
                TypeScript, MongoDB, RazorPAY payment and Admin Panel to add or
                update the listed products. Features includes like products,
                variants, pages & categories, review, order, cart, upsell,
                profile, order tracking and cancellation. Implemented caching
                using redis db for most visited products and pages.
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row-reverse lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/img/Node-React-Social-Media.webp"
                alt="ReactJS Ecommerce Project"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Gammers Social Media
              </h2>

              <p className="text-md mt-4">
                Being the co-founder of social media i have worked on every
                aspect of the project including project architecture, Marketing,
                Privacy Policy, Security and UI/UX consideration. It uses
                NodeJS, ReactJS, JavaScript, BootStrap, MongoDB, MySQL, Redis,
                Socket.io and Git etc. Features include freinds, following,
                content sharing, swipe like, groups, chats, communities etc
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                src={"/img/WebRTC - Meetings.webp"}
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                alt="Video confrencing project"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] sm:w-full xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                WebRtc - Zoom/Meet alternative
              </h2>
              <p className="text-md mt-4">
                WebRtc Based video confrencing web application including
                features like Webinar, liveStreaming, Recording, Scalling using
                cluster, Including authentication and authorization control and
                branding whitelabeling. It is using Webrtc, Socket.io,
                multi-forward unit, Mediasoup, redis, NodeJs, Meteor, ReactJS,
                Typescript, MongoDB, MySQL, Ruby On Rails technology stacks.
              </p>
            </div>
          </div>
          <div className="xl:w-[80%] md:w-[85%] mx-auto flex flex-col md:flex-row-reverse lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-8 mb-8">
            <div className="w-full md:w-[50%]">
              <Image
                className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
                src="/img/topical.webp"
                alt="ReactJS Ecommerce Project"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-400 px-2 py-4 md:p-4 rounded-md">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                Topical Map
              </h2>

              <p className="text-md mt-4">
                Topical Map is a web application to generate the topical map of
                internal linking for a pillar content including seo matrices,
                keywords, outer links and pagelink data. It is developed using
                NodeJS, NextJS, ReactJS, JavaScript, TypeScript, MongoDB, Redis,
                Socket.io, Beautifulsoup. We have used Beautifulsoup for website
                scrap and crawling for generating the whole topical map.
              </p>
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
