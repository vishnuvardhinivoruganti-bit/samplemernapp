let express = require('express');
let route = express.Router();
let { users } = require('../models/users');
let bcrypt = require('bcrypt');

// Register route
route.post('/register', async (req, res) => {
    try {
        let data = req.body;
        data.password = await bcrypt.hash(data.password, 10); // hash first
        let newuser = new users(data);
        let result = await newuser.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Login route
route.post('/login', async (req, res) => {
    try {
        let data = req.body;
        let emailcheck = await users.findOne({ email: data.email }); // await here

        if (!emailcheck) {
            return res.send("user not found");
        }

        let passcheck = await bcrypt.compare(data.password, emailcheck.password);
        if (passcheck) {
            res.send("login successful");
        } else {
            res.send("invalid password");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Other routes
route.get('/viewtask', (req, res) => {
    res.send("view task route called");
});

route.get('/profile', (req, res) => { // GET makes more sense
    res.send("profile route called");
});
route.get('/updateprofile/:id',async (req, res) => { 
    let data=req.body;
    let datapassword=await bcrypt.hash(data.password,10);
    let result=await users.updateOne({_id:req.params.id},{$set:{name:data.name,email:data.email,password:datapassword}});
    res.send(result);
});
route.get('/viewmap', (req, res) => {
    res.send("view map route called");
});
route.post('/logout', (req, res) => {
    res.send("logout route called");
});

module.exports = route;
