import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./movieSlice";
import GPTSliceReducer from "./GPTSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    GPT: GPTSliceReducer,
  },
});

export default appStore;
