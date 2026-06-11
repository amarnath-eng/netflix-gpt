import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.GPT);

  if (!movieNames) return null;

  return (
    <div className="text-white flex justify-center">
      <div className="bg-black bg-opacity-90 w-[95%] rounded-lg mb-4 py-2">
        {movieNames?.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
