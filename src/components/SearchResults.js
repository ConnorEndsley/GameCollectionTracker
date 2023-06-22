import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import React from "react";
import {useEffect} from 'react';
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  let { state } = useLocation();
  console.log("IN RESULTS COMPOENTN", state)


  return(
    <div>
      SearchResults page
    </div>
  )
};

export default SearchResults;