import React from "react";
import { motion } from "framer-motion";

import { styles } from "../global";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { about_avatar } from "../assets";
 
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
         <img src={about_avatar} alt="about_avatar" className="w-96 h-96" />
      </div>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React.js, Redux.js, and
          Node.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
