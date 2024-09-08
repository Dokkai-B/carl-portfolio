import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { Anchor } from "@/components/ui/anchor"; // Import the custom Anchor component

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Aspiring Full-Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Carl Patrick Adrian Aguas</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in developing user-friendly digital solutions and have a strong command of multiple programming languages and frameworks.
            </p>
            {/* Button and Socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Anchor
                href="/assets/cv/Carl_Aguas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" // Use the variant you want
                size="lg" // Use the size you want
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Anchor>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
