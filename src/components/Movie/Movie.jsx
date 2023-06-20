import { Link } from 'react-router-dom';
import { Wrapper, Name, Image } from './Movie.styled';
import defaultImage from '../../images/default.png';

const baseUrl = 'https://image.tmdb.org/t/p/';
const imageSize = 'w500';

export default function Movie({ id, poster_path, title }) {
  const imageUrl = `${baseUrl}${imageSize}${poster_path}`;

  return (
    <Link to={`movies/${id}`}>
      <Wrapper>
        <Image
          src={imageUrl ? imageUrl : defaultImage}
          alt={title ? title : 'Image coming soon'}
        />
        <Name>{title ? title : '*'}</Name>
      </Wrapper>
    </Link>
  );
}
