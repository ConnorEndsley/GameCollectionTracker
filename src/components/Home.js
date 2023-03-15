import React, { useState } from 'react';
import { useEffect } from 'react';
import { API_KEY } from "../utils/constants"
import { Card } from '@mui/material';
 
function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
    


    // useEffect to load all games on page load
    useEffect( () => {
      // fetch all game data from the API
      fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
       .then(response => response.json())

       // setting the new data from API to our state
       .then((data) => {
        setData(data)
        console.log(data.results)
        setError(null);
      })

       .catch((err) => {
       setError(err.message);
       setData(null);
       }
      );
    }, [])

  return (
    <>
    <div className='landing-image'>
        <h1>
        Welcome to the Homepage! Please take a look at all of the game data you could wish for!
        </h1>
        <img src='gameCharacterImg.jpg'alt="Game Image"/>
    </div>
    {
      data 
      ? 
      <div className='homegame-thumbnails' style={ {display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'} }>

        {data.results.map(game =>

        <Card variant='outlined' sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <p className='game-name' style={ {fontFamily: 'sans-serif'} }>{game.name}</p>
        <img style={{height: '300px', width: '400px'}}
        src={game.background_image} alt="screenshot">
        </img>

        </Card>

        )}
      </div> 
      : 
      <p>Oops there is an error</p>
    }

    </>
  )
}

export default Home