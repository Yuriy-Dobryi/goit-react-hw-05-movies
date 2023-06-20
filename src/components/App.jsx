import Home from '../pages/Home';
import Movies from '../pages/Movies';
import About from '../pages/About';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;