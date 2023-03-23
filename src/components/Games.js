import React from "react";
import { useEffect, useState } from "react";
import { Card, Stack, Box, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import GameDetails from "./GameDetails";

const id = 3498;

const Games = ({games, setGames, error, setError}) => {
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
              <CardContent>
                <Link to={`/game/${id}`}>
                  <img
                    style={{
                      height: "300px",
                      width: "400px",
                      display: "block",
                      marginRight: "auto",
                      marginLeft: "auto",
                    }}
                    src={game.background_image}
                    alt="screenshot"
                  ></img>
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
              </CardContent>
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
