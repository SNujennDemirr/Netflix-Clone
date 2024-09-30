import axios from 'axios';


const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const API_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data.results; // Popüler filmleri döndür
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data; // Film detaylarını döndür
  } catch (error) {
    console.error(`Error fetching details for movie ID ${movieId}:`, error);
    throw error;
  }
};
