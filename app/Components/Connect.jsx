import { useState } from "react";
import PropTypes from "prop-types";
import { RiLinkedinLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import ConnectActive from "./ConnectActive";
import { IoClose } from "react-icons/io5";

const Connect = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);
  const customStyle = () => {
    return hoverd === "3"
      ? "w-[70%] h-[30%]"
      : hoverd == "2"
      ? "w-[50%] h-[30%]"
      : hoverd == "4"
      ? "w-[50%] h-[30%]"
      : hoverd == "5"
      ? "w-[70%] h-[50%]"
      : hoverd == "1"
      ? "w-[30%] h-[70%]"
      : "w-[60%] h-[40%]";
  };

  const activeStyle = () => {
    return active
      ? "w-full h-full z-20"
      : "hover:sm:text-7xl hover:text-6xl hover:font-bold text-4xl md:text-6xl hover:text-purple-500";
  };
  return (
    <div
    onClick={() => !active && setActive(true)}
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("5")}
      className={`flex flex-col absolute bottom-0 right-0 items-center justify-center text-center gap-3 border-solid border-[2px] border-black hover:z-20 bg-white hover:bg-purple-200 transition-all duration-500 ease-in-out ${customStyle()} ${activeStyle()}`}
    >
      {active ? (
        <div className="h-full w-full flex flex-col justify-between">
          <ConnectActive />

          <div className="absolute bottom-0 w-full flex justify-end">
            <IoClose
              className="hover:scale-125 duration-500"
              onClick={() => setActive(false)}
            />
          </div>
        </div>
      ) : (
         <p
        className={` p-6 ${
          hoverd == "1"
            ? "rotate-90 lg:rotate-0"
            : "md:rotate-0 "
        }`}
      >
        {content}
      </p>
      )}
      {hoverd == "5" && !active ? (
        <div className="text-black text-5xl flex justify-center gap-2">
          <RiLinkedinLine className="hover:text-purple-500" />
          <FiGithub className="hover:text-purple-500" />
          <MdOutlineAlternateEmail className="hover:text-purple-500" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
Connect.propTypes = {
  content: PropTypes.string.isRequired,
  hoverd: PropTypes.string.isRequired,
  setHoverd: PropTypes.func.isRequired,
};

export default Connect;
