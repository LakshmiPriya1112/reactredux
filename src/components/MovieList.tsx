import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTrendingMovies } from "../store/movieSlice";
import { RootState, AppDispatch } from "../store/store";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { popularMovies, trendingMovies, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="grid">
        {popularMovies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
        ))}
      </div>

      <h2>Trending Movies</h2>
      <div className="grid">
        {trendingMovies.map(movie => (
          <MovieCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
