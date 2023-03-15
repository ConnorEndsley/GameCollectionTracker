import React from "react";
import { Link } from "react-router-dom";
import { Divider, Stack } from "@mui/material";

function Nav() {
  const navStyle = {
    color: "white",
    // display: 'flex',
    // flexDirection:'center'
  };
  return (
    <Stack
      direction="row"
      justifyContent="center"
      divider={<Divider orientation="vertical" flexItem />}
      p={2}
      sx={{
        position: "sticky",
        background: "red",
        top: 0,
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Link style={navStyle} to={"/"}>
        <button>Home Page</button>
      </Link>

      <Link style={navStyle} to={"/topgames"}>
        <button>Top Games</button>
      </Link>
      <Link style={navStyle} to={"/search"}>
        <button>Search Games</button>
      </Link>
    </Stack>
  );
}

export default Nav;
