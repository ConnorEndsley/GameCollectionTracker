import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Card, CardMedia} from "@mui/material";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      let url = `https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`;
      let response = await fetch(url);

      let gameData = await response.json();
      console.log(gameData);
      setGameResults(gameData.results);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(gameResults);

  return (
    <div className="game-search">
      <h1>Search Games</h1>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
      <div className="search-data">
        {gameResults ? (
          gameResults.map((game) => (
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
              <p>{game.name} <br></br> Rating: {game.rating}/5</p>
            </Card>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Search;
