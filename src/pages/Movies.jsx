import { useSearchParams } from 'react-router-dom';
import Search from 'components/Search/Search';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  function updateParams(name) {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <Search updateParams={updateParams} />

      {movieName && <MoviesList API_path={`search/movie`} query={movieName} />}
    </>
  );
}