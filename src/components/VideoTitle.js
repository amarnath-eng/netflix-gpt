import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-full aspect-video pt-28 pl-6 md:pt-56 md:pl-12 text-white absolute bg-gradient-to-r from-black">
      <h1 className="font-bold md:text-4xl text-2xl">{title}</h1>
      <p className="mt-4 w-[40%] md:block hidden">{overview}</p>
      <div className="md:mt-4 mt-2 flex gap-2">
        <button className="bg-white text-black px-3 py-1 md:px-4 md:py-2 rounded flex gap-2 items-center hover:bg-opacity-90">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-600 text-white px-2 py-1 rounded bg-opacity-80 gap-2 items-center md:flex hidden">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
