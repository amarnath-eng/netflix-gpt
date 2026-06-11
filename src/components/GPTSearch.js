import { BG_IMAGE_URL } from "../utils/constant";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <img
        src={BG_IMAGE_URL}
        alt=""
        aria-hidden="true"
        className="fixed h-[100vh] w-full object-cover object-center"
      />
      <div className="w-full h-full absolute top-0 flex flex-col gap-2">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
