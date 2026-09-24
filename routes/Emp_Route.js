let express=require('express');
let route=express.Router();
let{users}=require('../models/users');

{
    "name";"John Doe",
    "email"; "johndoe@example.com",
    "password"; "password123",
    "role"; "employee"
}

route.post('/register',(req,res)=>{
    let data=req.body;
    res.send("register route called");
});
route.post('/login', (req, res) => {
    res.send("login route called");
});
route.get('/viewtask',(req,res)=>{
    res.send("view task route called");
});
route.patch('/profile', (req, res) => {
    res.send("profile route called");
});
route.post('/logout', (req, res) => {
    res.send("logout route called");
});

module.exports=route;

