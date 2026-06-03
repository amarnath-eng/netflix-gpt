import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Fetch Data from TMDB API and Update the store
  useNowPlayingMovies();

  return (
    <div>
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
