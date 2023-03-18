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
      divider={<Divider orientation="vertical" flexItem />}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
        <VideogameAssetIcon sx={{ fontSize: 50}}/>
      {/* <Link style={navStyle} to={"/"}>
        <Button variant="contained">Home Page</Button>
      </Link>

      <Link style={navStyle} to={"/topgames"}>
      <Button variant="contained">Top Games</Button>
      </Link> */}
      <Searchbar/>
    </Stack>
  );
}

export default Nav;
