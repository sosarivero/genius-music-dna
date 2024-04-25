import { Outlet } from 'react-router-dom';
import { createContext, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/Search';
import { useLocation } from 'react-router-dom';
import { getProfile } from '../services/userService';

export const QueryContext = createContext(null);
export const UserContext = createContext(null);

function Root() {
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();

  let isNotRootPath = location.pathname !== '/';

  {
    getProfile(localStorage.getItem('token'));
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <QueryContext.Provider value={{ searchResults, setSearchResults }}>
        <Header />
        {isNotRootPath && <SearchBar />}
        <Outlet />
        <footer>
          <small>Footer</small>
        </footer>
      </QueryContext.Provider>
    </UserContext.Provider>
  );
}

export default Root;
