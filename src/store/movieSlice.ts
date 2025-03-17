import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPopularMovies, getTrendingMovies } from "../api";

interface MovieState {
  popularMovies: any[];
  trendingMovies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  popularMovies: [],
  trendingMovies: [],
  loading: false,
  error: null,
};

// Async actions
export const fetchPopularMovies = createAsyncThunk("movies/fetchPopular", getPopularMovies);
export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrending", getTrendingMovies);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => { state.loading = true; })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch popular movies.";
      })
      .addCase(fetchTrendingMovies.pending, (state) => { state.loading = true; })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch trending movies.";
      });
  }
});

export default movieSlice.reducer;
