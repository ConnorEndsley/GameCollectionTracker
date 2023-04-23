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


// GET games based on search term

const getSearchedGames = () => {
    console.log("hitting here");
    return axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    
    .then(response => console.log(response.data))
    .catch(error => error);
}

console.log(getSearchedGames())


app.listen(4000, function(){
    console.log("Server is up on localhost:3000")
})