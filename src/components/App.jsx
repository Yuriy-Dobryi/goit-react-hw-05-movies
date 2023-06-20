import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieInfo from '../pages/MovieInfo';
import About from '../pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
