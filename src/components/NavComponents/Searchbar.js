import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Results from '../Results.js'
import axios from "axios";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    axios
      .get(`/api/searched-games?searchTerm=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>


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
    <Results searchResults={searchResults} setSearchResults={setSearchResults}/>
    </div>
  );
};

export default Searchbar;

