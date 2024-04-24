import { useState } from "react";
import PropTypes from "prop-types";
import CompassActive from "./CompassActive";
import { FaRegWindowClose } from "react-icons/fa";

const Compass = ({ content, hoverd, setHoverd }) => {
  const [active, setActive] = useState(false);

  const customStyle = () => {
    return hoverd === "3"
      ? "top-[40%] bottom-[40%] right-[50%] left-[30%] rotate-180 text-green-500 text-5xl"
      : hoverd === "2"
      ? "top-[50%] bottom-[30%] right-[30%] left-[50%] rotate-90 text-red-500 text-5xl"
      : hoverd === "4"
      ? "top-[40%] bottom-[40%] right-[30%] left-[50%] -rotate-180 text-yellow-500 text-5xl"
      : hoverd === "5"
      ? "top-[30%] bottom-[50%] right-[50%] left-[30%] -rotate-90 text-purple-500 text-5xl"
      : "top-[40%] bottom-[40%] right-[40%] left-[40%]";
  };

  const activeStyle = () => {
    return active
      ? " bg-black hover:static static top-[0%] left-[0%] right-[0%] bottom-[0%] rotate-0 hover:rotate-0 w-full h-full z-20"
      : "absolute hover:rotate-45 z-10 hover:text-9xl";
  };

  return (
    <div
      onMouseLeave={() => setHoverd("")}
      onMouseEnter={() => setHoverd("1")}
      onClick={() => !active && setActive(true)}
      className={`p-[10px] flex justify-center items-center hover:z-20 text-pink-500 transition-all duration-500 ease-in-out ${customStyle()} ${activeStyle()}`}
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
      ) : (
        content
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
