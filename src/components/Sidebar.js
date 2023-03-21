import React from "react";
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { API_KEY } from "../utils/constants";

// API call for getting all video game categories

const selectedCategory = "New"

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
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
    <Stack direction="column"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' },
      color: 'white'
   }}>
      <div className="sidebar-title">
        <h1>Categories</h1>
      </div>

      {categories ? (
        <div className="categories">
          {categories.map((category) => (
            <button className="categories-btn">
            <span style={{
                color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'
            }}>{category.icon}
            </span>

            <span style={{
                opacity: category.name === selectedCategory ? '1' : '0.8'
            }}>{category.name}
            </span>
            </button>
          ))}
        </div>
      ) : (<p>Working</p>)
      }
    </Stack>
  );
};

export default Sidebar;
