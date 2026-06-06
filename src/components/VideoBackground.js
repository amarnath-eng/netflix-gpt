import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  const { movieId } = props;
  const { trailerKey } = useSelector((store) => store.movies);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&playsinline=1&rel=0&disablekb=1`}
        title="YouTube video player"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
