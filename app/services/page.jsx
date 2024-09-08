"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating responsive websites using HTML, CSS, and JavaScript, along with frameworks like React and Next.js. Focused on delivering user-friendly interfaces for a seamless digital experience across all devices.",
    href: "https://www.linkedin.com/in/carlaguas"
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Developing high-performance apps for iOS and Android with a strong emphasis on user experience, security, and interactive design. Ensuring seamless functionality to meet diverse user needs.",
    href: "https://www.linkedin.com/in/carlaguas"
  },
  {
    num: "03",
    title: "Desktop Development",
    description:
      "Building efficient desktop applications tailored to client needs, compatible with Windows and macOS. Specializing in cross-platform solutions that are secure, responsive, and scalable.",
    href: "https://www.linkedin.com/in/carlaguas"
  },
  {
    num: "04",
    title: "Digital Arts",
    description:
      "Designing captivating digital art using tools like Adobe Creative Suite and Figma. Services include branding, digital illustrations, and UI/UX design, transforming concepts into visually compelling experiences.",
    href: "https://www.linkedin.com/in/carlaguas"
  },

];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;