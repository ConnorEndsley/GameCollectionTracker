import { React, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { API_KEY } from '../utils/constants';

const SearchFeed = () => {

  const [ games, setGames ] = useState(null);
  const { searchTerm } = useParams();

  console.log("searchTerm:", searchTerm)

// https://api.rawg.io/api/games?search=portal?key=15ba8addfc0a4ffe83ccfb905b2e0048

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}?search=${searchTerm}`)
    .then( response => response.json())
    .then(data => console.log(data))

  }, [searchTerm]);

  return (
    <div>Search</div>
  )
}

export default SearchFeed