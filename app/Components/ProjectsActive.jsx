import Image from "next/image";
import jsonData from "../../data.json";

const ProjectsActive = () => {
  const data = jsonData.data;

  return (
    <div className="flex flex-wrap justify-center  overflow-hidden overflow-y-scroll scrollbar-track-gray-200 scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-600 h-full text-sm p-3 duration-500">
      {data.map((item, index) => (
        <div
          className="flex flex-col justify-center items-center min-w-[245px] gap-3 w-1/3 hover:scale-110 duration-500"
          onClick={() => window.open(item.link, "_blank")}
          key={index}
        >
          <h1>{item.projectName}</h1>
          <Image width={500} height={400} alt="pic" src={item.image} />
          <p>{item.programingLanguages}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsActive;
