let express=require('express');
let app=express();
let empRoute=require('./routes/Emp_Route');

app.use("/apl/emp",empRoute);
app.use("/apl/hr",hrRoute);
//localhost:3000/apl/emp/register =>post
//localhost:3000/apl/emp/login =>post
//localhost:3000/apl/emp/viewtask =>get
//localhost:3000/apl/emp/profile =>patch
//localhost:3000/apl/emp/logout =>post

//middleware
app.use(express.json());
app.use('/emp',empRoute);

//run the server
app.listen(3000,()=>{
    console.log("Server listening on the port 3000");
});