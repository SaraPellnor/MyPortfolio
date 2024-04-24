import CV from "../assets/cv.png"
import Image from "next/image"
const ResumeActive = () => {
  return (
    <div className=" relative flex justify-center items-center">
            <Image className="h-full w-auto scale-110" src={CV} alt="CV" />
            <a className="absolute right-0 top-0 text-sm p-3 hover:scale-110 duration-500" href={CV} download> Download Resume </a>


    </div>
  )
}

export default ResumeActive