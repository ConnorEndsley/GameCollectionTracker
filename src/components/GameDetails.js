import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Box } from "@mui/system";
import { Card, CardMedia, Stack } from "@mui/material";
import Sidebar from "./Sidebar";

const GameDetails = () => {
  const [gameDetails, setGamesDetails] = useState(null);

  // useParams returns an object of
  const { id } = useParams();

  useEffect(() => {
    console.log("working");
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
    console.log(url);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGamesDetails(data);
      });
  }, []);

  console.log("gameDetails page", gameDetails);
  return (
    <>
      {gameDetails ? (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
          <div className="column-wrapper">
            <div className="left-column">
              <div className="game-title">{gameDetails.name}</div>

              <div className="about">
                <h2>About</h2>
                <div className="description">{gameDetails.description_raw}</div>
              </div>
              <div className="genres">
                  <h3>Game Genres</h3>
                  {gameDetails.genres.map((genre) => (
                    <p>{genre.name}</p>
                  ))}
                </div>
            </div>

            <div className="right-column">
              <Card>
                <CardMedia
                  component="img"
                  height="500"
                  width="400"
                  src={gameDetails.background_image}
                />
              <div className="ratings">
                  <p>Metacritic Score: {gameDetails.metacritic}</p>
                </div>


              </Card>

            </div>
          </div>
        </Stack>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default GameDetails;
