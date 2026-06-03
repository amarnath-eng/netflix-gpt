import React from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-screen aspect-video pt-60 pl-12 text-white absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="mt-4 w-[40%]">{overview}</p>
      <div className="mt-4 flex gap-2">
        <button className="bg-white text-black px-4 py-2 rounded flex gap-2 items-center hover:bg-opacity-90">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded bg-opacity-80 flex gap-2 items-center">
          <FaInfoCircle />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
