"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaJava, FaPython, FaPhp, FaWindows, FaAndroid, FaDatabase } from 'react-icons/fa';

import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMysql, SiCplusplus, SiCsharp, SiCanva, SiExpo } from 'react-icons/si';

// About data
const about = {
  title: "About Me",
  description: "I am Carl Patrick Adrian Aguas, an aspiring developer with a passion for creating innovative digital solutions. With over a year of experience, I have developed strong skills in both front-end and back-end development, complemented by my ability to communicate effectively in both English and Filipino. Currently available for freelance opportunities, I am eager to bring my creativity and technical expertise to new challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Carl Patrick Adrian Aguas",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 920 802 3514)",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email",
      fieldValue: "cpacaguas@mymail.mapua.edu.ph",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino",
    },
  ]
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "As an aspiring Full-Stack Developer and experienced Graphic Designer, I have developed a range of skills through various projects and freelance roles. My background includes creating engaging visuals, designing user interfaces, and contributing to web and mobile development projects. I am passionate about combining creativity with technical skills to build impactful digital solutions.",
  items: [
    {
      company: "Women's Club",
      position: "Full-Stack Developer",
      duration: "April 2024 - May 2024",
    },
    {
      company: "JZ Perfumery",
      position: "Freelance Graphic Designer",
      duration: "2021-2023",
    },
    {
      company: "Classic Watch MNL",
      position: "Freelance Logo Designer",
      duration: "February 2022",
    },
    {
      company: "Lufong",
      position: "Freelance Graphic Designer",
      duration: "December 2021 - January 2022",
    },
    {
      company: "Rocket Fuel",
      position: "Freelance Logo Designer",
      duration: "June 2021",
    },
    {
      company: "Next",
      position: "Freelance Video Editor",
      duration: "February 2020 - March 2020",
    },
  ]
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I'm currently pursuing a Bachelor of Science in Computer Science at Mapúa University in Makati, where I am developing strong technical skills in software development, web development, and data management. This program has also helped me strengthen essential soft skills such as communication, teamwork, leadership, critical thinking, and time management, preparing me for a dynamic career in technology.",
  items: [
    {
      institution: "Mapúa University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2021 - Present",
    },
    {
      institution: "Centro Escolar University",
      degree: "Senior Highschool (STEM strand)",
      duration: "2019 - 2021",
    },
    {
      institution: "College of San Benildo-Rizal",
      degree: "Grade 7 to Grade 10",
      duration: "2015 - 2019",
    },
  ]
};

// Skills data
const skills = {
  title: "My Skills",
  description: "I possess a versatile skill set in both front-end and back-end development, utilizing modern frameworks and programming languages. I am also experienced in design tools and have a solid foundation in database management, software development, and mobile app creation.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaWindows />,
      name: "Windows",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaAndroid />,
      name: "Android Studio",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiExpo />,
      name: "Expo",
    },
  ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>
        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {/* Experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">       {experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#243546] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>


          {/* Education */}
          <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">       {education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li key={index} className="bg-[#243546] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/70">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>


          {/* Skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#243546] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>;
                })}
              </ul>
            </div>
          </TabsContent>


          {/* About */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}

export default Resume;