import React from "react";
import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { Card, Stack, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Games from "./Games";

const MainFeed = () => {
  //set state of props
  const [games, setGames] = useState(null);
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
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid black",

          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Games
          games={games}
          setGames={setGames}
          error={error}
          setError={setError}
        />
      </Box>
    </Stack>
  );
};

export default MainFeed;
