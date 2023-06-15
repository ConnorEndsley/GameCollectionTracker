import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { API_KEY } from "../../utils/constants";
import SearchResults from "../SearchResults";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // function to fetch the game searched when submitted in the searchbar and navigate to the appropriate page.
  const handleSearch = async (event) => {
    event.preventDefault();

    // wrap api call in a try block because async/await
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`
      );
      const data = await response.json();
      setSearchResults(data.results);
      navigate(`/search-results/${searchTerm}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleNoResults = () => {
    console.log("could not find any games");
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          borderRadius: "25px",
          border: "1px solid #e3e3e3",
          backgroundColor: "#444343",
          p1: 6,
          boxShadow: "none",
          mr: { sm: 2 },
        }}
        onSubmit={handleSearch}
      >
        <IconButton type="submit" sx={{ p: "10px", color: "white" }}>
          <SearchIcon />
        </IconButton>
        <input
          className="search-bar"
          placeholder="Search for games"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </Paper>
      {searchResults.length > 0 ? (
        <SearchResults
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
      ) : (
        handleNoResults()
      )}
    </>
  );
};

export default Searchbar;
