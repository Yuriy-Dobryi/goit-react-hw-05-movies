import { useState, useEffect } from 'react';
import moviesDatabase from 'API/moviesDatabase';
import Movie from '../Movie/Movie';
import { MoviesList } from './TopMovies.styled';

const TOP_MOVIES_PATH = 'trending/all/day';

export default function TopMovies() {
  const [movies, setFilms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await moviesDatabase(TOP_MOVIES_PATH);
      setFilms(results);
    }

    getData();
  }, []);

  return (
    <MoviesList>
      {movies.map(({ id, poster_path, title, name }) => (
        <Movie key={id}
          id={id}
          title={title}
          name={name}
          poster_path={poster_path} />
      ))}
    </MoviesList>
  );
}