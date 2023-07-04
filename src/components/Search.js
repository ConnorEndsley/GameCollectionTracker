import React, { useState } from "react";
import { Link, json } from "react-router-dom";
import { API_KEY } from "../utils/constants";
import { Card, CardMedia, Rating, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../Syles/search.css";
import { BorderColor } from "@mui/icons-material";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gameResults, setGameResults] = useState([]);

  // handle when the user types in the input field
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // on submit, the api call will initiate and grab the data based on the users search term and update the state
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

  return (
    <div className="game-search">
      <h1 className="search-title">Search some games here!</h1>
      <div className="searchbar-container">
        <TextField
          id="outlined-basic"
          label="Search Games..."
          variant="filled"
          value={searchTerm}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderColor: "white",
          }}
        />
        <button type="submit" onClick={onSubmit} className="search-btn">
          <SearchIcon />
        </button>
      </div>

      <div className="search-data">
        {gameResults ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              overflowY: "hidden",
            }}
          >
            {gameResults.map((game) => (
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
                      height: 300,
                      width: "100%",
                    }}
                  ></CardMedia>
                </Link>
                <p>
                  {game.name} <br></br>{" "}
                  <Rating
                    name="rating"
                    value={game.rating}
                    precision={0.1}
                    readOnly
                  />
                </p>{" "}
                ESRB:{" "}
                {game.esrb_rating ? game.esrb_rating.name : <p>Not Rated</p>}
              </Card>
            ))}
          </div>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
};

export default Search;
