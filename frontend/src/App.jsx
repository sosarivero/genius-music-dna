import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import Home from './pages/Home';

function App() {
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
}

export default App;
