const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ "users": ['userOne', 'userTwo']})
})


app.listen(3000, function(){
    console.log("Server is up on localhost:3000")
})