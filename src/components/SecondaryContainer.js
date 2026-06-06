import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movies);

  if (!nowPlayingMovies) return;

  return (
    <div className="relative py-6 -mt-72 z-10">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Top Rated"} movies={topRatedMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
