let express=require('express');
let app=express();
//localhost:3000/addstudent
app.post("/addStudent",(req,res)=>{
    res.send("Add student called");
});
//localhost:3000/getstudents
app.get("/updateStudent",(req,res)=>{
    res.send("update student called");
});
//run the server
app.listen(3000,()=>{
    console.log("Server listening on the port 3000");
});