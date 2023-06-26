import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import { getMoviedb_API, spinStyles } from 'services';
import PreviewMovie from '../Movie/PreviewMovie';
import { Ul, Li, LinkStyled } from './MoviesList.styled';

export default function MoviesList({ API_path, query }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setIsLoading(true);
    
    (async function getData() {
      try {
        const { results, total_results } = await getMoviedb_API(API_path, query);
        
        if (total_results === 0) {
          setMovies([]);
          throw new Error('Sorry, no movies found with that name.');
        }
        if (query) {
          toast.success(
            `There are found ${total_results} movies. Currently, only the first page will be displayed, but we are working on pagination with infinite scroll. Stay tuned for updates!`
          );
        }
        
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

      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    })();

  }, [API_path, query]);

  return (
    <>
      {isLoading ? <TailSpin {...spinStyles} />
        :
        <Ul>
          {movies.map(({ id, title, name, poster_path, tagline }) =>
            <Li key={id}>
              <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                <PreviewMovie
                  title={title}
                  name={name}
                  poster_path={poster_path}
                  tagline={tagline}
                />
              </LinkStyled>
            </Li>
          )}
        </Ul>
      }
    </>
  );
}

MoviesList.propTypes = {
  API_path: PropTypes.string.isRequired,
  query: PropTypes.string,
};