import { useState } from "react";
import { GiCompass } from "react-icons/gi";
import Compass from "./Compass";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Connect from "./Connect";
const Home = () => {

  const [hoverd, setHoverd] = useState("");
  const hasWindow = typeof window !== "undefined";
console.log(hasWindow);
  const screenHeight = hasWindow ? window.innerHeight : window.innerHeight
  
  return (
    <div style={{ height: `${screenHeight}px` }} className={`flex flex-wrap w-full md:h-[100vh] font-400 font-josefin-sans md:text-6xl text-4xl border-solid border-[2px] border-black bg-black relative cursor-pointer`}>
      <Compass setHoverd={setHoverd} hoverd={hoverd} content={<GiCompass />} />
      <About setHoverd={setHoverd} hoverd={hoverd} content={"About"} />
      <Projects setHoverd={setHoverd} hoverd={hoverd} content={"Projects"} />
      <Resume setHoverd={setHoverd} hoverd={hoverd} content={"Resume"} />
      <Connect setHoverd={setHoverd} hoverd={hoverd} content={"Connect"} />
    </div>
  );
};

export default Home;
