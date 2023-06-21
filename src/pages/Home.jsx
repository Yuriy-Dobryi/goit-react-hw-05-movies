import RenderMovies from '../components/RenderMovies/RenderMovies';
 
export default function Home() {
  return (
    <>
      <h1>Presenting the epitome of today's the most popular films:</h1>
      <RenderMovies path={'trending/all/day'} />
    </>
  );
}