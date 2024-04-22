import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/mainLayout';
import Home from '../pages/Home';
import SongCard from '../components/SongCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/songs/:songId', element: <SongCard /> },
    ],
  },
]);

export { router };
