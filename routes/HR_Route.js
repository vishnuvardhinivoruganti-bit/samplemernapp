let express = require('express');
let hrRoute = express.Router();

hrRoute.get('/viewmap', (req, res) => {
    res.send("HR view map route called");
});

hrRoute.post('/assigntask', (req, res) => {
    res.send("HR assign task route called");
});

hrRoute.delete('/deletemap', (req, res) => {
    res.send("HR delete map route called");
});

hrRoute.get('/viewtask', (req, res) => {
    res.send("HR view task route called");
});

module.exports = hrRoute;
