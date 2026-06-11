import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import genAI from "../utils/gemini-ai";
import { useRef, useState } from "react";
import { addGPTMovieResult } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const searchText = useRef("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPTSearch = async () => {
    try {
      setError("");
      setLoading(true);
      if (!searchText.current.value.trim()) {
        setError("Please enter a movie preference.");
        return;
      }

      const getQuery = `Act as a strict movie recommendation API for a Netflix clone.
    User query: "${searchText.current.value}"
    Return:
      - Exactly 5 movie titles
      - Only comma-separated values
      - No numbering, no explanations, no extra characters

      Strict output format:
      Movie1,Movie2,Movie3,Movie4,Movie5`;

      const model = genAI.getGenerativeModel({
        model: "gemini-3.5-flash",
      });

      const result = await model.generateContent(getQuery);
      const response = await result.response;
      const text = response.text();

      if (!text) {
        setError("No recommendations found. Try another search.");
        return;
      }

      const gptMovies = text?.split(",");

      const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults);

      dispatch(
        addGPTMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error(error);

      if (error?.status === 503) {
        setError(
          "Our recommendation service is experiencing high demand. Please try again in a few moments.",
        );
      } else {
        setError(
          "Something went wrong while fetching recommendations. Please try again.",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-[30%] md:mt-[7.5%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-75 w-[90%] md:w-[60%] p-2 rounded relative z-20"
      >
        <div className="flex gap-2">
          <input
            ref={searchText}
            className="w-[70%] md:w-[80%] px-2 py-1 md:px-4 md:py-2 rounded placeholder:text-xs md:placeholder:text-base"
            type="text"
            placeholder="What would you like to watch today?"
            disabled={loading}
            readOnly={loading}
          />
          <button
            className={`text-white font-semibold w-[30%] md:w-[20%] px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base ${loading ? "bg-red-400 cursor-not-allowed" : "bg-red-600"}`}
            disabled={loading}
            onClick={handleGPTSearch}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-red-500 font-semibold text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default GPTSearchBar;
