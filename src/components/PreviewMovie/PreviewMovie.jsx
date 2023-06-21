import { Name, Poster } from './PreviewMovie.styled';
import defaultImage from '../../images/default.png';

export default function Movie({ title, name, poster_path, tagline }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <>
      <Poster
        src={imageUrl ? imageUrl : defaultImage}
        alt={tagline ? tagline : 'Image coming soon'}
      />
      <div>
        <Name>{title ? title : name}</Name>
      </div>
    </>
  );
}