import axios from "axios";



const API_KEY = "8eceec4eeb456eb8e470f34c3ff02d5a";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
};
