import Image from "next/image";
import jsonData from "../../data.json";

const ProjectsActive = () => {
  const data = jsonData.data;

  return (
    <div className=" overflow-hidden text-pink-300 overflow-y-scroll scrollbar-track-gray-200 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-600 text-sm w-full py-3 duration-500">
      <div className="w-full flex flex-col items-center ">
        {data.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center min-w-[245px] md:w-5/6 m-3 hover:scale-110 duration-500"
            onClick={() => window.open(item.link, "_blank")}
            key={index}
          >
            <h1>{item.projectName}</h1>
            <Image width={500} height={400} alt="pic" src={item.image} />
            <p>{item.programingLanguages}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsActive;
