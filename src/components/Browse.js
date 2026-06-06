import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch Data from TMDB API and Update the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black">
      <Header />
      {/*
      MainContainer
        - videoBackground
        - videoTitle
      SecondaryContainer
        - MoviesList * n
          - cards * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
