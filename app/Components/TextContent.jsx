import { useState } from "react";
const TextContent = () => {
    const [hide, setHide] = useState(true);

    return (
        <div
        onMouseEnter={() => setHide(false)}
        onMouseLeave={() => setHide(true)}

          className={`h-full w-full flex justify-center items-center bg-white transition-opacity duration-2000 ease-in-out ${
            hide ? "opacity-0" : "opacity-100"
          }`}
        >
          This .
        </div>
    );
}

export default TextContent