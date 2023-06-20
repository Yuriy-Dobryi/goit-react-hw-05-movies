import { useState, useEffect } from 'react';
import getTopMovies from 'API/getTopMovies';
import MovieLink from '../Movie/Movie';
import { MoviesList } from './TopMovies.styled';

export default function TopMovies() {
  const [movies, setFilms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await getTopMovies();
      setFilms(results);
    }

    getData();
  }, []);

  return (
    <MoviesList>
      {movies.map(({ id, poster_path, title }) => (
        <MovieLink key={id}
          id={id}
          title={title}
          poster_path={poster_path} />
      ))}
    </MoviesList>
  );
}