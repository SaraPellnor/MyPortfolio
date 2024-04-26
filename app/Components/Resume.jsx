import { useState } from "react";
import PropTypes from "prop-types";
import ResumeActive from "./ResumeActive";
import { IoClose } from "react-icons/io5";

const Resume = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);
  const customStyle = () => {
    return hoverd == "3"
      ? "w-[30%] h-[70%]"
      : hoverd == "2"
      ? "w-[50%] h-[50%]"
      : hoverd == "4"
      ? "w-[50%] h-[70%]"
      : hoverd == "5"
      ? "w-[30%] h-[70%]"
      : hoverd == "1"
      ? "w-[70%] h-[30%]"
      : "w-[40%] h-[60%]";
  };

  const activeStyle = () => {
    return active
      ? "w-full h-full z-20"
      : "hover:text-7xl hover:bg-[#f9e864]";
  };
  return (
    <div
      onClick={() => !active && setActive(true)}
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("4")}
      className={`flex flex-col items-center justify-center border-solid border-[2px] border-black hover:z-20 transition-all duration-500 ease-in-out bg-white absolute bottom-0 left-0 ${customStyle()} ${activeStyle()}`}
    >
      {active ? (
        <div className="h-full w-full flex flex-col justify-between">
          <ResumeActive />

          <div className="absolute bottom-0 w-full flex justify-start">
            <IoClose
              className="hover:scale-125 duration-500"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      ) : (
        <p
          className={` p-6 ${
            hoverd == "3" || hoverd == "5"
              ? "-rotate-90 lg:rotate-0"
              : hoverd == "1"
              ? "md:rotate-0 rotate-0"
              : "md:rotate-0 -rotate-90 "
          }`}
        >
          {content}
        </p>
      )}
    </div>
  );
};
Resume.propTypes = {
  content: PropTypes.string.isRequired,
  hoverd: PropTypes.string.isRequired,
  setHoverd: PropTypes.func.isRequired,
};

export default Resume;
