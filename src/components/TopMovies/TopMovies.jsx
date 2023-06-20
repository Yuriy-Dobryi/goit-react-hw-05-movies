import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moviesDatabase from 'API/moviesDatabase';
import PreviewMovie from '../Movie/PreviewMovie';
import { MoviesList, Wrapper } from './TopMovies.styled';

const TOP_MOVIES_PATH = 'trending/all/day';

export default function TopMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await moviesDatabase(TOP_MOVIES_PATH);
      const moviesData = results.map(
        ({ id, poster_path, title, name, tagline }) => ({
          id,
          poster_path,
          title,
          name,
          tagline,
        })
      );
      setMovies(moviesData);
    }
    getData();
  }, []);

  return (
    <MoviesList>
      {movies.map(({ id, title, name, poster_path, tagline }) => (
        <Wrapper key={id}>
          <Link to={`/movies/${id}`}>
            <PreviewMovie
              title={title}
              name={name}
              poster_path={poster_path}
              tagline={tagline}
            />
          </Link>
        </Wrapper>
      ))}
    </MoviesList>
  );
}