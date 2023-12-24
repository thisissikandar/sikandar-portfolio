import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../global";


const SkillsCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[150px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-md font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <div id="skills">
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have Learn so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technical Skills.
        </h2>
      </motion.div>

     <div className="mt-20 mx-10 xs:mx-0 flex items-center justify-center flex-wrap gap-10">
        {skills.map((service, index) => (
          <SkillsCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default Skills