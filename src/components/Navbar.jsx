import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../global";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleResume = () => {
    const resumeUrl = "https://rxresu.me/sikandarc989/sikandar-kr-chauhan";
    window.open(resumeUrl);
  };
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="./logo.png"
            alt="logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`${
              active ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <button onClick={toggleResume}>Resume</button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-row justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((toggle) => !toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-tertiary	 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col items-start justify-end flex-1 gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle((toggle) => !toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
               className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active ? "text-white" : "text-secondary"
              }`}
              >
                <button onClick={toggleResume}>Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
