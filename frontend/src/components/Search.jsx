import { useState, useContext, useEffect } from 'react';
import { getSearchResults } from '../services/geniusService';
import { QueryContext } from '../layouts/mainLayout';
import './Search.css'

function SearchBar() {
  const { searchResults, setSearchResults } = useContext(QueryContext);
  const [searchQuery, setSearchQuery] = useState('');

  async function handleSearch() {
    const results = getSearchResults(searchQuery);
    setSearchResults(await results);
  }

  async function handleKeyPress(event) {
    if (event.key === 'Enter') {
      await handleSearch();
    }
  }

  return (
    <div className='barrayboton'>
      <input
        className="buscador"
        type="text"
        placeholder="Search a song"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button type="button"  className='search' onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
