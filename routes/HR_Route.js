let express = require('express');
let hrRoute = express.Router();
let { users } = require('../models/users');
let { task } = require('../models/tasks');
hrRoute.post('/assign-task', async (req, res) => {
    try {
        let data = req.body;
        let newTask = new task(data);
        let result = await newTask.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
hrRoute.get('/viewmap', async (req, res) => {
    let result = await users.find({ role: 'employee' });
    res.send(result);
});
//open postman choose get method 
// enter the url http://localhost:3000/api/hr/viewmap
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
