import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <small>Footer</small>
      </footer>
    </>
  );
}

export default Root;
