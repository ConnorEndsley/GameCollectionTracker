import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Box } from "@mui/system";
import { Card, CardMedia, Container, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import "../Syles/gameDetails.css";

const GameDetails = () => {
  const [gameDetails, setGamesDetails] = useState(null);
  const [gameTrailer, setGameTrailer] = useState([]);
  const [metaColor, setMetaColor] = useState("green");

  // useParams returns an object of
  const { id } = useParams();

  // useEffect to fetch the API data as soon as the page loads based on the game's ID.
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
        console.log(gameDetails);
      });
    // pass in id as the dependancy array so that useEffect will only be called again when the id changes
  }, [id]);

  // useEffect to fetch the trailers for the game based on their ID.

  // useEffect(() => {
  //   const fetchScreenshots = async () => {
  //     const url = `https://api.rawg.io/api/games/${id}/screenshots}`;
  //     try {
  //       await fetch(url)
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log(data);
  //           setGameTrailer(data.results);
  //         });
  //     } catch (error) {}
  //   };
  //   fetchScreenshots();
  // }, []);

  return (
    <Container>
      {gameDetails ? (
        <Card
          sx={{
            color: "white",
          }}
        >
          <div className="column-wrapper">
            <div className="left-column">
              <div className="game-title">{gameDetails.name}</div>

              <div className="about">
                <h2>About</h2>
                <Typography>{gameDetails.description_raw}</Typography>
              </div>

              <div className="meta-wrapper">
                <div className="meta-block">
                  <div className="meta-title">Platforms:</div>

                  <div className="meta-text">
                    {gameDetails.parent_platforms.map((platform) => (
                      <div>{platform.platform.name + ","}</div>
                    ))}
                  </div>
                </div>
                <div className="meta-block">
                  <div className="meta-title">Metascore:</div>
                  <div
                    id={metaColor}
                      style={gameDetails.metacritic > 80 ? {color: 'green'} : (gameDetails.metacritic <80 && gameDetails.metacritic >60) ? {color: 'yellow'} : gameDetails.metacritic <60 ? {color: 'red'} : {color: "white"}}
                  >
                    {gameDetails.metacritic}
                  </div>
                </div>
                <div className="meta-block"></div>
                <div className="meta-block"></div>
                <div className="meta-block"></div>
                <div className="meta-block"></div>
              </div>
            </div>

            <Box
              sx={{
                width: "60%",
                margin: "50px",
              }}
            >
              <CardMedia
                component="img"
                height="500"
                width="400"
                src={gameDetails.background_image}
              />
            </Box>
          </div>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default GameDetails;
