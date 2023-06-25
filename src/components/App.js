import React, { createContext, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
import Search from "./Search.js";
import GameDetails from "./GameDetails.js";
import Header from "./Header.js";
import About from "./About.js";
import { FormControlLabel, Switch } from "@mui/material";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <BrowserRouter>
          <Header />
         <FormControlLabel control={<Switch label="Dark Mode" onChange={toggleTheme} checked={theme === "light"}/>} label="Light Mode"/> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route exact path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
