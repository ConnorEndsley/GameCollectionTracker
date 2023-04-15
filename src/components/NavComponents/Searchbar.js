import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  // initializing state of searchTerms and useNavigate
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 0,
        border: "1px solid #e3e3e3",
        backgroundColor: "#444343",
        borderRadius: "25px",
        p1: 6,
        boxShadow: "none",
        mr: { sm: 2 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search for games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
