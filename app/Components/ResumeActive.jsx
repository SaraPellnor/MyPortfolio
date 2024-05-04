import CV from "../Assets/cv.png";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";

const ResumeActive = () => {
  return (
    <div className=" relative max-h-screen h-full w-full flex justify-center items-center p-5 pt-10">
      <Image
        className=" py-10 px-3 w-auto max-h-screen min-w-[283px] scale-110"
        src={CV}
        alt="CV"
      />
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
