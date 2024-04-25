import { useState, useContext, useEffect } from 'react';
import { getSearchResults } from '../services/geniusService';
import { QueryContext } from '../layouts/mainLayout';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function SearchBar() {
  const { searchResults, setSearchResults } = useContext(QueryContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  async function handleSearch() {
    const results = getSearchResults(searchQuery);
    setSearchResults(await results);
    navigate('/search');
  }

  async function handleKeyPress(event) {
    if (event.key === 'Enter') {
      await handleSearch();
    }
  }

  return (
    <div className="barrayboton">
      <input
        className="buscador"
        type="text"
        placeholder="Search a song"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button" className="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
