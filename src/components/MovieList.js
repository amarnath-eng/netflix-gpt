import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="pl-4 md:pl-6 pr-3">
      <h1 className="text-white text-xl md:text-3xl py-1 md:py-2 font-medium">
        {title}
      </h1>
      <div className="overflow-x-scroll hide-scrollbar scroll-smooth py-2 md:py-4">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
