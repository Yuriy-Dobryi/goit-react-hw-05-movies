import { useState } from 'react';
import Search from 'components/Search/Search';
import RenderMovies from '../components/RenderMovies/RenderMovies';

export default function Movies() {
  const [movieName, setMovieName] = useState('');

  return (
    <>
      <Search onSubmitSearch={setMovieName} />

      {movieName && <RenderMovies
        path={`search/movie`}
        query={movieName} />}
    </>
  );
}