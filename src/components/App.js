import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home.js'
import Nav from "./Nav.js"
import TopGames from './TopGames.js'
import Search from './Search.js'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav/>
      <Routes> 
        <Route path='/' Component={Home}/>
        <Route exact path='/topgames' Component={TopGames}/>
        <Route exact path='/search' Component={Search}/>

      </Routes>
      </div>

    </BrowserRouter>
    )
}

export default App