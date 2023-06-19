import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MovieLink from '../MovieLink/MovieLink';
import { MoviesList } from './TopMovies.styled';
import getTop from '../../movie-API/getTop';

export default function TopMovies() {
  const [movies, setFilms] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const { results } = await getTop();
      setFilms(results);
    }

    getData();
  }, []);

  return (
    <MoviesList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieLink key={id} title={title} poster_path={poster_path} />
      ))}
    </MoviesList>
  );
};

// TopMovies.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string,
//     })
//   ).isRequired,
// };
