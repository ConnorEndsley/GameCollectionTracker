import React, { useState } from "react";
import MainFeed from "./MainFeed";
import Sidebar from "./Sidebar";


const Home = () => {


  return (
    <>
      <div className="landing-image">
        <h1>
          Welcome to the Homepage! Please take a look at all of the game data
          you could wish for!
        </h1>
      </div>
      <MainFeed/>
    </>
  );
}

export default Home;
