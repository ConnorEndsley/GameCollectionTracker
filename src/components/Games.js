import React from "react";
import { useEffect, useState } from "react";
import { Card, Stack, Box, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import GameDetails from "./GameDetails";


const Games = ({ games, setGames, error, setError }) => {
  const [gameId, setGameId] = useState("");
  const [loading, setLoading] = useState(null);

 
  return (
    <div>
      {games ? (
        <div
          className="homegame-thumbnails"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            overflowY: "hidden",
          }}
        >
          {games.results.map((game) => (
            <Card
              variant="outlined"
              sx={{
                width: { xs: "100%", sm: "358px", md: "320px" },
                boxShadow: "5px 5px 5px black",
                borderRadius: "25px",
                backgroundColor: "black",
                color: "white",
                m: "7px",
              }}
            >
              <Link to={`/games/${game.id}`}>
                <CardMedia
                  image={game.background_image}
                  sx={{
                    padding: 0,
                    height: 400,
                    width: "100%",
                  }}
                ></CardMedia>
              </Link>

              <h3
                className="game-name"
                style={{
                  fontFamily: "sans-serif",
                  textAlign: "center",
                  backgroundColor: "",
                }}
              >
                {game.name}
              </h3>
            </Card>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Games;
