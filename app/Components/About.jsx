"use client"
import { useState } from "react";
import PropTypes from "prop-types";
import AboutActive from "./AboutActive";
import { IoClose } from "react-icons/io5";

const About = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);
  const customStyle = () => {
    return hoverd === "3"
      ? "w-[50%] h-[30%]"
      : hoverd == "2"
      ? "w-[70%] h-[50%]"
      : hoverd == "4"
      ? "w-[70%] h-[30%]"
      : hoverd == "5"
      ? "w-[50%] h-[30%]"
      : hoverd == "1"
      ? "w-[30%] h-[70%]"
      : "w-[60%] h-[40%]";
  };

  const activeStyle = () => {
    return active
      ? "w-full h-full z-20 bg-[#f9e864]"
      : "hover:sm:text-8xl hover:text-6xl bg-white hover:bg-[#f9e864]";
  };
  return (
    <div
      onClick={() => !active && setActive(true)}
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("2")}
      className={`flex flex-col items-center justify-center border-solid border-[2px] border-black hover:z-20 transition-all duration-500 ease-in-out ${customStyle()} ${activeStyle()}`}
    >
      {active ? (
        <div className="h-full w-full flex flex-col justify-between">
          <div className="w-full flex justify-start">
            <IoClose
              className="hover:scale-125 duration-500"
              onClick={() => setActive(false)}
            />
          </div>
          <AboutActive />
        </div>
      ) : (
        <p
        className={` p-6 ${
          hoverd == "1"
            ? "-rotate-90 lg:rotate-0"
            : "md:rotate-0 "
        }`}
      >
        {content}
      </p>
      )}
      {hoverd == "2" && !active ? (
        <div className="text-black text-3xl transition-all duration-500 ease-in-out">
          .theDeveloper
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
About.propTypes = {
  content: PropTypes.string.isRequired,
  hoverd: PropTypes.string.isRequired,
  setHoverd: PropTypes.func.isRequired,
};

export default About;
