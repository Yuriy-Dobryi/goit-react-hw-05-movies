import RenderMovies from '../components/RenderMovies/RenderMovies';
import styled from 'styled-components';

const Title = styled.h1`
  color: #424254;
  text-align: center;
`;

export default function Home() {
  return (
    <>
      <Title>Presenting the epitome of today's the most popular films:</Title>
      <RenderMovies API_path={'trending/all/day'} />
    </>
  );
}