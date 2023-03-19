import React from "react";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { API_KEY } from "../utils/constants";

// API call for getting all video game categories

const Sidebar = () => {
  const [categories, setCategories] = useState(null);

  const categoriesAPICall = () => {
    fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setCategories(data.results))

      .catch((error) => console.error(error));
    console.log(categories);
  };

  useEffect(() => {
    categoriesAPICall();
  }, []);

  return (
    <Stack direction="column">
      <div className="sidebar-title">
        <h1>SideBar</h1>
      </div>

      {categories ? (
        <div className="categories">
          {categories.map((category) => (
            <p>{category.name}</p>
          ))}
        </div>
      ) : (<p>Working</p>)
      }
    </Stack>
  );
};

export default Sidebar;
