import { styles } from "../global";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ComputersCanvas from "../canvas/Computers";
import { linkedin, githubs, instagram } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sikandar Chauhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            Full Stack Developer
            <Typewriter
              options={{
                strings: ["Web App Developer", "MERN Stack", "MEAN Stack"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
          <div className={`flex my-6 items-center gap-8`}>
            {/* <a
          href="https://robinmahto.hashnode.dev/"
          target="blank"
          title="hashnode"
          className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full"
        >
          <img src={hashnode} alt="hashnode" />
        </a> */}
            <a
              href="https://www.linkedin.com/in/sikandar-chauhan/"
              target="blank"
              title="linkedin"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="cursor-pointer text-white"
              />
            </a>
            <a
              href="https://github.com/thisissikandar"
              target="blank"
              title="github"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary  p-2 rounded-full"
            >
              <img src={githubs} alt="githubs" />
            </a>
            <a
              href="https://www.instagram.com/thisissikandar/"
              target="blank"
              title="instagram"
              className="bg-[#915EFF] ease-in duration-200 hover:bg-tertiary p-2 rounded-full"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
