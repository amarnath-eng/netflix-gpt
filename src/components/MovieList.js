import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  return (
    <div className="pl-12 pr-3">
      <h1 className="text-white text-3xl py-2">{title}</h1>
      <div className="overflow-x-auto hide-scrollbar scroll-smooth py-4">
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
