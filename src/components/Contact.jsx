import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../global";
import {
  phone,
  location,
  email,
  linkedin,
  githubs,
  instagram,
} from "../assets";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 mb-3" id="contact">
        <div className="bg-[#915EFF] w-1/3 h-1 hidden xs:block"></div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Contact Me.
          </h2>
        </motion.div>
        <div className="bg-[#915EFF] w-1/3 h-1 hidden xs:block"></div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4">
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={email} alt="email" />
          <p>sikandarc989@gmail.com</p>
        </div>
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={phone} alt="phone" />
          <p>+91 8108595506</p>
        </div>
        <div className="bg-tertiary p-3 flex items-center gap-4 rounded">
          <img src={location} alt="location" />
          <p>Mumbai, Maharashtra 400095</p>
        </div>
      </div>

      <div className={`flex my-6 items-center justify-center gap-8`}>
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
    </>
  );
};

export default Contact;
