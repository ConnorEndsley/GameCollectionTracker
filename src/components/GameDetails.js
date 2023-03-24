import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../utils/constants';
import { Box } from '@mui/system';
import { Card, CardMedia } from '@mui/material';

const GameDetails = () => {
  const [ gameDetails, setGamesDetails ] = useState(null)

  // useParams returns an object of 
  const {id} = useParams(); 

  useEffect(() => {
    console.log("working")
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    console.log(url)
    fetch(url)
    .then((response) => {
      return response.json()})
    .then((
      data => {setGamesDetails(data)}
    ))
  }, [])

  console.log(gameDetails)
  return (
    <>
    {
      gameDetails ? 

      <Card>
       <div className='game-title'>
       {gameDetails.name} 
        </div>  
        <CardMedia
        component="img"
        height="500"
        image
        />


      </Card> 
      
      : <h2>Loading...</h2>
    }
    </>
  )
}

export default GameDetails