import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerkey } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerKey = useSelector((store) => store.movies.trailerKey);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );

    const { results } = await data.json();
    const trailer =
      results?.find((video) => video.type?.toLowerCase() === "trailer") ??
      results[0];
    console.log("trailer: ", trailer);
    dispatch(addTrailerkey(trailer.key));
  };

  useEffect(() => {
    !trailerKey && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
