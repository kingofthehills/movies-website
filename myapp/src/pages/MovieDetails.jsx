import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MovieDetailsSkeleton from '../components/MovieDetailsSkeleton.jsx'

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      setErrorMessage('');

      try {
        const response = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTIONS);

        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.error(`Error fetching movie details: ${error}`);
        setErrorMessage('Error fetching movie details. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return <MovieDetailsSkeleton />
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>
  }

  if (!movie) {
    return null;
  }

  const {
    title, tagline, overview, poster_path, backdrop_path, vote_average,
    release_date, runtime, genres, original_language, vote_count
  } = movie;

  return (
    <div className="movie-details">
      <Link to="/" className="back-link">&larr; Back to movies</Link>

      {backdrop_path && (
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
          alt=""
        />
      )}

      <div className="details-content">
        <img
          className="poster"
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png'}
          alt={title}
        />

        <div className="info">
          <h1>{title}</h1>
          {tagline && <p className="tagline">{tagline}</p>}

          <div className="content">
            <div className="rating">
              <img src="/star.svg" alt="Star Icon" />
              <p>{vote_average ? vote_average.toFixed(1) : 'N/A'} <span>({vote_count} votes)</span></p>
            </div>

            <span>&bull;</span>
            <p className="lang">{original_language}</p>

            <span>&bull;</span>
            <p className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</p>

            {runtime > 0 && (
              <>
                <span>&bull;</span>
                <p className="runtime">{Math.floor(runtime / 60)}h {runtime % 60}m</p>
              </>
            )}
          </div>

          {genres && genres.length > 0 && (
            <ul className="genres">
              {genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}

          <h2>Overview</h2>
          <p className="overview">{overview || 'No overview available.'}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
