import React from "react";
import { Link } from "react-router-dom";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { Divider, Stack, Button } from "@mui/material";
import "../Syles/navbar.css";

const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    // display: 'flex',
    // flexDirection:'center'
  };
  return (
    <div className="nav-container">
      <div className="header-item">
        <Link to={"/"} style={navStyle}>
          <div className="title">
            Game-Hub <VideogameAssetIcon sx={{ fontSize: 50 }} />
          </div>
        </Link>
      </div>
      <div className="right-header">
        <Link to={'/search'}>
          <button>Search Games Here</button>
        </Link>
        <Link to={'about'}><button>About</button></Link>
      </div>
    </div>
  );
};

export default Nav;
