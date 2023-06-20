import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesDatabase from 'API/moviesDatabase';
import defaultImage from 'images/default.png'

export default function MovieInfo() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id: movieID } = useParams();

  useEffect(() => {
    if (!movieID) {
      return;
    }

    async function getMovieInfo() {
      const {
        poster_path,
        title,
        name,
        release_date,
        vote_average: rating,
        genres,
        overview,
        tagline,
      } = await moviesDatabase(`movie/${movieID}`);
      setMovieInfo({
        poster_path,
        title,
        name,
        release_date,
        rating,
        genres: genres.map(({ name }) => name).join(' '),
        overview,
        tagline,
      });
    }

    getMovieInfo();
  }, [movieID]);

  const {
    poster_path,
    title,
    name,
    release_date,
    rating,
    genres,
    overview,
    tagline,
  } = movieInfo;

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImage
        }
        alt={tagline ? tagline : 'Tagline coming soon'}
      />
      <p>{title ? title : name}</p>
      <p>{release_date}</p>
      <p>{rating ? rating : 'No rating'}</p>
      <p>{genres ? genres : 'No genres'}</p>
      <p>{overview}</p>
    </div>
  );
}
