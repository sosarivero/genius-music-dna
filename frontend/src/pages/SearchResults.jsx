import { useContext, useState } from 'react';
import { QueryContext } from '../layouts/mainLayout';
import SearchResultCard from '../components/SearchResultCard';
import { Link } from 'react-router-dom';

function SearchResults() {
  const { searchResults } = useContext(QueryContext);
  return (
    <ul className="results-list">
      {searchResults !== '' &&
        searchResults.map((obj) => {
          return (
            <Link to={obj.result.api_path} key={obj.result.id}>
              <SearchResultCard obj={obj} />
            </Link>
          );
        })}
    </ul>
  );
}

export default SearchResults;
