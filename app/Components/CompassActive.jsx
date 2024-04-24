import { useState } from "react";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaExclamation } from "react-icons/fa";

const CompassActive = () => {
  const [display, setDisplay] = useState("");

  return (
    <div className="md:relative flex flex-col items-center gap-2 p-3 w-full h-full text-black">
      <div
        onMouseEnter={() => setDisplay("1")}
        onMouseLeave={() => setDisplay("")}
        className="md:absolute top-4 left-4 flex flex-col gap-3 justify-center items-center rounded-lg md:h-2/5 md:w-2/5 w-full h-1/4 bg-purple-400 hover:h-[45%] hover:w-full md:hover:w-[45%] duration-500 text-center p-3"
      >
        <h3>Curious</h3>{" "}
        {display == "1" ? (
          <p className="text-sm">
            Fuelled by curiosity, I thrive on exploring new ideas and pushing
            boundaries. Constantly seeking to learn and grow in every endeavor.
          </p>
        ) : (
          <AiOutlineSecurityScan />
        )}
      </div>
      <div
        onMouseEnter={() => setDisplay("2")}
        onMouseLeave={() => setDisplay("")}
        className="md:absolute top-4 right-4 flex flex-col gap-3 justify-center items-center rounded-lg md:h-2/5 md:w-2/5 h-2/5 w-full bg-orange-300 hover:h-[45%] hover:w-full md:hover:w-[45%] duration-500 text-center p-3 order-1"
      >
        {" "}
        <h3>Creative</h3>{" "}
        {display == "2" ? (
          <p className="text-sm">
            Innovative thinker with a knack for crafting unique solutions. Blend
            creativity with technical expertise to surpass expectations.
          </p>
        ) : (
          <FaPaintBrush />
        )}
      </div>
      <div
        onMouseEnter={() => setDisplay("3")}
        onMouseLeave={() => setDisplay("")}
        className="md:absolute bottom-4 left-4 flex flex-col gap-3 justify-center items-center rounded-lg md:h-2/5 md:w-2/5 w-full h-1/4 bg-orange-300 hover:h-[45%] hover:w-full md:hover:w-[45%] duration-500 text-center p-3"
      >
        {" "}
        <h3>Positive</h3>{" "}
        {display == "3" ? (
          <p className="text-sm">
            Radiate positivity in every challenge, fostering a supportive
            environment. Thrive on uplifting others and embracing optimism.
          </p>
        ) : (
          <BiSolidHappyHeartEyes />
        )}
      </div>
      <div
        onMouseEnter={() => setDisplay("4")}
        onMouseLeave={() => setDisplay("")}
        className="md:absolute bottom-4 right-4 flex flex-col gap-3 justify-center items-center rounded-lg md:h-2/5 md:w-2/5 w-full h-1/4 bg-purple-400 hover:h-[45%] hover:w-full md:hover:w-[45%] duration-500 text-center p-3"
      >
        {" "}
        <h3>Problem Solver</h3>{" "}
        {display == "4" ? (
          <p className="text-sm">
            Versatile problem-solver adept at tackling coding challenges with
            creativity and precision. Eager to apply skills in dynamic work
            environments.
          </p>
        ) : (
          <FaExclamation />
        )}
      </div>
    </div>
  );
};

export default CompassActive;
