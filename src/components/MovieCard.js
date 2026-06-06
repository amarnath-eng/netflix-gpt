import { CDN_IMAGE_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] shrink-0 transition-transform duration-300 hover:scale-110 hover:z-10 hover:cursor-pointer">
      <img
        className="rounded-lg"
        src={CDN_IMAGE_URL + posterPath}
        alt="movie-preview"
      />
    </div>
  );
};

export default MovieCard;
