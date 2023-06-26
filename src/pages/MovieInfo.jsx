import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import { getMoviedb_API, getYearFromDate, getDecimal, getString, spinStyles } from 'services';
import { IconBack, Wrapper, Poster, Item } from '../components/Movie/MovieInfo.styled';
import defaultImage from 'images/default.png';

export default function MovieInfo() {
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);

    (async function getMovieInfo() {
      try {
        const data = await getMoviedb_API(`movie/${id}`);

        setMovieInfo({
          imgPath: data.poster_path,
          title: data.title,
          name: data.name,
          year: getYearFromDate(data.release_date),
          rating: getDecimal(data.vote_average),
          genres: getString(data.genres, 'name'),
          overview: data.overview,
          tagline: data.tagline,
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate('*');
    }
  }, [error, navigate]);

  const { imgPath, title, name, year, rating, genres, overview, tagline } = movieInfo;
  
  return (
    <>
      <Link to={backLink.current}>
        <IconBack />
      </Link>
      
      {isLoading ? <TailSpin {...spinStyles} />
        :
        <Wrapper>
          <Poster
            src={
              imgPath
                ? `https://image.tmdb.org/t/p/w500/${imgPath}`
                : defaultImage
            }
            alt={tagline ? tagline : 'Poster'}
          />
          <ul>
            <Item>{title ? title : name}</Item>
            <Item>{year ? year : ''}</Item>
            <Item>{rating ? rating : ''}</Item>
            <Item>{genres ? genres : ''}</Item>
            <Item>{overview ? overview : ''}</Item>
          </ul>
        </Wrapper>
      }
    </>
  );
}