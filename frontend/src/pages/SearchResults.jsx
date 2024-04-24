import { useContext, useState } from 'react';
import { QueryContext } from '../layouts/mainLayout';
import SearchResultCard from '../components/SearchResultCard';

function SearchResults() {
  const { searchResults } = useContext(QueryContext);
  return (
    <ul className="results-list">
      {searchResults !== '' &&
        searchResults.map((obj) => {
          return <SearchResultCard obj={obj} key={obj.result.id} />;
        })}
    </ul>
  );
}

export default SearchResults;
