import { useContext, useState } from 'react';
import { QueryContext } from '../layouts/mainLayout';
import SearchResultCard from '../components/SearchResultCard';

function SearchResults() {
  const { searchResults } = useContext(QueryContext);
  return (
    <ul>
      {searchResults !== '' &&
        searchResults.map((obj) => {
          return <SearchResultCard obj={obj} />;
        })}
    </ul>
  );
}

export default SearchResults;
