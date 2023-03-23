import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home.js'
import Nav from "./NavComponents/Nav.js"
import TopGames from './TopGames.js'
import Search from './Search.js'
import Header from './Header.js'
import GameDetails from './GameDetails.js'


const App = () => {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes> 
        <Route path='/' Component={Home}/>
        <Route exact path='/topgames' Component={TopGames}/>
        <Route path='/game/:id' element={<GameDetails/>}/>
        <Route exact path='/search' Component={Search}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App