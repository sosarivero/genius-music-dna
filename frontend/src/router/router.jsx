import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/mainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export { router };
