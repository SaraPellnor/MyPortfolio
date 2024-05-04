import { useState } from "react";
import PropTypes from "prop-types";
import ProjectsActive from "./ProjectsActive";
import { IoClose } from "react-icons/io5";

const Projects = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);
  const customStyle = () => {
    return hoverd == "3"
      ? "w-[50%] h-[70%]"
      : hoverd == "2"
      ? "w-[30%] h-[70%]"
      : hoverd == "4"
      ? "w-[30%] h-[70%]"
      : hoverd == "5"
      ? "w-[50%] h-[50%]"
      : hoverd == "1"
      ? "w-[70%] h-[30%]"
      : "w-[40%] h-[60%]";
  };

  const activeStyle = () => {
    return active
      ? "w-full h-full z-20 bg-black"
      : "hover:gap-2 hover:text-7xl bg-white hover:bg-[#f9e864]";
  };
  return (
    <div
      onClick={() => !active && setActive(true)}
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("3")}
      className={`absolute top-0 right-0 flex flex-col items-center justify-center border-solid border-[2px] border-black hover:z-20 transition-all duration-500 ease-in-out ${customStyle()} ${activeStyle()}`}
    >
      {active ? (
        <div className="h-full w-full flex flex-col justify-between">
          <div className="w-full flex justify-end">
              <IoClose className="hover:scale-125 duration-500"  onClick={() => setActive(false)} />
          </div>
          <ProjectsActive />
        </div>
      ) : (
        <p
          className={` p-4 ${
            hoverd == "2" || hoverd == "4"
              ? " lg:rotate-0 rotate-90"
              : hoverd == "1"
              ? " rotate-0"
              : " md:rotate-0 rotate-90"
          }`}
        >
          {content}
        </p>
      )}
      {hoverd == "3" && !active ? (
        <div className="absolute bottom-1 text-black italic text-center text-xl ">
          Made by Love{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
Projects.propTypes = {
  content: PropTypes.string.isRequired,
  hoverd: PropTypes.string.isRequired,
  setHoverd: PropTypes.func.isRequired,
};

export default Projects;
