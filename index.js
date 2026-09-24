let express=require('express');
let app=express();
let mongoose=require('mongoose');
let empRoute=require('./routes/Emp_Route');
let hrRoute=require('./routes/HR_Route');
mongoose.connect("mongodb://localhost:27017/HRmanagement").then(()=> console.log("Database connected successfully"))
.catch((err)=> console.log(err));

app.use(express.json());
app.use("/api/emp",empRoute);
app.use("/api/hr",hrRoute);
//localhost:3000/api/emp/register =>post
//localhost:3000/api/emp/login =>post
//localhost:3000/api/emp/viewtask =>get
//localhost:3000/api/emp/profile =>patch
//localhost:3000/api/emp/logout =>post

//middleware
app.use(express.json());
app.use('/api/emp',empRoute);

//run the server
app.listen(3000,()=>{
    console.log("Server listening on the port 3000");
});