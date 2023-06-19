import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import MovieLink from '../MovieLink/MovieLink';
import { MoviesList } from './TopMovies.styled';
import getTop from '../../movie-API/getTop';

const TopMovies = () => {
  const [movies, setFilms] = useState(async () => {
    const { results } = await getTop();
    setFilms(results);
  });

  return (
    <MoviesList>
      {movies.map(({ id, webformatURL, largeImageURL, tags }) => (
        <MovieLink
          key={id}
          previewImg={webformatURL}
          largeImg={largeImageURL}
          tags={tags}
        />
      ))}
    </MoviesList>
  );
};

export default TopMovies;

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
