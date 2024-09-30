import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import './styles/app.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="home-page">
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
