import { useState } from "react";
import PropTypes from "prop-types";
import CompassActive from "./CompassActive";
import { FaRegWindowClose } from "react-icons/fa";

const Compass = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);

  const customStyle = () => {
    return hoverd === "3"
      ? "top-[40%] bottom-[40%] right-[50%] left-[30%]"
      : hoverd === "2"
      ? "top-[50%] bottom-[30%] right-[30%] left-[50%]"
      : hoverd === "4"
      ? "top-[40%] bottom-[40%] right-[30%] left-[50%]"
      : hoverd === "5"
      ? "top-[30%] bottom-[50%] right-[50%] left-[30%]"
      : "top-[40%] bottom-[40%] right-[40%] left-[40%]";
  };

  const activeStyle = () => {
    return active
      ? " bg-black hover:static static top-[0%] left-[0%] right-[0%] bottom-[0%] rotate-0 hover:rotate-0 w-full h-full z-20"
      : "absolute z-10 hover:scale-150";
  };

  return (
    <div
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("1")}
      onClick={() => !active && setActive(true)}
      className={`flex justify-center items-center hover:z-20 text-[100%] text-[#f9e864] transition-all duration-500 ease-in-out ${customStyle()} ${activeStyle()}`}
    >
      {active ? (
        <div className="h-full w-full flex flex-col justify-between">
          {" "}
          <div className="absolute text-white pr-3 pt-1 pb-4 z-20 w-full flex justify-end">
            <FaRegWindowClose
              className="hover:scale-125 duration-500"
              onClick={() => setActive(false)}
            />
          </div>
          <CompassActive />{" "}
        </div>
      ) : hoverd ? (
        <div
          className={`transition-all duration-500 ease-in-out ${
            hoverd === "3"
              ? "rotate-180"
              : hoverd === "2"
              ? "rotate-90"
              : hoverd === "4"
              ? "-rotate-180"
              : hoverd === "5"
              ? "-rotate-90"
              : "hover:rotate-45 hover:scale-125"
          }`}
        >
          {content}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

Compass.propTypes = {
  content: PropTypes.element.isRequired,
  hoverd: PropTypes.string.isRequired,
  setHoverd: PropTypes.func.isRequired,
};

export default Compass;
