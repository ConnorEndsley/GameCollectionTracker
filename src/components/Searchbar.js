// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import SearchResults from './SearchResults';
// import { API_KEY } from '../utils/constants';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// function Searchbar() {
// const [searchTerm, setSearchTerm] = useState("");
// const [gameResults, setGameResults] = useState([]);
// const nav = useNavigate();

// const handleChange = (event) => {
//   setSearchTerm(event.target.value);
//   console.log(searchTerm);
// }

// const onSubmit = async (event) => {
//   event.preventDefault();
 
//   try{
//    const response = await fetch(`https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`)
//     const jsonData = await response.json()
//     const results = jsonData.results;
//     console.log("RESULTS", results)
//     if(!results){
//       alert("No games found")
//     } else {
//       setGameResults(results)
//     }
//   } catch(error){
//     console.log(error)
//   }
// }

//   return (
// <div className='game-search'>
// <h1>
//   Search Games
// </h1>
// <form onSubmit={onSubmit}>
//   <input type='text' onChange={handleChange}/>
//   <br></br>
// <Link to={{
//   pathname: `/search-results/${searchTerm}`,
//   state: { gameResults: true }
// }}>
// <button>
// Search
// </button>
// </Link>
// </form>
// </div>
//   )
// }

// export default Searchbar
