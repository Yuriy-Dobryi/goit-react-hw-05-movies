import { Link } from 'react-router-dom';
import { Wrapper, Name, Image } from './Movie.styled';
import defaultImage from '../../images/default.png';

export default function Movie({ id, poster_path, title, name, tagline }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Wrapper>
      <Link to={`/movies/${id}`}>
        <Image
          src={imageUrl ? imageUrl : defaultImage}
          alt={tagline ? tagline : 'Image coming soon'}
        />
        <Name>{title ? title : name}</Name>
      </Link>
    </Wrapper>
  );
}