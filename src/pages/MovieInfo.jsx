import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import {  } from 'react-router-dom';

import Moviedb_API from 'services/getMoviedb_API';
import { IconBack, Wrapper, Poster, InfoList, Item } from '../components/Movie/MovieInfo.styled';
import defaultImage from 'images/default.png';

export default function MovieInfo() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id: movieID } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

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
      } = await Moviedb_API(`movie/${movieID}`);
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
    <>
      <Link to={backLink.current}>
        <IconBack />
      </Link>
      <Wrapper>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImage
          }
          alt={tagline ? tagline : 'Tagline coming soon'}
        />
        <InfoList>
          <Item>{title ? title : name}</Item>
          <Item>
            {release_date ? release_date : 'Release date coming soon'}
          </Item>
          <Item>{rating ? rating : 'Rating coming soon'}</Item>
          <Item>{genres ? genres : 'Genres coming soon'}</Item>
          <Item>{overview ? overview : 'Overview coming soon'}</Item>
        </InfoList>
      </Wrapper>
    </>
  );
}