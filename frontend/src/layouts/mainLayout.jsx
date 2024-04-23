import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import SearchBar from '../components/Search';

export const QueryContext = createContext(null);

function Root() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <QueryContext.Provider value={{ searchResults, setSearchResults }}>
        <header>
          <SearchBar />
        </header>
        <Outlet />
        <footer>
          <small>Footer</small>
        </footer>
      </QueryContext.Provider>
    </>
  );
}

export default Root;
