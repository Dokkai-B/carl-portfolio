"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full-Stack Project",
    title: "Womens Club",
    description: "The Women's Club web application streamlines member, event, and donation management. The platform enables efficient communication, transparent activity tracking, and resource management. Key features include member registration, event coordination, and donation tracking. Built with React, Chakra UI, Figma, and Firebase, and deployed on Vercel, it ensures a clean interface, secure data, and reliable performance.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "https://womensclub.vercel.app/",
    github: "https://github.com/Dokkai-B/womens-club",
  },
  {
    num: "02",
    category: "Full-Stack Project",
    title: "SaveEat",
    description: "SaveEat is a mobile app that combines nutrition tracking with budget management, helping users make healthy dietary choices within financial limits. It features personalized meal plans, real-time spending and nutrition insights, and a user-friendly interface for logging meals and expenses. Developed with React Native, Android Studio, Firebase, and JavaScript, SaveEat scored 69.25 on the System Usability Scale (SUS), reflecting good usability with room for improvement",
    stack: [{ name: "Firebase" }, { name: "JavaScript" }, { name: "React Native" }],
    image: "/assets/work/thumb2.png",
    live: "/assets/research/SaveEat.pdf",
    github: "https://github.com/Dokkai-B/saveeat",
  },
  {
    num: "03",
    category: "Full-Stack Project",
    title: "Heart to Art",
    description: "Heart to Art is a mobile app that connects artists with clients, offering a platform to showcase art and manage commissions. It features an artist directory, commission requests, and a messaging system. Built with React Native and Firebase, the app provides a user-friendly experience, secure data, and real-time updates, enhancing visibility and opportunities for artists.",
    stack: [{ name: "React Native" }, { name: "Expo" }, { name: "Firebase" }],
    image: "/assets/work/thumb3.png",
    live: "/assets/research/HearttoArt.pdf",
    github: "https://github.com/vladasblood/SE_HeartToArt",
  },
  {
    num: "04",
    category: "Full-Stack Project",
    title: "Lost Paws",
    description: "LostPaws is a web platform that helps reunite lost pets with their owners and facilitates adoptions. Owners can post missing pet details, while finders report strays to partnered facilities. Unclaimed pets are listed for adoption, relying on community efforts and partnerships to care for the animals until they are reunited or adopted.",
    stack: [{ name: "PHP" }, { name: "MySQL" }],
    image: "/assets/work/thumb4.png",
    live: "/assets/research/LostPaws.pdf",
    github: "https://github.com/vladasblood/LostPaws",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get the current slide index
    const currentIndex = swiper.activeIndex;
    // Update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                {/* Live project button */}
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                {/* Github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div></div>
                      {/* Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;