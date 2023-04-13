import React, { useState } from 'react'

const Search = () => {
  
  const [ searchTerm, setSearchTerm ] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value); 
  }

  return (
    <div>Search</div>
  )
}

export default Search