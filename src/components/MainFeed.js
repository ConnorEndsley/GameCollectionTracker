import React from "react";
import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { Card, Stack, Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Games from "./Games";

const MainFeed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

      <Box sx={{ height: { sx: 'auto', md: '92vh' }, 
      borderRight: '1px solid black', 
      px: { sx: 0, md: 2}}}>

        <Sidebar />

      </Box>

      <Box p={2} 
      sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Games />
      </Box>

    </Stack>
  );
};

export default MainFeed;
