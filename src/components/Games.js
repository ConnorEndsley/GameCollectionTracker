import React from 'react'
import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { Card, Stack, Box} from "@mui/material";

const Games = () => {
    const [games, setGames] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
  
    // useEffect to load all games from API on page load
    useEffect(() => {
      // fetch all game games from the API
      fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then((response) => response.json())
  
        // setting the new games from API to our state
        .then((games) => {
          setGames(games);
          console.log(games.results);
          setError(null);
        })
  
        .catch((err) => {
          setError(err.message);
          setGames(null);
        });
    }, []);

  return (
    <div>
        {games ? (
        <div
          className="homegame-thumbnails"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            overflowY: 'hidden'
          }}>
            
          {games.results.map((game) => (
            <Card
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                boxShadow: "none",
                borderRadius: 0,
              }}>

              <p className="game-name" style={{ fontFamily: "sans-serif", textAlign: "center" }}>
                {game.name}
              </p>

              <img
                style={{ height: "300px", width: "400px", display: "block", marginRight: "auto", marginLeft: "auto" }}
                src={game.background_image}
                alt="screenshot">
              </img>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}</div>
  )
}

export default Games