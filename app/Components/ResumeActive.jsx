import CV from "../Assets/cv.png";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

const ResumeActive = () => {
  return (
    <div className=" relative flex justify-center items-center p-5 pt-10">
      <Image className="h-full w-auto min-w-[283px] scale-110" src={CV} alt="CV" />
      <a
        className="absolute right-0 top-0 text-lg text-[#525148] p-3 hover:scale-110 duration-500"
        href={CV.src}
        download
      >
<FaFileDownload />
      </a>
    </div>
  );
};

export default ResumeActive;
