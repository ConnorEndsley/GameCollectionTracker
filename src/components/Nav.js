import React from "react";
import { Link } from "react-router-dom";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { Divider, Stack, Button } from "@mui/material";
import Searchbar from "./Searchbar";

const Nav = () => {
  const navStyle = {
    color: "white",
    // display: 'flex',
    // flexDirection:'center'
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      p={2}
      sx={{
        top: 0,
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <div className="nav-container">
        <div className="header-item">
          <div className="title">Game-Hub <VideogameAssetIcon sx={{ fontSize: 50}}/></div>
        </div>
      <div className="saerch-container">
      <Searchbar/>
      </div>
      <Link style={navStyle} to={"/"}>
        <Button variant="contained">Home Page</Button>
      </Link>

      <Link style={navStyle} to={"/topgames"}>
      <Button variant="contained">Top Games</Button>
      </Link>
      </div>

    </Stack>
  );
}

export default Nav;
