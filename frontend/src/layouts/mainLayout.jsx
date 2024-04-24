import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/Search';
import { useLocation } from 'react-router-dom';

export const QueryContext = createContext(null);

function Root() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  let isNotRootPath = location.pathname !== '/';

  return (
    <>
      <QueryContext.Provider value={{ searchResults, setSearchResults }}>
        <Header />
        {isNotRootPath && <SearchBar />}
        <Outlet />
        <footer>
          <small>Footer</small>
        </footer>
      </QueryContext.Provider>
    </>
  );
}

export default Root;
