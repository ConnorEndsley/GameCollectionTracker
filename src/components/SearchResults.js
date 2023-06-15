import React from "react";
import {useEffect} from 'react';

const SearchResults = ( {searchResults, setSearchResults} ) => {
  

useEffect(() => {
  console.log(searchResults)
}, [])

  // call the onSearchResults function with the search results

  return <div>Filler for now</div>;
};

export default SearchResults;