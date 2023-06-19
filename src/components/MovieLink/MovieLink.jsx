import { Movie, Image } from '../MovieLink/MovieLink.styled';
const baseUrl = 'https://image.tmdb.org/t/p/';
const imageSize = 'w500';

export default function MovieLink({ title, poster_path }) {
  
  const imageUrl = `${baseUrl}${imageSize}${poster_path}`;

  return (
    <li>
      <p>{title}</p>
      <img src={imageUrl} alt="Фильм" />
    </li>
  );
}


// https://image.tmdb.org/t/p/w500/