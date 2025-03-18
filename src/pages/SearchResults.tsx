import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const API_KEY = "8eceec4eeb456eb8e470f34c3ff02d5a";  
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError("");

      axios.get(`${BASE_URL}?api_key=${API_KEY}&query=${query}`)
        .then((response) => {
          console.log("API Response:", response.data); // Debug API response
          if (response.data.results) {
            setMovies(response.data.results);
          } else {
            setMovies([]);
          }
        })
        .catch((err) => {
          console.error("Error fetching search results:", err);
          setError("Failed to fetch search results. Please try again.");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Search Results for "{query}"</h2>

      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && movies.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="border p-2 rounded">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
              className="w-full h-auto rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
