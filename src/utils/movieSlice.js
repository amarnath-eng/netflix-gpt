import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trailerKey: null,
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerkey: (state, action) => {
      state.trailerKey = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerkey } = moviesSlice.actions;

export default moviesSlice.reducer;
