import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Box } from "@mui/system";
import { Card, CardMedia } from "@mui/material";
import Sidebar from "./Sidebar";

const GameDetails = () => {
  const [gameDetails, setGamesDetails] = useState(null);
  const [platforms, setPlatforms] = useState(null)

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

    // const gamePlatforms = gameDetails.platforms;
    // console.log(gamePlatforms)


  // function to extract the selected game's platform from API game data


  // console.log(getGamePlatforms())



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

              <div className="ratings">
                <h2>
                  Metacritic Rating
                  </h2>
                  <span>
                    <img
                      src="../metacritic-logo.png"
                      alt="metcritic logo"
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    ></img>

                  </span>
                  <div>:{gameDetails.metacritic}</div>
              </div>

              <div>
              {
                gameDetails.platforms.map((platform) => (
                  <h3>
                  {platform.name}
                  </h3>
                ))
              }
              </div>

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
