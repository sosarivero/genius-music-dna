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
            <Link to={obj.result.api_path}>
              <SearchResultCard obj={obj} key={obj.result.id} />
            </Link>
          );
        })}
    </ul>
  );
}

export default SearchResults;
