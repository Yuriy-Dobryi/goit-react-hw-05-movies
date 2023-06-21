import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Moviedb_API from 'services/Moviedb_API';
import PreviewMovie from '../PreviewMovie/PreviewMovie';
import { MoviesList, Wrapper } from './RenderMovies.styled';

export default function RenderMovies({ path, query }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await Moviedb_API(path, query);
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
    };
    getData();
  }, [path, query]);

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