import PropTypes from 'prop-types';
import { Title, Poster } from './PreviewMovie.styled';
import defaultImage from '../../images/default.png';

export default function PreviewMovie({ title, name, poster_path, tagline }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <Poster
        src={poster_path ? imageUrl : defaultImage}
        alt={tagline ? tagline : 'Poster'}
      />
      <Title>{title ? title : name}</Title>
    </>
  );
}

PreviewMovie.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  tagline: PropTypes.string,
};