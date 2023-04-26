const express = require('express');
const cors = require('cors');
const app = express();
const axios = require("axios");
app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ "users": ['userOne', 'userTwo']})
})

const API_KEY = "15ba8addfc0a4ffe83ccfb905b2e0048";

app.get('/api/searched-games', (req, res) => {
    const searchTerm = req.query.searchTerm;
    if (!searchTerm) {
      return res.status(400).send('Search term is required');
    }
  
    axios.get(`https://api.rawg.io/api/games?search=${searchTerm}&key=${API_KEY}`)
      .then(response => {
        res.send(response.data.results);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving games from RAWG API');
      });
  });


app.listen(4000, function(){
    console.log("Server is up on localhost:3000")
})