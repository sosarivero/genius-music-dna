import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
      <footer>
        <small>Footer</small>
      </footer>
    </>
  );
}

export default Root;
