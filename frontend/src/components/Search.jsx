import { useState, useContext, useEffect } from 'react';
import { getSearchResults } from '../services/geniusService';
import { QueryContext } from '../layouts/mainLayout';

function SearchBar() {
  const { searchResults, setSearchResults } = useContext(QueryContext);
  const [searchQuery, setSearchQuery] = useState('');

  async function handleSearch() {
    const results = getSearchResults(searchQuery);
    setSearchResults(await results);
    console.log(await searchResults);
  }

  return (
    <>
      <input type="text" placeholder="Search a song" onChange={(e) => setSearchQuery(e.target.value)} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </>
  );
}

export default SearchBar;
