import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Box } from "@mui/system";
import { Card, CardMedia } from "@mui/material";
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
    // pass in id as the dependancy array so that useEffect will only be called again when the id changes
  }, [id]);

  return (
    <>
      {gameDetails ? (
        <Card>
          <div className="column-wrapper">
            <div className="sidebar-container">
              <Sidebar />
            </div>

            <div className="left-column">
              <div className="game-title">{gameDetails.name}</div>

              <div className="about">
                <h2>About</h2>
                <div className="description">{gameDetails.description_raw}</div>
              </div>
            </div>

            <div className="right-column">
              <CardMedia
                component="img"
                height="500"
                width="400"
                src={gameDetails.background_image}
              />
            </div>
          </div>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default GameDetails;
