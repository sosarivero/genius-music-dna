import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/mainLayout';
import Home from '../pages/Home';
import SearchResults from '../pages/SearchResults';
import SongCard from '../components/SongCard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/songs/:songId', element: <SongCard /> },
      { path: '/search', element: <SearchResults /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
    ],
  },
]);

export { router };
