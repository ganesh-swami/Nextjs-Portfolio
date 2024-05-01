import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/system";
import Image from "next/image";

export default function Contact() {
  const year = new Date().getFullYear();
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
                Get In Touch
              </Box>
              <Box className="w-16 md:w-24 h-[2px] bg-[#5b21b6]"></Box>
            </Box>
          </Box>
        </Stack>
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-indigo-500">info@avinyaweb.com</a>
                  <br></br>
                  <span className="inline-flex mt-2">
                    <a
                      href="https://github.com/ganesh-swami"
                      className="text-gray-500"
                    >
                      <Image
                        src={"Github.svg"}
                        alt={"Github Profile"}
                        className="size-6 md:size-8"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a className="ml-4 text-gray-500">
                      <Image
                        src={"Linkedin.svg"}
                        alt={"Linkedin Profile"}
                        className="size-6 md:size-8"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a className="ml-4 text-gray-500"></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container px-1 py-24 mx-auto">
            <div className="p-2 flex w-full pt-8 mt-8 text-center">
              Made With {"  "}
              <Image
                src={"faceheart.svg"}
                alt={"Made with love"}
                className="pl-1"
                width={12}
                height={12}
              />
              {"   "}, Developed and maintained by me at {"  "}
              <a href="https://avinyaweb.com" className="text-blue pl-1">
                avinyaweb
              </a>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
