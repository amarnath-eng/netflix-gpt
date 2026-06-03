import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
  },
});

export default appStore;
