import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home.js'
import TopGames from './TopGames.js'
import Search from './Search.js'
import GameDetails from './GameDetails.js'
import SearchResults from './SearchResults.js'
import Header from './Header.js'
import About from './About.js'


const App = () => {

  
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/games/:id' element={<GameDetails/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search-results/:searchTerm' element={<SearchResults/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App  