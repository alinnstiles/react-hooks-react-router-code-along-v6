// src/routes.js
import { createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';

const routes = createRoutesFromElements(
 <>
    <Route path="/" element={<Home />} />
    <Route path="/directors" element={<Directors />} />
    <Route path="/actors" element={<Actors />} />
    <Route path="/movie/:id" element={<Movie />} />
 </>
);

export default routes;
