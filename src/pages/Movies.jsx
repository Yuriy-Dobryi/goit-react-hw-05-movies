import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Search from 'components/Search/Search';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  function updateSearchParams(name) {
    if (movieName === name) {
      toast.info('The same search.');
      return;
    }
    
    setSearchParams(name ? { name } : {});
    if (!name) {
      toast.info('Please, enter the movie name');
    }
  }

  return (
    <>
      <Search defValue={movieName} onSubmit={updateSearchParams} />
      {movieName && <MoviesList API_path={`search/movie`} query={movieName} />}

      <ToastContainer />
    </>
  );
}