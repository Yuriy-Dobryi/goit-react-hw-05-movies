import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import { getMoviedb_API, spinStyles } from 'services';
import PreviewMovie from '../Movie/PreviewMovie';
import { MoviesList, Wrapper, LinkStyled } from './RenderMovies.styled';

export default function RenderMovies({ API_path, query }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    (async function getData() {
      const { results } = await getMoviedb_API(API_path, query);
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

      setIsLoading(false);
    })();
  }, [API_path, query]);
  
  return (
    <>
      {isLoading ? (
        <TailSpin {...spinStyles} />
      ) : (
        <MoviesList>
          {movies.map(({ id, title, name, poster_path, tagline }) => (
            <Wrapper key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <PreviewMovie
                  title={title}
                  name={name}
                  poster_path={poster_path}
                  tagline={tagline}
                />
              </LinkStyled>
            </Wrapper>
          ))}
        </MoviesList>
      )}
    </>
  );
}