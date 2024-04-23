import { useContext, useState } from 'react';
import { QueryContext } from '../layouts/mainLayout';

function SearchResults() {
  const { searchResults } = useContext(QueryContext);
  return (
    <ul>
      {searchResults !== '' &&
        searchResults.map((obj) => {
          {
            console.log(obj.result.full_title);
          }
          return <li>{obj.result.title}</li>;
        })}
    </ul>
  );
}

export default SearchResults;
