import { useState } from 'react';
import getTop from '../movie-API/getTop'

export default function Home() {
  const [films, setFilms] = useState(async () => {
    const { results } = await getTop();
    setFilms(results);
    console.log(films);
  });
  
  return <div>Presenting the epitome of today's the most popular films:</div>;
}